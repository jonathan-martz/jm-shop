export default {
    state: {
        mobile: false,
        tablet: false,
        desktop: false
    },
    mutations: {
        'screen-change': (state, width) => {
            if(width < 486){
                state.mobile = true;
                state.tablet = false;
                state.desktop = false;
            }
            else if(width > 486 && width < 768){
                state.mobile = false;
                state.tablet = true;
                state.desktop = false;
            }
            else {
                state.mobile = false;
                state.tablet = false;
                state.desktop = true;
            }
        }
    }
};