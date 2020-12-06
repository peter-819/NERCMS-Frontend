<template>
    <div class="BottomMenu">
      <span class="Bottom-text">bottom menu</span>
    </div>
</template>

<script>
export default {
    name:'BottomMenu',
    data(){
        return{
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/varibles.scss';

.BottomMenu{
  position:absolute;
  bottom: 0px;

  background-color:white;
  width: 100%;
  height:25px;
  box-shadow:0px 3px 6px rgba(112,112,112,0.16);
  display: flex;
  align-items:center;
  justify-content:center;

  border-style:solid;
  border-width: 0px 0px 1px 0px;
  border-bottom-color: rgba(112,112,112,0.16);
}
// .TopMenu-Title{
//   text-align: center;
//   font-family: "Microsoft YaHei","Arial";
//   font-size:14px;
//   color: #606266;
// }
</style>