import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from '@vant/auto-import-resolver'
import path from 'path'
import { resolve } from 'path'
import viteImagemin from 'vite-plugin-imagemin'
// import tailwindcss from 'tailwindcss'
// https://vite.dev/config/
export default defineConfig({
  // base: '/en/wechat/',
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
    // viteImagemin({
    //   gifsicle: {
    //     optimizationLevel: 7,//压缩级别
    //     interlaced: false,  //隔行扫描
    //   },
    //   optipng: {
    //     optimizationLevel: 7,
    //   },
    //   mozjpeg: {
    //     quality: 75, // 压缩质量，可调节
    //   },
    //   pngquant: {
    //     quality: [0.65, 0.8],
    //     speed: 4,
    //   },
    //   svgo: {
    //     plugins: [
    //       {
    //         name: 'removeViewBox',
    //       },
    //       {
    //         name: 'removeEmptyAttrs',
    //         active: false,
    //       },
    //     ],
    //   },
    // }),
  ],
  css: {
    postcss: {
      // plugins: [tailwindcss],
    },
  },
  output: {
    // 输出路径
    path: path.resolve(__dirname, 'dist'),
    // 输出文件名
    filename: 'js/[name].[contenthash:8].js'
    // chunkFilename: 'js/[name].[contenthash:8].js'
  },
  server: {
    port: 3000,
    open: true,
    // proxy: {
    //   '/api': {
    //     target: 'https://api.example.com',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ''),
    //   },
    // },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  optimizeDeps: {
    include: ['vant'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vant': ['vant'],
        },
      },
    },
  },
})
  