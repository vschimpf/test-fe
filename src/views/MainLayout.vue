<template>
  <div id="main-layout">
    <search />
    <router-view />
  </div>
</template>

<script>
import Search from './components/search/Search'

export default {
  components: {
    Search
  }
}
</script>
<style lang="scss">
  #main-layout {
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #EEEEEE;
  }
</style>
