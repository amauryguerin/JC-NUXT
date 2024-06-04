<template>
    <Html lang="fr">
    <SiteHeader v-if="!siteHeaderPending" :siteHeaderData="siteHeaderData" :siteHeaderPending="siteHeaderPending"
        :siteHeaderError="siteHeaderError" />
    <main>
        <NuxtPage />
    </main>

    </Html>
</template>
<script setup>

import getSiteHeader from '~/api/queries/siteHeader.js';
const { data: siteHeaderData, pending: siteHeaderPending, error: siteHeaderError } = await useLazyAsyncQuery(getSiteHeader);
</script>