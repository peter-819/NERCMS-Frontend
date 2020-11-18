<template>
    <div id="JeDialog">
        <el-dialog 
            :title="title"
            :visible.sync="visible"
            width="30%"
        >
        <slot></slot>
        <el-button type="primary" @click="handleClose">确定</el-button>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name:'JeDialog',
    props:['title','visible','handleClose'],
    data(){
        return{

        }
    }
}
</script>