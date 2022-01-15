const defaultTheme = require("tailwindcss/defaultTheme");
const defaultConfig = require("tailwindcss/defaultConfig");
const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        './_includes/**/*.{html,md}',
        './_layouts/**/*.{html,md}',
        './_posts/*.{html,md}',
        './articles/*.{html,md}',
        './blog/**/*.{html,md}',
        './*.{html,md}',
    ],
    theme: {
        fontFamily: {
            sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
            serif: [...defaultTheme.fontFamily.serif],
            fancy: ["Signika Negative", ...defaultTheme.fontFamily.sans]
        },

        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}