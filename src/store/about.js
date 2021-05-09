import {getAbout} from '../api/about';

export default {
    namespaced: true,
    state: {
        loading: false,
        data: ''
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload;
        },
        setData(state, payload) {
            state.data = payload;
        }
    },
    actions: {
        async about(ctx) {
            if(ctx.state.data) {
                return;
            }
            ctx.commit('setLoading', true);
            const resp = await getAbout();
            ctx.commit('setLoading', false);
            ctx.commit('setData', resp);
        }
    }
}