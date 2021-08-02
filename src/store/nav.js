export default {
    state: {
        toggle: false,
        items: [{
            to: "/impressum",
            title: "Impressum"
        }]
    },
    mutations: {
        'nav-toggle': (state) => {
            state.toggle = !state.toggle;
        },
        'nav-close': (state) => {
            state.toggle = false;
        },        
    }
};