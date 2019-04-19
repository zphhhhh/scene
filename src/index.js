import "reset-css"
import "./public/style/index.less"

import Vue from "vue"
import router from "./router"
import App from "./page/App.vue"

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: h => h(App)
})
