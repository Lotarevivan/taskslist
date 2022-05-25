<template>
  <div class="layout">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
@import '~flatpickr/dist/flatpickr.min.css';
.layout {
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  // -webkit-touch-callout: none;
  // -webkit-user-select: none;
  //  -khtml-user-select: none;
  //    -moz-user-select: none;
  //     -ms-user-select: none;
  //         user-select: none;
}

@font-face {
  font-family: 'Geometria';
  src: local(Geometria Regular), url(./assets/fonts/Geometria.woff);
}

body {
  font-family: 'Geometria';
  min-height: 100vh;
}

hr {
  border: none;
  background-color: #dfe3e7;
  height: 2px;
}
</style>
