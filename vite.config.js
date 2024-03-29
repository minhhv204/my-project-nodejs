import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";
import { resolve } from "path";
export default defineConfig({
  server: {
    port: 8000,
  },
  build: {
    rollupOptions: {
        input: {
            main: resolve(__dirname, "http://localhost:8000/"),
        },
    },
},
  plugins: [
    ...VitePluginNode({
      adapter: "express",
      appPath: "./index.js",
      exportName: "viteNodeApp",
      initAppOnBoot: false,
      tsCompiler: "esbuild",
      swcOptions: {},
    }),
  ],
 
  optimizeDeps: {},
});