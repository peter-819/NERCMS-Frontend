import Vue from 'vue'
const state = () => ({
    CurrentProject:{
        name:'NewProject1',
        id:'',
        createTime:'',
        updateTime:'',
        isDone:'',
        childNodes:[]
    },
    UserProjectsList:{
        data:[],
        mutating:false
    }
})

const getters = {
    
}

const actions = {

}

const mutations = {
    SetProjectAttrib:(state,{name,attrib}) => Vue.set(state.CurrentProject,name,attrib),
    AppendProjectChild:(state,child)=>state.CurrentProject.childNodes.push(child),
    SetUserProjectsList:(state,obj)=>Vue.set(state,state.UserProjectsList,obj)
}

export default {
    namespaced : true,
    state,
    getters,
    actions,
    mutations
}