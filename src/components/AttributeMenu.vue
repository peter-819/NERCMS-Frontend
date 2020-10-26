<template>
    <div id="AttributeMenu">
        <div class="InputField">
            <el-input placeholder="请输入内容" v-model="input1">
                <template slot="prepend">角度</template>
            </el-input>
        </div>
    </div>
</template>

<script>
export default {
    name:'AttributeMenu',
    data(){
        return{
            input1:''
        }
    }
}
</script>

<style scoped>
    .InputField{
        padding:8%;
    }
</style>