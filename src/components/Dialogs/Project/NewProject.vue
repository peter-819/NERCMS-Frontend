<template>
  <div id="NewProjectDialog">
    <je-dialog title="新建工程" :handleConfirm="HandleNewProject">
      <span>工程名</span><el-input v-model="ProjectName"></el-input>
    </je-dialog>
  </div>
</template>

<script>
import JeDialog from '../DialogTemplate'
import {mapState,mapMutations, mapGetters} from 'vuex'
import Vue from 'vue';

export default {
    components:{
        JeDialog,
    },
    data(){
        return{
           ProjectName:'',
        }
    },
    computed:{
      ...mapState('ProjectInfo',{
        projectInfo: state=>state.CurrentProject
      }),
      ...mapGetters('Server',['GetUrl'])
    },
    methods: {
      ...mapMutations('ProjectInfo',[
        'SetProjectAttrib',
        'AppendProjectChild'
      ]),
      ...mapMutations('Dialogs',[
        'HideDialog'
      ]),
      RequireNewProject()
      {
        Vue.http.post(
          this.GetUrl('/nr/project/create'),
          {name:this.ProjectName},
          {emulateJSON:true}
        ).then(res=>{
          if(res.body.code == 0)
          {
            this.SetProjectAttrib({name:'id', attrib: res.data.projectId});
            this.SetProjectAttrib({name:'isDone',attrib:true});
            this.SetProjectAttrib({name:'name', attrib: this.ProjectName});
            console.log('new project ' + res.body.data);
            this.HideDialog();
            this.$message({
              type:'info',
              message:'创建成功'
            });
          }
          else if(res.body.code == 5)
          {
            this.$message({
              type:'info',
              message:'已存在名为'+res.data.projectName+'的工程'
            });
            console.log('conflict');
          }
        }).catch(res=>{
          console.log('failed ' + res);
        });
      },
      HandleNewProject(){
        if(this.projectInfo.isDone){
          this.$confirm('此操作将关闭当前工程，是否继续?','提示',{
            confirmButtonText:'是',
            cancelButtonText:'否',
            type:'warning',
            center: true
          }).then(()=>{
            console.log('保存');
            this.$confirm('是否保存当前工程?','保存',{
              confirmButtonText:'是',
              cancelButtonText:'否',
              type:'warning',
              center:true
            }).then(()=>{
              //save

              this.$message({
                type:'info',
                message:'保存成功'
              });
              this.RequireNewProject();
            }).catch(()=>{
              this.$message({
                type:'info',
                message:'覆盖当前工程'
              });
              this.RequireNewProject();
            });
          }).catch(()=>{
            
          });
        }
        else{
          this.RequireNewProject();
        }
        //this.SetProjectAttrib({name:'isDone',attrib:true});
        //this.SetProjectAttrib({name:'name', attrib: this.ProjectName});
        
      }
    }
}
</script>