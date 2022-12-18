import { resolve } from "path";
import { defineConfig } from "vite";

// export default {
//   server: {
//     port: 5173,
//     hot: true,
//     host: "127.0.0.1",
//   },
// };

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        create: resolve(__dirname, "src/html/createListing/createListing.html"),
        listing: resolve(__dirname, "src/html/listing/listing.html"),
        login: resolve(__dirname, "src/html/login/login.html"),
        profile: resolve(__dirname, "src/html/profile/profile.html"),
        register: resolve(__dirname, "src/html/register/register.html"),
        updateAvatar: resolve(
          __dirname,
          "src/html/updateAvatar/updateAvatar.html"
        ),
        updateListing: resolve(
          __dirname,
          "src/html/updateListing/updateListing.html"
        ),
      },
    },
  },
});
