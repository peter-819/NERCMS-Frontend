<template>
    <div id="AllDialogs">
        <je-dialog title="新建工程" :visible="GetDialogVisiblity('NewProject')" :handleClose="HandleNewProject">
            <span>工程名</span><el-input v-model="ProjectName"></el-input>
        </je-dialog>

        <je-dialog title="打开点云" :visible="GetDialogVisiblity('OpenPCD')" :handleClose="HandleOpenPCD">
            <!-- <span>选择文件</span><el-input type="file" ></el-input> -->
            <span>名称</span><el-input v-model="PCDName"></el-input>
        </je-dialog>

        <denoise-dialog></denoise-dialog>
    </div>
</template>

<script>
import JeDialog from './DialogTemplate'
import {mapState,mapMutations, mapGetters} from 'vuex'
import DenoiseDialog from './DenoiseDialog';

export default {
    components:{
        JeDialog,
        DenoiseDialog
    },
    data(){
        return{
           ProjectName:'',
           PCDFilePath:'',
           PCDName:''
        }
    },
    computed:{
      ...mapState('Dialogs',{
        visiblity: state=>state.visiblity,
      }),
      ...mapState('ProjectInfo',{
        projectInfo: state=>state.project
      }),
      ...mapGetters('Dialogs',[
          'GetDialogVisiblity'
      ])
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
        this.HideDialog('NewProject');
      },
      HandleOpenPCD(){
        this.AppendProjectChild({
            filepath:this.PCDFilePath,
            name:this.PCDName,
            type:'ply'
        });
        this.filepath = '';
        this.name = '';
        this.HideDialog('OpenPCD');
      }
    }
}
</script>