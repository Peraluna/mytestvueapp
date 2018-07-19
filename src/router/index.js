// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })

import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '@/components/AppHome'
import AppLogin from '@/components/AppLogin'
import AppOkDialog from '@/components/AppOkDialog'
import AppDataTable from '@/components/AppDataTable'
import AppSlotParent from '@/components/AppSlotParent'
import AppHttpRequestApi from '@/components/AppHttpRequestApi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppHome',
      component: AppHome
    },
    {
      path: '/login',
      name: 'AppLogin',
      component: AppLogin
    },
    {
      path: '/okdialog',
      name: 'AppOkDialog',
      component: AppOkDialog
    },
    {
      path: '/datatable',
      name: 'AppDataTable',
      component: AppDataTable
    },
    {
      path: '/slot',
      name: 'AppSlot',
      component: AppSlotParent
    },
    {
      path: '/httpquotes',
      name: 'AppHttpRequestApi',
      component: AppHttpRequestApi
    }
  ],
  mode: 'history'
})
