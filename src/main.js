import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from './router' // Импортируем наш роутер

const app = createApp(App)

app.use(router) // Подключаем роутер к приложению
app.mount('#app')
