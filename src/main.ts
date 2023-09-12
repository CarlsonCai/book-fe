import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { pinia } from '@/stores'

// style
// import '@/styles/index.sass'
// 套件
import ElementPlus from 'element-plus'

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
