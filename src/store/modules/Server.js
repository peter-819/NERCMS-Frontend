import Vue from 'vue'
const state = () => ({
    Url:''
})

const getters = {
    GetUrl:(state)=>(str)=>state.Url + str
}

const actions = {}

const mutations = {
}

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}