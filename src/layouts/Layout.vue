<template>
    <main class="flex min-h-screen bg-white text-gray-800 antialiased font-sans">
        <section class="flex flex-grow" id="main-content" key="main">
            <slot />
        </section>
    </main>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "Layout",
    mounted()
    {
        // This is nessecary because of Gridsome.
        // vue-i18n isn't officially supported yet.
        this.$i18n.locale = window.navigator.language;
    },
});
</script>