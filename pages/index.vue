<template>
    <div v-if="!projectMenuPending">
        <ProjectMenu :projectMenuData="projectMenuData" :projectMenuPending="projectMenuPending"
            :projectMenuError="projectMenuError" :availableHeight="availableHeight" />
    </div>
</template>

<script setup>
import getProjectMenu from '~/api/queries/projectMenu.js';
import { onMounted, ref, nextTick } from 'vue';
import { useSiteLayoutStore } from '@/stores/siteLayout.js';

const { data: projectMenuData, pending: projectMenuPending, error: projectMenuError } = await useLazyAsyncQuery(getProjectMenu);

const siteLayoutStore = useSiteLayoutStore();
const availableHeight = ref(0);

const getProjectMenuTitleHeight = () => {
    const titleElement = document.querySelector('.project--menu__title');
    return titleElement ? titleElement.offsetHeight : 0;
};

onMounted(async () => {
    await nextTick();
    const headerHeight = siteLayoutStore.headerHeight;
    const titleHeight = getProjectMenuTitleHeight();
    availableHeight.value = `calc(100vh - ${headerHeight}px - ${titleHeight}px)`;
});
</script>