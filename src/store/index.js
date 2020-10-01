import Vuex from 'vuex';
import Vue from 'vue';
import playerModule from './modules/playerModule'

//Load Vuex
Vue.use(Vuex);
Vue.config.devtools = true

// Create store
export default new Vuex.Store({
    modules: {
        playerModule
    }
});