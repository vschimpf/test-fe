<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
html {
  height: 100%;
  font-family: 'Arial';
}
body {
  margin: 0;
  height: 100%;
}
#app {
  height: 100%;
  .yellow-background-color {
    background-color: #FFE600;
  }
  .blue-bacground-color {
    background-color: #3484FA;
  }
  .black-color {
    color: #333333;
  }
  .dark-gray-color {
    color: #666666;
  }
  .gray-color {
    color: #999999;
  }
  .light-gray-color {
    color: #EEEEEE;
  }
  .big-x-padding {
    padding: 0 32px;
  }
  .big-bottom-padding {
    padding-bottom: 32px;
  }
  .x-padding {
    padding-left: 16px;
    padding-right: 16px;
  }
  .y-padding {
    padding-top: 16px;
    padding-bottom: 16px;
  }
  .normal-font-size {
    font-size: 18px;
  }
  .big-font-size {
    font-size: 24px;
  }
  .extra-big-font-size {
    font-size: 28px;
  }
  .small-font-size {
    font-size: 14px;
  }
  .extra-small-font-size {
    font-size: 12px;
  }
  h1 {
    font-size: 28px;
  }
  h2 {
    font-size: 24px;
    font-weight: 500;
  }
  h3 {
    font-size: 18px;
    font-weight: 500;
    margin: 0;
  }
  p {
    font-size: 16px;
  }
}
</style>
