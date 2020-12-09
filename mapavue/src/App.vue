<template>
  <div id="app">
    <div class="row">
       <h1 style="text-align: center;">Mapa Vue Google Map</h1>
       <GoogleMap :latitude= -23.571676 :longitude= -46.74482 :title="'Teste'" />
    </div>

  </div>
</template>

<script>
import GoogleMap from "./components/GoogleMap";

export default {
  name: 'App',
  components: {
    GoogleMap
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
