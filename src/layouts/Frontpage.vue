<style>
    .fade-enter-active {
        transition: opacity .5s;
    }

    .fade-enter {
        opacity: 0;
    }
</style>

<template>
    <div class="flex flex-col min-h-screen bg-gray-200 text-gray-800 antialiased font-sans" style="background-color: #1E1E1E;">
        <transition name="fade" appear>
            <main>
                <slot />
            </main>
        </transition>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "Frontpage",
    mounted()
    {
        // This is nessecary because of Gridsome.
        // vue-i18n isn't officially supported yet.
        this.$i18n.locale = window.navigator.language;
    },
});
</script>