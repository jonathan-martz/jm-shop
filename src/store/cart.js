export default {
    state: {
        items: []
    },
    mutations: {
        "cart-load": (state, data) => {
            state.items = JSON.parse(data.that.$localStorage.get('cart'));
        },
        "cart-clear": (state) => {
            state.items = [];
        },
        "cart-update-qty": (state, data) => {
            if (data.qty < 1) {
                return false;
            }
            for (let i = 0; i < state.items.length; i++) {
                if (data.id == state.items[i].id) {
                    state.items[i].qty = data.qty;
                }
            }
            data.that.$localStorage.set('cart', JSON.stringify(state.items));
        },
        "cart-add-item": (state, data) => {
            let found = false;
            if (state.items) {
                for (let i = 0; i < state.items.length; i++) {
                    if (data.item == state.items[i].product) {
                        found = true;
                        state.items[i].qty = parseInt(state.items[i].qty) + data.qty;
                    }
                }
            }
            else {
                state.items = [];
            }

            if (!found) {
                state.items.push({
                    product: data.item,
                    qty: data.qty,
                    price: data.price
                });
            }
            data.that.$localStorage.set('cart', JSON.stringify(state.items));
        }
    }
};