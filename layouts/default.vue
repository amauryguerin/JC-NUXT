<template>
    <Html lang="fr">
    <main>
        <SiteHeader :siteHeaderData="siteHeaderData" :siteHeaderPending="siteHeaderPending"
            :siteHeaderError="siteHeaderError" />
        <NuxtPage />
    </main>

    </Html>
</template>
<script setup>

import getSiteHeader from '~/api/queries/siteHeader.js';
const { data: siteHeaderData, pending: siteHeaderPending, error: siteHeaderError } = await useLazyAsyncQuery(getSiteHeader);
</script>