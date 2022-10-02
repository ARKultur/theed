module.exports = {
    content: [
        './*.html',
        './src/**/*.js',
        "./node_modules/flowbite/**/*.js"
    ],
    darkMode: 'media',
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('flowbite/plugin')
    ],
}
