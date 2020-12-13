<template>
    <div class="TopMenu">
      <div class="IconGroup">
        <i class="iconfont icon-baocun"></i>
        <i class="iconfont icon-chexiao"></i>
        <i class="iconfont icon-zhongzuo"></i>
      </div>
      <span class="TopMenu-Title">工程: 2020-04-25-17-08-22</span>
    </div>
</template>

<script>
export default {
    name:'TopMenu',
    data(){
        return{
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/varibles.scss';
@import '../scss/icons.scss';
.IconGroup{
  position:absolute;
  left:75px;
  .iconfont:not(:first-child){
    margin-left:10px;
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