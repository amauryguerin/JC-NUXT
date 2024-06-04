<template>
    <div v-if="!projectMenuPending">
        <ProjectMenu :projectMenuData="projectMenuData" :projectMenuPending="projectMenuPending"
            :projectMenuError="projectMenuError" />
    </div>
</template>

<script setup>
import getProjectMenu from '~/api/queries/projectMenu.js';
const { data: projectMenuData, pending: projectMenuPending, error: projectMenuError } = await useLazyAsyncQuery(getProjectMenu);
</script>