<template>
  <div id="DenoisePCD">
    <je-dialog title="点云降噪" :handleConfirm="HandleDenoise">
      <el-radio-group @change="MethodInfo = []" v-model="radioSelected">
        <el-radio-button label="method1">方法1</el-radio-button>
        <el-radio-button label="method2">方法2</el-radio-button>
        <el-radio-button label="method3">方法3</el-radio-button>
      </el-radio-group>

      <component :is="'denoise-' + this.radioSelected" @input="HandleMethodInfo($event)"></component>
      <span>{{this.MethodInfo}}</span>
    </je-dialog>
  </div>
</template>

<script>
import JeDialog from '../DialogTemplate';
import Vue from 'vue';
import DialogForm from '../DialogForm';
import {BaseMixin,DialogMixin} from '../DialogMixins'

Vue.component('denoise-method1', {
  template:`<dialog-form v-model="this.info" @input="handleInput"></dialog-form>`,
  components:{
    DialogForm
  },
  data(){
    return{
      info:[
        {
          name:'test1',
          val:''
        }
      ]
    }
  },
  methods:{
    handleInput(){
      this.$emit('input',this.info);
    }
  }
});
Vue.component('denoise-method2', {
  template:'<span>method2</span>'
});
Vue.component('denoise-method3', {
  template:'<span>method3</span>'
});
export default {
  name:"DenoisePCD",
  mixins:[BaseMixin,DialogMixin],
  components:{
    JeDialog,
  },
  data(){
    return {
      radioSelected:'method1',
      MethodInfo:[]
    }
  },
  computed:{
  },
  methods:{
    HandleDenoise(){
      this.HideDialog();
    },
    HandleMethodInfo(e){
      this.MethodInfo = e;
    }
  }
}
</script>

<style lang="scss" scope>
@import '../../../scss/varibles.scss';
</style>