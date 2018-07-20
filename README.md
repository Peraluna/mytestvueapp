# mytestapp

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## APP OK DIALOG

USAGE :
 first in main.js :
     import AppOkDialog from './components/AppOkDialog'
     Vue.component('app-okdialog', AppOkDialog)

 in Parent Component (caller) :

<script>
export default {
  data: () => ({
    dialogIsVisible: false
  }),
  methods: {
    closeDialog () {
      this.dialogIsVisible = false
      other code
    },
    showDialog () {
      this.dialogIsVisible = true
    }
  }
}
</script>
 <app-okdialog
   v-model="dialogIsVisible" 
   :dialogVisible="dialogIsVisible"
   @close="closeDialog">
 </app-okdialog>
SOURCE : https://stackoverflow.com/questions/44446559/vuetify-programmatically-showing-dialog?rq=1