import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
// import filesize from 'rollup-plugin-filesize';


// https://vitejs.dev/config/

export default ({mode}: { mode: string }) => {
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};


    return defineConfig({
        plugins: [vue()],
        define: {
            '__APP_VERSION__': JSON.stringify(process.env.npm_package_version),
        },
        resolve: {
            alias: [
                {find: '@/', replacement: '/src/'},
            ],
        },

        css: {
            // preprocessorOptions: {
            //     scss: {
            //         additionalData: `@import "@/assets/css/variables";`,
            //         charset: false
            //     }
            // },
        },

        server: {
            port: 3000,
        }
    });
}
