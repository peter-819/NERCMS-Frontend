<template>
    <div id="JeDialog">
        <el-dialog 
            :title="title"
            visible
            width="30%"
        >
        <div class="JeDialogBody">
          <slot></slot>
          <el-button class="ConfirmButton" type="primary" @click="handleConfirm">确定</el-button>
        </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name:'JeDialog',
    props:['title','handleConfirm','handleClose'],
    data(){
        return{
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