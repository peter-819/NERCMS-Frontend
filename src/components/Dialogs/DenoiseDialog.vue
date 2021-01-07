<template>
  <div id="DenoiseDialog">
    <je-dialog title="点云降噪" :visible="GetDialogVisiblity('Denoise')" :handleClose="HandleDenoise">
      <el-radio-group v-model="radioSelected">
        <el-radio-button label="method1">方法1</el-radio-button>
        <el-radio-button label="method2">方法2</el-radio-button>
        <el-radio-button label="method3">方法3</el-radio-button>
      </el-radio-group>

      <component :is="this.radioSelected" @input="this.MethodInfo=$event"></component>
      <span>{{this.MethodInfo}}</span>
    </je-dialog>
  </div>
</template>

<script>
import JeDialog from './DialogTemplate';
import {mapState,mapGetters,mapMutations} from 'vuex';
import DialogForm from './DialogForm';
var method1Obj = {
  name:'method1Obj',
  template:`<dialog-form v-model="this.info" @input="this.$emit('input',info)"></dialog-form>`,
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
  }
};
var method2Obj = {
  template:'<span>method2</span>'
};
var method3Obj = {
  template:'<span>method3</span>'
};
export default {
  name:"DenoiseDialog",
  components:{
    JeDialog,
    Method1:method1Obj,
    Method2:method2Obj,
    Method3:method3Obj,
  },
  data(){
    return {
      radioSelected:'method1',
      MethodInfo:{}
    }
  },
  computed:{
    ...mapGetters('Dialogs',[
      'GetDialogVisiblity'
      ]),
  },
  methods:{
    ...mapMutations('Dialogs',[
      'HideDialog'
    ]),
    HandleDenoise(){
      this.HideDialog('Denoise');
    }
  }
}
</script>

<style lang="scss" scope>
@import '../../scss/varibles.scss';
</style>