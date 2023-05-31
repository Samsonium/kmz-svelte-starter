import preprocess from 'svelte-preprocess'
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte'

export default {
    preprocess: [
        vitePreprocess(),
        preprocess({
            scss: {
                prependData: '@use "src/variables.sass" as *'
            }
        })
    ]
}
