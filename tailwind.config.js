module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                img1: "url('./img/imgbg.jpg')",
                img2: "url('./img/auth.png')",
                login: "url('./img/login.png')",
            }),
            fontFamily: {
                akaya: 'Akaya',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
}
