module.exports = {
  // vite port
  VITE_PORT: '3100',

  //Whether to open mock
  VITE_USE_MOCK: true,

  //public path
  VITE_PUBLIC_PATH: '/',

  // Cross-domain proxy, you can configure multiple
  VITE_PROXY: [
    ['/api', 'http://localhost:3000'],
    ['/upload', 'http://localhost:3001/upload']
  ],
  // VITE_PROXY=[["/api","https://vvbin.cn/test"]]

  // Delete console
  VITE_DROP_CONSOLE: false,

  // Basic interface address SPA
  VITE_GLOB_API_URL: '/api',

  // File upload address， optional
  VITE_GLOB_UPLOAD_URL: '/upload',

  // Interface prefix
  VITE_GLOB_API_URL_PREFIX: ''
}
