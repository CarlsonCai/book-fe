import { defineConfig, loadEnv } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return defineConfig({
    server: {
      proxy: {
        '/api': {
          target: process.env.VITE_APP_TARGET_API,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
          followRedirects: true,
          configure: (proxy, _options) => {
            proxy.on('error', (err, _req, _res) => {
              console.log('proxy error', err)
            })
            proxy.on('proxyReq', (proxyReq, req, _res) => {
              console.log(
                'Sending Request:',
                req.method,
                req.url,
                ' => TO THE TARGET =>  ',
                proxyReq.method,
                proxyReq.protocol,
                proxyReq.host,
                proxyReq.path,
                JSON.stringify(proxyReq.getHeaders())
              )
            })
            proxy.on('proxyRes', (proxyRes, req, _res) => {
              console.log('Received Response from the Target:', proxyRes.statusCode, req.url, JSON.stringify(proxyRes.headers))
            })
          }
        },
        '/api/api_sc': {
          target: process.env.VITE_APP_TARGET_API_NEX,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api\/api_sc/, ''),
          followRedirects: true
        }
      }
    },
    plugins: [
      vue(),
      AutoImport({
        include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
        imports: [
          // 自動匯入API設定
          'vue',
          'vue-router'
        ],
        // 配置文件生成位置
        dts: 'types/auto-imports.d.ts',
        eslintrc: {
          enabled: true,
          filepath: './.eslintrc-auto-import.json',
          globalsPropValue: true
        }
      }),
      Components({
        dirs: ['src/components'],
        extensions: ['vue', 'tsx'],
        dts: 'types/components.d.ts'
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@design': path.resolve(__dirname, 'src/assets/img/')
      }
    }
  })
}
