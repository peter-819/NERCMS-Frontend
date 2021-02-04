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
      })
    },
    methods: {
      ...mapMutations('ProjectInfo',[
        'SetProjectAttrib',
        'AppendProjectChild'
      ]),
      ...mapMutations('Dialogs',[
        'HideDialog'
      ]),
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
              const data = JSON.stringify(this.projectInfo);
              fs.writeFile('projectInfo.json',data,(err)=>{
                if(err){
                  console.log(err)
                }
              });
              console.log('data saved');
              this.$message({
                type:'info',
                message:'保存成功'
              });
            }).catch(()=>{

            });
          }).catch(()=>{

          });
        }
        this.SetProjectAttrib({name:'isDone',attrib:true});
        this.SetProjectAttrib({name:'name', attrib: this.ProjectName});
        this.ProjectName = '';
        this.HideDialog();
      }
    }
}
</script>