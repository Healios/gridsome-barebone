/* eslint @typescript-eslint/no-var-requires: 0 */
const tailwind = require("@tailwindcss/postcss7-compat");
const autoprefixer = require("autoprefixer");
const postcssPlugins = [tailwind(), autoprefixer(),];

module.exports = {
    chainWebpack: config => {
        config.module
            .rule("i18n")
            .resourceQuery(/blockType=i18n/)
            .type("javascript/auto")
            .use("i18n")
            .loader("@kazupon/vue-i18n-loader");
    },
    siteName: "Barebones",
    icon: "src/assets/logo.png",
    plugins: [
        {
            use: "gridsome-plugin-typescript",
        },
    ],
    css: {
        loaderOptions: {
            postcss: {
                plugins: postcssPlugins,
            },
        },
    },
};
