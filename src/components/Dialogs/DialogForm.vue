<template>
  <div id="DialogForm">
    <div v-for="(item, index) in value" :key="item.name">
      <span>{{item.name}}</span>
      <el-input v-model="item.val" @input="handleInput($event,index)"></el-input>
    </div>
  </div>
</template>

<script>
export default {
  name:'DialogForm',
  props:['value'],
  methods:{
    handleInput(str,index){
      console.log(this);
      this.value[index].val = str;
      this.$emit('input',this.value);
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>