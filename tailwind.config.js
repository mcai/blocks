// eslint-disable-next-line no-undef
module.exports = {
    prefix: "tw-",
    purge: {
        content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
