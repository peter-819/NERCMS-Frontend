<template>
    <div id="OpenProjectDialog">
      <je-dialog title="打开工程" :handleConfirm="HandleOpenProject">
        <span>工程目录</span>
        <div v-if="this.projectList.mutating">
          <span>loading....</span>
        </div>
        <div v-else>
          <div v-for="item in this.projectList.data" :key="item.projectId">
            <span>{{item.projectName}}</span>
          </div>
        </div>
      </je-dialog>
    </div>
</template>

<script>
import JeDialog from '../DialogTemplate'
import {mapState,mapMutations, mapGetters} from 'vuex'

export default {
  components:{
      JeDialog
  },
  data(){
      return{
      }
  },
  computed:{
    ...mapState('ProjectInfo',{
      projectList: state=>state.UserProjectsList
    }),
  },
  methods:{
    HandleOpenProject(){
      console.log(this.projectList);
    }
  }
}
</script>