import {mapState,mapMutations, mapGetters} from 'vuex'

var BaseMixin = {
  computed:{
    ...mapGetters('Server',[
      'GetUrl'
    ])
  }
}

var DialogMixin = {
  methods: {
    ...mapMutations('Dialogs',[
      'HideDialog',
      'ShowDialog'
    ])
  }
}

var ProjectMixin = {
  computed:{
    ...mapState('ProjectInfo',{
      projectList:state=>state.CurrentProject
    }),
    ...mapGetters('ProjectInfo',['UserProjectListData'])
  },
  methods:{
    ...mapMutations('ProjectInfo',[
      'SetProjectAttrib',
      'AppendProjectChild',
      'SetUserProjectsList'
    ])
  }
}

export {BaseMixin,DialogMixin,ProjectMixin}