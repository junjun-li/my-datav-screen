import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import datavComponent from 'my-datav-components'
// import imoocDatavLibsDev from 'imooc-datav-libs-dev'
createApp(App)
  .use(store)
  .use(router)
  // .use(imoocDatavLibsDev)
  .use(datavComponent)
  .mount('#app')
