<template>
  <div>
    <span>T</span>
    <span>E</span>
    <span>T</span>
    <span>R</span>
    <span>I</span>
    <span>S</span>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
span{
  font-size: 2.5em;
  margin:0.3em;
}
span:nth-child(2n+1){
  color: rgba(0, 172, 168, 1.0);
}
span:nth-child(2n){
  color: rgba(255, 0, 44, 1.0);
}
</style>
