export default {
    state: {
        items: []
    },
    mutations: {
        'cart-add-item': (state, data) => {
            state.items.push(data.item);
        }      
    }
};