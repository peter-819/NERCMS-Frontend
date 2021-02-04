import Vue from 'vue'
const state = () => ({
    CurrentDialog:''
})

const getters = {
}

const actions = {}

const mutations = {
    ShowDialog: (state,dialogName)=>state.CurrentDialog=dialogName,
    HideDialog: (state)=>state.CurrentDialog='',
}

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}