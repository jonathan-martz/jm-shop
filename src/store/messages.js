export default {
    state: {
        items: []
    },
    mutations: {
        'message-add': (state, data) => {
            state.items.push(data.message);
        },
               
    }
};