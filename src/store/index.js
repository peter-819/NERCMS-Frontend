import Vue from 'vue'
import Vuex from 'vuex'
import Dialogs from './modules/Dialogs'
import ProjectInfo from './modules/ProjectInfo'
import Server from './modules/Server'

Vue.use(Vuex);
const debug = process.env.NODE_ENV != 'production'

export default new Vuex.Store({
    modules:{
        Dialogs,
        ProjectInfo,
        Server
    },
    strict:debug
});