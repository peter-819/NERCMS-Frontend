<template>
    <div id="AttributeMenu" :class="this.isActive?'enter':''">
        <div class="NavArrow" @click="isActive = !isActive">
            <i class="NavArrowIcon el-icon-arrow-right"></i>
        </div>
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
            isActive: true,
            input1:''
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/varibles.scss';
    #AttributeMenu{
        position:relative;
        width: 100%;
        height:100%;
        // box-shadow: 0px 3px 6px rgba(112, 112, 112, 0.16);
        // border-radius: 8px;
        background-color:white;
        left:-100%;

        transition:transform .3s;
    }

    #AttributeMenu.enter{
        transform:translateX(100%);
    }
    .NavArrow{
        position:absolute;
        left:100%;
        top:40%;
        width:14px;
        height:80px;
        background-color: $ne-transition-color-3;
        display:flex;
        align-items:center;
        justify-content: center;
    }
    .NavArrow:hover{
        background-color: $ne-transition-color-2;
    }
    .NavArrowIcon{
        transition: transform .3s;
    }
    #AttributeMenu.enter > .NavArrow > .NavArrowIcon{
        transform: rotateZ(180deg);
    }

    .InputField{
        padding:8%;
    }
</style>