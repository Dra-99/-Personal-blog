import { setBlogTitle } from '../utils';
import { getGlobalSetting } from '../api/setting';
export default {
    namespaced: true,
    state: {
        loading: false,
        data: null
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
        async getSetting(ctx) {
            ctx.commit('setLoading', true);
            const resp = await getGlobalSetting();
            ctx.commit('setLoading', false);
            ctx.commit('setData', resp);
            if(resp.favicon) {
                let link = document.querySelector("link[rel='shortcut icon']");
                if(link) {
                    return;
                }
                link = document.createElement("link");
                link.rel = "shortcut icon";
                link.type = "images/x-icon";
                link.href = resp.favicon;
                document.querySelector("head").appendChild(link);
            }
            if(resp.siteTitle) {
                setBlogTitle.setSiteTitle(resp.siteTitle);
            }
        }
    }
}