// import './assets/main.css'

import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './routes'
import store from './store'
import Vue3Editor from 'vue3-editor'
import { getAuth } from 'firebase/auth'

let app;
getAuth().onAuthStateChanged(user => {
    if (!app) {
        app = createApp(App)
        app.use(createPinia())
        app.use(router)
        app.use(store)
        app.use(Vue3Editor)
        app.mount('#app')
    }
})

