<template>
  <div class="LobbyView"
    :style="[background]">
  </div>
</template>

<script>
import messageModel from '../../models/messageModel';

export default {
  data: function(){
    return {
      background : {
        'background-image': `url(${messageModel.CONFIG.assetURL}/background/8.jpg)`
      },
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