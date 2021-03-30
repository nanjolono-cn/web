import { defineConfig } from 'umi'
import routes from './routes'

export default defineConfig({
  dva: {
    immer: true,
    hmr: false,
  },
  routes,
})
