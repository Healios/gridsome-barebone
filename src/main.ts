import "animate.css";

import { ClientApiConstructor } from "./types";
import FrontpageLayout from "@/layouts/Frontpage.vue";
import VueI18n from "vue-i18n";

const client: ClientApiConstructor = (Vue, { head, appOptions }) => {
    Vue.use(VueI18n);
    (appOptions as any).i18n = new VueI18n({
        locale: "en",
        fallbackLocale: "en",
        silentTranslationWarn: false,
        silentFallbackWarn: false,
    });

    Vue.component("Frontpage", FrontpageLayout);
};

export default client;
