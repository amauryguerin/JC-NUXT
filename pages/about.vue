<template>
    <div v-if="!pageAboutPending" v-html="pageAboutData.pageAbout.aboutContent"></div>
</template>

<script setup>
import getPageAbout from '~/api/queries/pageAbout.js';
const { data: pageAboutData, pending: pageAboutPending, error: pageAboutError } = await useLazyAsyncQuery(getPageAbout);
</script>