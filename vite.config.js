import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      // Customize the behavior of CSS modules
      scopeBehaviour: 'local', // default is 'local', meaning CSS modules are scoped locally
      generateScopedName: '[name]__[local]___[hash:base64:5]', // Optional, customize the generated class names
    },
  },
});