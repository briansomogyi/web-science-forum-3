export default {
    pwa: {
        name: 'My App Name',
        themeColor: '#4DBA87',
        msTileColor: '#000000',
        manifestOptions: {
            start_url: '/',
            display: 'standalone',
            icons: [
                {
                    src: './img/icons/android-chrome-192x192.png',
                    sizes: '192x192',
                    type: 'image/png',
                },
                {
                    src: './img/icons/android-chrome-512x512.png',
                    sizes: '512x512',
                    type: 'image/png',
                },
            ],
        },
    },
}
