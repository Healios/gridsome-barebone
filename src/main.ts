/* eslint @typescript-eslint/no-unused-vars: 0 */
/* eslint @typescript-eslint/no-explicit-any: 0 */
import "@/assets/css/tailwind.css";

import { ClientApiConstructor, } from "./types";
import Layout from "@/layouts/Layout.vue";
import VueI18n from "vue-i18n";

const client : ClientApiConstructor = (Vue, { head, appOptions, }) => {
    Vue.use(VueI18n);
    (appOptions as any).i18n = new VueI18n({
        locale: "en",
        fallbackLocale: "en",
        silentTranslationWarn: false,
        silentFallbackWarn: false,
    });

    Vue.component("Layout", Layout);
};

export default client;
