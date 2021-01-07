<template>
    <div id="AttributeMenu" :class="this.isActive?'enter':''">

        <div class = "NavArrow" @click="NavArrowClicked">
          <i class="NavArrowIcon el-icon-arrow-right"></i>
        </div>

        <side-bar-tags :tags="tags" @OnSelect="handleSelect" @OnDrawer="handleDrawer"></side-bar-tags>

        <div class="InputField">
            <el-input placeholder="请输入内容" v-model="input1">
                <template slot="prepend">角度</template>
            </el-input>
        </div>
    </div>
</template>

<script>
import SideBarTags from '@/components/SideBar/SideBarTags'
export default {
    name:'AttributeMenu',
    data(){
        return{
            isActive: true,
            input1:'',
            tags:[
                {
                  name:'Factors',
                  context:'显示参数',
                  rendeerForm:'factor-form'
                }
            ]
        }
    },
    methods:{
      handleSelect(index){

      },
      NavArrowClicked(){
        this.isActive = !this.isActive;
      },
      handleDrawer(){
          this.isActive = !this.isActive;
      }
    },
    components:{
        SideBarTags
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
      width:30px;
      height:30px;
      background-color:$ne-color-dark-blue;
      display:flex;
      align-items: center;
      justify-content: center;
    }
    #AttributeMenu.enter{
      transform: translateX(100%);
      .NavArrow{
        display:none;
      }
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