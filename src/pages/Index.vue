<i18n>
{
    "en": {
        "title": "Frontpage",
        "description": "Description"
    },
    "da": {
        "title": "Forside",
        "description": "Beskrivelse"
    }
}
</i18n>

<template>
    <Frontpage>
    </Frontpage>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "Home",
    metaInfo() {
        return {
            title: this.$t("description").toString(),
            meta: [
                { name: "description", content: this.$t("description").toString(), },
            ],
            htmlAttrs: {
                lang: this.$i18n.locale,
            },
        };
    },
});
</script>