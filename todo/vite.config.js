import { defineConfig } from 'vite'


// https://vitejs.dev/config/
export default defineConfig({
  test:{  
    setupFiles:'./src/mocks/setupTests.js'
  }
})
