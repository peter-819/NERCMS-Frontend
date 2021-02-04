<template>
    <div id="JeDialog">
        <el-dialog 
            :title="title"
            visible
            width="30%"
            @close="OnDialogClose"
        >
        <div class="JeDialogBody">
          <slot></slot>
          <el-button class="ConfirmButton" type="primary" @click="handleConfirm">确定</el-button>
        </div>
        </el-dialog>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
    name:'JeDialog',
    props:['title','handleConfirm','handleClose'],
    data(){
        return{
        }
    },
    methods:{
      ...mapMutations('Dialogs',[
        'HideDialog'
      ]),
      OnDialogClose(){
        this.HideDialog();
      }
    }
}
</script>

<style lang="scss" scope>
  .JeDialogBody{
    display:flex;
    flex-direction:column;
  }
  .ConfirmButton{
    margin-top:20px;
  }
</style>