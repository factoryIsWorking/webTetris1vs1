<template>
  <div
    :style="[flexCol,boxStyle,boxSize]"
  >
    스테이터스
  </div>
</template>

<script>
import Store from '../../../models/appModel';

const innerPadding = '50px';
const LENGTH = `calc(100% - ${innerPadding})`;
export default {
  data: function(){
    return {
      flexCol : Store.state.theme.FlexCol,
      boxStyle : Store.state.theme.BoxStyle,
      boxSize : {
        height : LENGTH,
        width : LENGTH,
      }
    }
  },
}
</script>

<style scoped>
</style>
