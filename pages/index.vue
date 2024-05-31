<template>
    <p>Page 1</p>
    <NuxtLink to="/projects/mon-premier-projet">Page projet</NuxtLink>
    <AppInfo>Composant auto importé depuis page 1</AppInfo>
    <div class="image">
        <NuxtImg src="/zoomer.png" alt="zoomer" />
    </div>
    <CountButton></CountButton>
    <p></p>
    <ReactiveButton></ReactiveButton>
</template>

<script setup>
import getAllProjects from '~/api/queries/allProjects.js';

const { data: projectsData, pending: projectsPending, error: projectsError } = await useLazyAsyncQuery(getAllProjects);
</script>