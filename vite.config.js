import react from '@vitejs/plugin-react';

export default {
    plugins: [
        react()
    ],
    root: 'src/',
    publicDir: "../public/",
    base: './',
    server: {
        host: true,
        open: false && ('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env)
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true
    }
};