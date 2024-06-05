<template>
    <div v-if="!pageContactPending" v-html="pageContactData.pageContact.contactContent"></div>
</template>

<script setup>
import getPageContact from '~/api/queries/pageContact.js';
const { data: pageContactData, pending: pageContactPending, error: pageContactError } = await useLazyAsyncQuery(getPageContact);

import { useSeoStore } from '@/stores/siteSeo.js'
import { watchEffect } from 'vue';

const seoStore = useSeoStore()

if (seoStore.pending) {
    await seoStore.fetchSeoData()
}

watchEffect(() => {
    if (seoStore.seoData) {
        const seoData = seoStore.seoData.pageContact.seoMetadata;
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