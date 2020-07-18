<template>
  <div id="app">
    <HomePage></HomePage>
  </div>
</template>

<script>
  import HomePage from './components/HomePage'

export default {
  name: 'app',
  components: {
    HomePage
  }
}
</script>

<style>
html, body ,#app {
  width: 100%;
  height: 100%;
  margin: 0;
  box-sizing: border-box;
  padding: 10px;
  background-color: #E6E2E1;
}
</style>
