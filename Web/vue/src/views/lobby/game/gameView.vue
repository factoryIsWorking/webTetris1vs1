<template>
  <div
    :style="[flexCol,boxStyle]"
  >
    게임화면
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
