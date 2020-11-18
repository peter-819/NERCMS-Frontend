import Vue from 'vue'
const state = () => ({
    visiblity:new Object
})

const getters = {
    GetDialogVisiblity:(state)=>(dialogName)=>state.visiblity[dialogName]
}

const actions = {}

const mutations = {
    ShowDialog: (state,dialogName)=>Vue.set(state.visiblity,dialogName,true),
    HideDialog: (state,dialogName)=>Vue.set(state.visiblity,dialogName,false)
}

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}