<template>
  <div id="DenoisePCD">
    <je-dialog title="点云降噪" :handleConfirm="HandleDenoise">
      <el-radio-group @change="MethodInfo = []" v-model="radioSelected">
        <el-radio-button label="method1">体素滤波</el-radio-button>
        <el-radio-button label="method2">高斯滤波</el-radio-button>
        <el-radio-button label="method3">半径滤波</el-radio-button>
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
          name:'x',
          val:''
        },
        {
          name:'y',
          val:''
        },
        {
          name:'z',
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
  template:`<dialog-form v-model="this.info" @input="handleInput"></dialog-form>`,
  components:{
    DialogForm
  },
  data(){
    return{
      info:[
        {
          name:'Search Nearest Point Num',
          val:''
        },
        {
          name:'Removal Thresh',
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

Vue.component('denoise-method3', {
  template:`<dialog-form v-model="this.info" @input="handleInput"></dialog-form>`,
  components:{
    DialogForm
  },
  data(){
    return{
      info:[
        {
          name:'Search Radius',
          val:''
        },
        {
          name:'Minimum Neighbor Num',
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