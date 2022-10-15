import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// style
import '@/styles/index.sass'

// 套件
import ElementPlus from 'element-plus'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
