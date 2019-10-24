module.exports = {
    siteName: "Barebone",
    icon: "src/assets/logo.png",
    plugins: [
        {
            use: "gridsome-plugin-typescript",
        },
        {
            use: "gridsome-plugin-tailwindcss",
            options: {
                tailwindConfig: "./tailwind.config.js",
                purgeConfig: {},
                presetEnvConfig: {},
                shouldPurge: true,
                shouldImport: true,
                shouldTimeTravel: true,
                shouldPurgeUnusedKeyframes: true,
            },
        },
    ],
    chainWebpack: config => {
        config.module
            .rule("i18n")
            .resourceQuery(/blockType=i18n/)
            .type("javascript/auto")
            .use("i18n")
            .loader("@kazupon/vue-i18n-loader");
    },
};
