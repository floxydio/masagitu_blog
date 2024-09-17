import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './routes/route'
import './index.css'


loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
