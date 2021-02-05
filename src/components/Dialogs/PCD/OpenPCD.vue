<template>
  <div id="OpenPCD">
    <je-dialog title="打开点云" :handleConfirm="HandleOpenPCD">
      <div>
        <span>选择文件</span>
        <el-input v-model="PCDFilePath"></el-input>
        <el-button @click="HandleOpenFile">选择文件</el-button>
        <input type="file" class="slotted"/>
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
import {BaseMixin,DialogMixin} from '../DialogMixins'

export default {
    mixins:[DialogMixin,BaseMixin],
    components:{
        JeDialog
    },
    data(){
        return{
          input:null,
          PCDFilePath:'',
          PCDName:''
        }
    },
    mounted(){
      this.input = this.$el.querySelector('input[type=file]');
      console.log(this.input);
      this.input.addEventListener('change', () => this.onFileSelection())
      this.input.style.display = 'none'
    },
    computed:{
    },
    methods: {
      onFileSelection() {
        // add all selected files
        // for (let file of this.input.files) {
        //   this.files.push({ name: file.name })
        // }
        if(this.input.files.length != 1){
          this.$message({type:'error',message:'只可以打开一个点云'});
        }
        console.log(this.input.files);
        //this.PCDFilePath = this.files[0];
        // reset file input
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
        this.HideDialog();
      }
    }
}
</script>