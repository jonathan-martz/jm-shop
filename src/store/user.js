export default {
    state: {
        username: "",
        token: ""
    },
    mutations: {
        'user-login': (state, data) => {
            state.username = data.user.username;
            state.token = data.user.token;
            data.that.$localStorage.set('user', JSON.stringify(data.user));
        },
        'user-reload': (state, data) => {
            if(data.that.$localStorage.get('user')){
                let user = JSON.parse(data.that.$localStorage.get('user'));
                state.username = user.username;
                state.token = user.token;
            }
        }               
    }
};