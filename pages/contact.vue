<template>
    <div v-if="!pageContactPending" v-html="pageContactData.pageContact.contactContent"></div>
</template>

<script setup>
import getPageContact from '~/api/queries/pageContact.js';
const { data: pageContactData, pending: pageContactPending, error: pageContactError } = await useLazyAsyncQuery(getPageContact);
</script>