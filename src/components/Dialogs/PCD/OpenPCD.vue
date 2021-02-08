<template>
  <div id="OpenPCD">
    <input type="file" class="slotted"/>
    <je-dialog title="打开点云" :handleConfirm="HandleOpenPCD">
      <div>
        <span>选择文件</span>
        <el-button @click="HandleOpenFile">选择文件</el-button>
        <span>{{this.PCDFile.name}}</span>
      </div>
      <div>
        <span>名称</span>
        <el-input v-model="PCDName"></el-input>
      </div>
    </je-dialog>
  </div>
</template>

<script>
import JeDialog from '../DialogTemplate'
import {BaseMixin,DialogMixin,ProjectMixin} from '../DialogMixins'

export default {
    mixins:[DialogMixin,BaseMixin,ProjectMixin],
    components:{
        JeDialog
    },
    data(){
        return{
          input:null,
          PCDFile:'',
          PCDName:''
        }
    },
    mounted(){
      this.input = this.$el.querySelector('input[type=file]');
      console.log(this.input);
      this.input.addEventListener('change', () => this.onFileSelection());
      this.input.style.display = 'none';
    },
    computed:{
    },
    methods: {
      onFileSelection() {
        if(this.input.files.length != 1){
          this.$message({type:'error',message:'只可以打开一个点云'});
        }
        console.log(this.input.files[0]);
        this.PCDFile = this.input.files[0];
        this.input.value = null;
      },
      HandleOpenFile(){
        const event = new MouseEvent('click', {
          'view': window,
          'bubbles': true,
          'cancelable': true
        });
        console.log(event);
        this.input.dispatchEvent(event);
      },
      HandleOpenPCD(){
        this.AppendProjectChild({
            filepath:this.PCDFilePath,
            name:this.PCDName,
            type:'ply'
        });
        this.filepath = '';
        this.name = '';
        const formData = new FormData();
        formData.append('documentsId',);
        formData.append('file',this.PCDFile);
        formData.append('projectId',this.projectList.id);
        // this.$http.post(
        //   GetUrl('/nr/pointCloud/upload'),
        //   formData
        // ).then(res=>{

        // }).catch(res=>{

        // });
        //TODO
        this.HideDialog();
      }
    }
}
</script>