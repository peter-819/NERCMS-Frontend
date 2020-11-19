import Vue from 'vue'
const state = () => ({
    project:{
        name:'NewProject1',
        id:'',
        createTime:'',
        updateTime:'',
        childNodes:[]
    }
})

const getters = {
    
}

const actions = {

}

const mutations = {
    SetProjectName : (state,name) => Vue.set(state.project,'name',name),
    SetProjectID : (state,id)=>Vue.set(state.project,'id',id),
    SetProjectCreatedTime : (state,time)=>Vue.set(state.project,'createTime',time),
    SetProjectUpdateTime : (state,time)=>Vue.set(state.project,'updateTime',time),
    AppendProjectChild : (state,child)=>state.project.childNodes.push(child)
}

export default {
    namespaced : true,
    state,
    getters,
    actions,
    mutations
}