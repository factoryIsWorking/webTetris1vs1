<template>
  <div :style="[Theme.FlexCol,Theme.BoxStyle]">
    <div :style="[Theme.FlexCol,{
          height:`calc(100% - ${Theme.LobbyPage.gapSize}px)`,
          width:`calc(100% - ${Theme.LobbyPage.gapSize}px)`,
          gap:Theme.LobbyPage.gapSize/2+'px',
        }]">
      <ChatPanel :style="[Theme.BoxStyle,
        {backgroundColor:'lightGray',flex:1}]"/>
      <ChatPanel :style="[Theme.BoxStyle,
        {backgroundColor:'lightGray',flex:1}]"/>
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
          Theme.LoginPage.FontStyle,
          {flex:1, height:'70%'}]"
          message="SEND"
          />
      </div>      
    </div>
  </div>
</template>

<script>
import Store from '../../../models/appModel';
import ChatPanel from './components/chatPanel.vue'

export default {
  data: function(){
    return {
      Theme : Store.state.theme,
    }
  },
  components:{ChatPanel}
}
</script>

<style scoped>
</style>
