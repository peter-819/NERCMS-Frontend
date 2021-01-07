<template>
  <div id="SideBarTags">
    <div class="SideBarTag" v-for="(item, index) in tags" 
         :key="item.name" :class="item.name+((ActiveIndex==index)?' IsActive':'')" 
         @click="handleClick(index)"
    >
      <span>{{item.context}}</span>
    </div>

    <div class="NavArrow" @click="NavArrowClicked">
      <i class="NavArrowIcon el-icon-arrow-left"></i>
    </div>
  </div>
</template>

<script>
export default {
  name:'SideBarTags',
  props:['tags'],
  data(){
    return {
      ActiveIndex:0
    }
  },
  methods:{
    handleClick(index,event){
      this.$emit('OnSelect', index);
      this.ActiveIndex = index;
    },
    NavArrowClicked(){
      this.$emit('OnDrawer');
    }
  }
}
</script>

<style lang="scss">
@import '../../scss/varibles.scss';
    @mixin SideBarTagMixin{
        width:90px;
        height:100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $ne-tag-color;
        cursor: pointer;
        span{
          font-family: $ne-font-family;
          color:$ne-color-dark-blue;
        }
        &.IsActive{
          background: $ne-color-white;
        }
    }
  #SideBarTags{
      width: 100%;
      height:30px;
      background-color:$ne-color-dark-blue;
      display:flex;
      justify-content: flex-start;
      align-items: center;
      .SideBarTag{
        @include SideBarTagMixin;
      }
  }
  .NavArrow{
    position:absolute;
    right:8px;
    color:white;
  }
</style>