import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps,{
  load: {
    key:"AIzaSyAjytxLTvc3aUlINwJG72r5soBdRrZ3Nzs",
  }
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
