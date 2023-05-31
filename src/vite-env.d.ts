/// <reference types="svelte" />
/// <reference types="vite/client" />

/**
 * Типизация под переменные окружения.
 * Вызывается с помощью `import.meta.env.<КЛЮЧ>`
 */
interface ImportMetaEnv {
    readonly VITE_PRODUCT_NAME: string;
    
    readonly VITE_URL_API: string;
    readonly VITE_URL_PUBLIC: string;
    readonly VITE_URL_WS_API: string;
    readonly VITE_URL_SUPPORT: string;
    
    readonly VITE_API_GOOGLE: string;
    readonly VITE_API_DADATA_TOKEN: string;
    readonly VITE_API_DADATA_SECRET: string;
}
