<template>
  <div :style="[Theme.FlexCol,Theme.BoxStyle]">
    <div :style="[Theme.FlexCol,{
          height:`calc(100% - ${Theme.LobbyPage.gapSize}px)`,
          width:`calc(100% - ${Theme.LobbyPage.gapSize}px)`,
        }]">
      <div :style="[Theme.BoxStyle,
        {backgroundColor:'lightGray',width:'100%', flex:1}]">
      </div>
      <div
        :style="[
        Theme.FlexRow,
        {height:'100px'}]"
      >
        <BaseInput
          :style="[
          Theme.LobbyPage.InputStyle,
          Theme.Radious,
          Theme.LobbyPage.FontStyle,
          {flex:9, height:'50%'}]"
        />
        <BaseButton
          :style="[
          Theme.LobbyPage.ButtonStyle,
          Theme.Radious,
          Theme.LobbyPage.FontStyle,
          {flex:1, height:'70%'}]"
          message="SEND"
          />
      </div>      
    </div>
  </div>
</template>

<script>
import Store from '../../../models/appModel';

export default {
  data: function(){
    return {
      Theme : Store.state.theme,
    }
  },
}
</script>

<style scoped>
</style>
