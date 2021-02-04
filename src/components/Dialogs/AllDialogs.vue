<template>
    <div id="AllDialogs">
      <component v-if="this.currentDialog!=''" :is="currentDialog"></component>
      <span>{{this.currentDialog}}</span>
    </div>
</template>

<script>
import JeDialog from './DialogTemplate'
import {mapState} from 'vuex'

import NewProject from './Project/NewProject';
import OpenProject from './Project/OpenProject';
import DenoisePCD from './PCD/DenoisePCD';
import OpenPCD from './PCD/OpenPCD';

export default {
  components:{
    JeDialog,
    NewProject,
    OpenProject,
    DenoisePCD,
    OpenPCD
  },
  data(){
    return{

    }
  },
  computed:{
    ...mapState('Dialogs',{
      currentDialog: state=>state.CurrentDialog
    }),
  }
}
</script>