import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePrerender from 'vite-plugin-prerender'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    vitePrerender({
      // Укажите путь к папке сборки
      staticDir: path.join(__dirname, 'dist'),
      // Укажите список страниц, которые нужно превратить в готовый HTML
      routes: [ '/', '/about', '/contacts' ],
    }),
  ],
})
