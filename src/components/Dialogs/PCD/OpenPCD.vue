<template>
    <div id="OpenPCD">
      <je-dialog title="打开点云" :handleConfirm="HandleOpenPCD">
          <!-- <span>选择文件</span><el-input type="file" ></el-input> -->
          <span>名称</span><el-input v-model="PCDName"></el-input>
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
           PCDFilePath:'',
           PCDName:''
        }
    },
    computed:{
    },
    methods: {
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