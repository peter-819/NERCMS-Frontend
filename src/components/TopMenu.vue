<template>
    <div class="TopMenu">
      <div class="IconGroup">
        <i class="iconfont icon-baocun"></i>
        <i class="iconfont icon-chexiao"></i>
        <i class="iconfont icon-zhongzuo"></i>
      </div>
      <span class="TopMenu-Title">{{ProjectName}}</span>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    name:'TopMenu',
    data(){
        return{

        }
    },
    computed:{
      ...mapState('ProjectInfo',{
        ProjectName:state=>state.project.name
      })
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/varibles.scss';
@import '../scss/icons.scss';
.IconGroup{
  position:absolute;
  left:95px;
  .iconfont:not(:first-child){
    margin-left:20px;
  }
}
.TopMenu{
  background-color: $ne-color-dark-blue;
  height:25px;
  box-shadow:0px 3px 6px rgba(112,112,112,0.1);
  display: flex;
  align-items:center;
  justify-content:center;
}
.TopMenu-Title{
  text-align: center;
  font-family: $ne-font-family;
  font-size:14px;
  color: $ne-color-white;
}
</style>