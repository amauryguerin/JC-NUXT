<template>
    <div v-if="!pageAboutPending" v-html="pageAboutData.pageAbout.aboutContent"></div>
</template>

<script setup>
import getPageAbout from '~/api/queries/pageAbout.js';
const { data: pageAboutData, pending: pageAboutPending, error: pageAboutError } = await useLazyAsyncQuery(getPageAbout);

import { useSeoStore } from '@/stores/siteSeo.js'
import { watchEffect } from 'vue';

const seoStore = useSeoStore()

if (seoStore.pending) {
    await seoStore.fetchSeoData()
}

watchEffect(() => {
    if (seoStore.seoData) {
        const seoData = seoStore.seoData.pageAbout.seoMetadata;
        useSeoMeta({
            title: seoData.title,
            ogTitle: seoData.title,
            description: seoData.description,
            ogDescription: seoData.description,
            ogImage: seoData.image.url,
            twitterCard: seoData.twitterCard,
        })
    }
})
</script>