<template>
    <div id="OpenProjectDialog">
      <je-dialog title="打开工程" :handleConfirm="HandleOpenProject">
        <div v-if="this.projectList.mutating">
          <span>loading....</span>
        </div>
        <div v-else>
          <el-table
            highlight-current-row
            :data="this.UserProjectListData"
            style="width: 100%"
            height="250"
            @current-change="HandleSelect">
            <el-table-column
              prop="projectCreationTime"
              label="创建日期"
              width="170">
            </el-table-column>
            <el-table-column
              prop="projectModificationTime"
              label="修改日期"
              width="170">
            </el-table-column>
            <el-table-column
              prop="projectName"
              label="项目名"
              width="120">
            </el-table-column>
            <el-table-column
              label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="HandleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </je-dialog>
    </div>
</template>

<script>
import JeDialog from '../DialogTemplate'
import {mapState,mapMutations, mapGetters} from 'vuex'
import Vue from 'vue'

export default {
  components:{
      JeDialog
  },
  data(){
      return{
        currentRow:null
      }
  },
  computed:{
    ...mapState('ProjectInfo',{
      projectList: state=>state.UserProjectsList
    }),
    ...mapGetters('ProjectInfo',['UserProjectListData']),
  },
  methods:{
    ...mapMutations('ProjectInfo',[
      'SetUserProjectsList'
    ]),
    HandleOpenProject(){
      //TODO
    },
    HandleDelete(index,row){
      console.log(row.projectId);
      Vue.http.post(
        'http://kikigogogo.gz2vip.idcfengye.com/nr/project/delete',
        {id:row.projectId},
        {emulateJSON:true}
      ).then(res=>{
        if(res.body.code==0){
          console.log(this.projectList.data);
          this.SetUserProjectsList({
            mutating:false,
            data:this.projectList.data.filter(x=>x.projectId != row.projectId)
          });
          console.log('delete success');
        }
        else{
          console.log(res.body);
        }
      }).catch(res=>{
        console.log("fail to connect" + res);
      })
    },
    HandleSelect(row){
      this.currentRow = row;
    }
  }
}
</script>