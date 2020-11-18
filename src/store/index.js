import Vue from 'vue'
import Vuex from 'vuex'
import Dialogs from './modules/Dialogs'
import ProjectInfo from './modules/ProjectInfo'

Vue.use(Vuex);
const debug = process.env.NODE_ENV != 'production'

export default new Vuex.Store({
    modules:{
        Dialogs,
        ProjectInfo
    },
    strict:debug
});