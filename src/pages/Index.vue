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
    <layout>
        <div class="flex w-full h-full justify-center items-center">
            <h1 class="text-4xl font-semibold">Barebones starter for Gridsome</h1>
        </div>
    </layout>
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
