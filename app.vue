<template>
    <NuxtLayout />
</template>
  
<script setup lang="ts">
import { useSeoStore } from '@/stores/siteSeo.js'
import { watchEffect } from 'vue';

const seoStore = useSeoStore()

if (seoStore.pending) {
    await seoStore.fetchSeoData()
}

watchEffect(() => {
    if (seoStore.seoData) {
        const seoData = seoStore.seoData._site;

        useSeoMeta({
            title: seoData.globalSeo.siteName,
            ogTitle: seoData.globalSeo.siteName,
            description: seoData.globalSeo.fallbackSeo.description,
            ogDescription: seoData.globalSeo.fallbackSeo.description,
            ogImage: seoData.globalSeo.fallbackSeo.image.url,
            twitterCard: seoData.globalSeo.fallbackSeo.twitterCard,
        })
    }
})
</script>

<style lang="scss">
@use "~/assets/scss/main.scss"
</style>