import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueReource from 'vue-resource'
import 'vuetify/dist/vuetify.css'
import router from './router'
import AppFooter from './components/AppFooter'
import AppToolBar from './components/AppToolBar'

import AppContent from './components/AppContent'
import AppLogin from './components/AppLogin'
import AppOkDialog from './components/AppOkDialog'
import AppHttpRequestApi from './components/AppHttpRequestApi'
import AppHome from './components/AppHome'

Vue.component('app-tool-bar', AppToolBar)
Vue.component('app-footer', AppFooter)
Vue.component('app-content', AppContent)
Vue.component('app-login', AppLogin)
Vue.component('app-ok-dialog', AppOkDialog)
Vue.component('app-http-request-api', AppHttpRequestApi)
Vue.component('app-home', AppHome)

// import upperFirst from 'lodash/upperFirst'
// import camelCase from 'lodash/camelCase'

Vue.use(Vuetify)
Vue.use(VueReource)

// const requireComponent = require.context(
//   // The relative path of the components folder
//   './components',
//   // Whether or not to look in subfolders
//   false,
//   // The regular expression used to match base component filenames
//   /Base[A-Z]\w+\.(vue|js)$/
// )

// requireComponent.keys().forEach(fileName => {
//   // Get component config
//   const componentConfig = requireComponent(fileName)

//   // Get PascalCase name of component
//   const componentName = upperFirst(
//     camelCase(
//       // Strip the leading `./` and extension from the filename
//       fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
//     )
//   )

//   // Register component globally
//   Vue.component(
//     componentName,
//     // Look for the component options on `.default`, which will
//     // exist if the component was exported with `export default`,
//     // otherwise fall back to module's root.
//     componentConfig.default || componentConfig
//   )
//   console.log(componentName)
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
