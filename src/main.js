import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' 

import firebase from 'firebase'

Vue.use(Vuetify)

Vue.config.productionTip = false

let app = '';
var config = {
  apiKey: "AIzaSyCLZ_CWp5hE6WZUDx-oBwUD3vNoiaYF_k8",
  authDomain: "vue-crud-dickofn.firebaseapp.com",
  databaseURL: "https://vue-crud-dickofn.firebaseio.com",
  projectId: "vue-crud-dickofn",
  storageBucket: "vue-crud-dickofn.appspot.com",
  messagingSenderId: "81899809728"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});
