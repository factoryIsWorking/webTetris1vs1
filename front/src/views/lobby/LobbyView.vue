<template>
  <div class="LobbyView"
    :style="[background]">
  </div>
</template>

<script>
import Store from '../../models/appModel';

export default {
  data: function(){
    return {
      background : Store.state.theme.BackImage,
    }
  },
}
</script>

<style scoped>
.LobbyView{
  width: 100%;
  height: 100%;
}
</style>