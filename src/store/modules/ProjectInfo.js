import Vue from 'vue'
const state = () => ({
    project:{
        name:'NewProject1',
        id:'',
        createTime:'',
        updateTime:'',
        isDone:'',
        childNodes:[]
    }
})

const getters = {
    
}

const actions = {

}

const mutations = {
    SetProjectAttrib:(state,{name,attrib}) => Vue.set(state.project,name,attrib),
    AppendProjectChild : (state,child)=>state.project.childNodes.push(child)
}

export default {
    namespaced : true,
    state,
    getters,
    actions,
    mutations
}