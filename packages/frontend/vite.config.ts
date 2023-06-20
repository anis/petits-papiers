import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { version } from "./package.json";

export default defineConfig({
    plugins: [vue()],
    server: {
        host: "0.0.0.0",
        port: 5002,
        strictPort: true,
    },
    define: {
        __APP_VERSION__: JSON.stringify(version),
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
});
