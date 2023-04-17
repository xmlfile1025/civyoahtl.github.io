import { defineConfig } from "vite";
import { SearchPlugin } from "vitepress-plugin-search";

export default defineConfig({
  plugins: [
    SearchPlugin({
      previewLength: 10,
      tokenize: "forward",
      cache: 20,
      context: {
        resolution: 5,
        depth: 3,
        bidirectional: true,
      },
    }),
  ],
});
