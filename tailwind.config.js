module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            "newgray": "#f6f6ef",
            "orange": "#ff6600"
        },
        extend: {
            fontFamily: {
                'nunito': ['Nunito'],
                'lato': ['Lato'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
