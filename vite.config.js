import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        nested: resolve(__dirname, "src/html/createListing.html"),
        nested: resolve(__dirname, "src/html/listing.html"),
        nested: resolve(__dirname, "src/html/login.html"),
        nested: resolve(__dirname, "src/html/profile.html"),
        nested: resolve(__dirname, "src/html/register.html"),
        nested: resolve(__dirname, "src/html/updateAvatar.html"),
        nested: resolve(__dirname, "src/html/updateListing.html"),
      },
    },
  },
});

// export default {
//   server: {
//     port: 5173,
//     hot: true,
//     host: "127.0.0.1",
//   },
// };
