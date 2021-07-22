export default {
    state: {
        items: []
    },
    mutations: {
        'add-todo': (state, data) => {
            state.items.push(data.item);
            data.this.$localStorage.set('todos', JSON.stringify(state.items));
        },
        'load-todo': (state, data) => {
            if(data.this.$localStorage.get('todos')){
                state.items = JSON.parse(data.this.$localStorage.get('todos'));
            }
            else{
                state.items = [];
            }
        },
        'remove-todo': (state, data) => {
            let tmp = [];
            for (let i = 0; i < state.items.length; i++) {
                if (data.key != i) {
                    tmp.push(state.items[i]);
                }
            }
            state.items = tmp;
            data.this.$localStorage.set('todos', JSON.stringify(state.items));
        }
    }
};