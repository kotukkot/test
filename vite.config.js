// import { defineConfig } from 'vite';
// import laravel from 'laravel-vite-plugin';
// import vue from '@vitejs/plugin-vue'

// export default defineConfig({
//     plugins: [
//         vue(),
//         laravel({
//             input: ['resources/js/app.js'],
//             refresh: true,
//         }),
//     ],
// });

import { defineConfig } from "vite";
import laravel from 'laravel-vite-plugin';
import vue from "@vitejs/plugin-vue";

export default ({ mode }) => {
    const isDevelopment = mode === "development";

    return defineConfig({
        server: {
            port: 3000,
        },
        build: {
            outDir: "./../public/app",
        },
        base: isDevelopment ? "/" : "/app/",
        plugins: [
            vue(),
            laravel({
                input: ['resources/js/app.js'],
                refresh: true,
            }),
        ],
    });
};