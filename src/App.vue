<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,body,#app{
  width: 100%;
  height: 100%;
}
#app{
  display: flex;
  flex-direction: column;
}
</style>
