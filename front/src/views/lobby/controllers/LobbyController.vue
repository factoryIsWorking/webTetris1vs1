<template>
  <div :style="FlexCol">
    <BaseButton
      message="test1"
      :style="[ButtonStyle]"/>
    <BaseButton
      message="test2"
      :style="[ButtonStyle]"/>
  </div>
</template>

<script>
import Store from '../../../models/appModel';

export default {
  data: function(){
    return {
      ButtonStyle:Store.state.theme.LobbyPage.ButtonStyle,
      FlexCol : Store.state.theme.FlexCol,
    }
  },
}
</script>

<style scoped>
</style>
