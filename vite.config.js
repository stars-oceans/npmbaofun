import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build : {
    outDir : 'dist',// 自定义构建输出目录
    target : 'es2020',
    lib : {
      entry : 'src/main.js', //入口文件路径
      formats : ['es','cjs']
    }
  }
})
