<template>
    <ProjectMenu :projectMenuData="projectMenuData" :projectMenuPending="projectMenuPending"
        :projectMenuError="projectMenuError" />
</template>

<script setup>
import getProjectMenu from '~/api/queries/projectMenu.js';
const { data: projectMenuData, pending: projectMenuPending, error: projectMenuError } = await useLazyAsyncQuery(getProjectMenu);
</script>