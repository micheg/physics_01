// vite.config.js
import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  root: "./src",
  build: {
    outDir: "../dist",
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'assets/images/**/*',
          dest: 'assets/images',
        },
        {
          src: 'assets/sounds/**/*',
          dest: 'assets/sounds',
        },
      ],
    }),
  ],
});
