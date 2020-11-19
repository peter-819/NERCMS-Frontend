<template>
    <div id="AllDialogs">
        <je-dialog title="新建工程" :visible="GetDialogVisiblity('NewProject')" :handleClose="HandleNewProject">
            <span>工程名</span><el-input v-model="ProjectName"></el-input>
        </je-dialog>

        <je-dialog title="打开点云" :visible="GetDialogVisiblity('OpenPCD')" :handleClose="HandleOpenPCD">
            <span>选择文件</span><el-input v-model="PCDFilePath"></el-input>
            <span>名称</span><el-input v-model="PCDName"></el-input>
        </je-dialog>
    </div>
</template>

<script>
import JeDialog from './DialogTemplate'
import {mapState,mapMutations, mapGetters} from 'vuex'

export default {
    components:{
        JeDialog
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
      ...mapGetters('Dialogs',[
          'GetDialogVisiblity'
      ])
    },
    methods: {
      ...mapMutations('ProjectInfo',[
        'SetProjectName',
        'SetProjectID',
        'SetProjectCreatedTime',
        'SetProjectUpdateTime',
        'AppendProjectChild'
      ]),
      ...mapMutations('Dialogs',[
        'HideDialog'
      ]),
      HandleNewProject(){
        this.SetProjectName(this.ProjectName);
        this.ProjectName = '';
        this.HideDialog('NewProject');
      },
      HandleOpenPCD(){
        this.AppendProjectChild({
            filepath:this.PCDFilePath,
            name:this.PCDName
        });
        this.filepath = '';
        this.name = '';
        this.HideDialog('OpenPCD');
      }
    }
}
</script>