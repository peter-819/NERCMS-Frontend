<template>
    <div class="TopMenu">
      <span class="TopMenu-Title">NewProject1</span>
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

<style scoped>
.TopMenu{
  background-color:white;
  height:25px;
  box-shadow:0px 3px 6px rgba(112,112,112,0.16);
  display: flex;
  align-items:center;
  justify-content:center;
}
.TopMenu-Title{
  text-align: center;
  font-family: "Microsoft YaHei","Arial";
  font-size:14px;
  color: #606266;
}
</style>