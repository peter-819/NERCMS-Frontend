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
    UserProjectListData: state=>state.UserProjectsList.data.map(p=>{
        // console.log(p.projectCreationTime);
        var t = Object.assign({},p);
        t.projectCreationTime = p.projectCreationTime.slice(0,19).replace('T',' ');
        t.projectModificationTime = p.projectModificationTime.slice(0,19).replace('T',' ');
        return t;
    })
}

const actions = {

}

const mutations = {
    SetProjectAttrib:(state,{name,attrib}) => Vue.set(state.CurrentProject,name,attrib),
    AppendProjectChild:(state,child)=>state.CurrentProject.childNodes.push(child),
    SetUserProjectsList:(state,obj)=>Vue.set(state,'UserProjectsList',obj)
}

export default {
    namespaced : true,
    state,
    getters,
    actions,
    mutations
}