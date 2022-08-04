<template>
  <div
    :style="[flexCol,boxStyle,boxSize]"
  >
    스테이터스
  </div>
</template>

<script>
import Store from '../../../models/appModel';

export default {
  data: function(){
    return {
      flexCol : Store.state.theme.FlexCol,
      boxStyle : Store.state.theme.BoxStyle,
    }
  },
}
</script>

<style scoped>
</style>
