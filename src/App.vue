<template>
  <div id="app">
    <Test></Test>
  </div>
</template>

<script>
   import Test  from '../src/components/test'
  // import Other from '../src/components/other'

export default {
  name: 'App',
  components:{
    Test,
  }
}
</script>

<style>
#app {
width: 100%;
}
</style>
