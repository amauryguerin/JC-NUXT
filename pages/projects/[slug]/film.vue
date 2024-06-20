<template>
    <video width="100%" :style="{ height: availableHeight }" autoplay muted controls>
        <source :src="projectSingleData.project.projectVideo.url" />
        Your browser does not support the video tag.
    </video>
    <SiteFooter v-if="!siteFooterPending" :siteFooterData="siteFooterData" :siteFooterPending="siteFooterPending"
        :siteFooterError="siteFooterError" :routerPath="`/projects/${route.params.slug}`"
        :isProjectVideo="isProjectVideo" />
</template>

<script setup>
import projectBySlug from '@/api/queries/projectBySlug'
import siteFooter from '@/api/queries/siteFooter'
import { onMounted, ref, nextTick } from 'vue';
import { useSiteLayoutStore } from '@/stores/siteLayout.js';

const siteLayoutStore = useSiteLayoutStore();
const availableHeight = ref(0);
onMounted(async () => {
    await nextTick();
    const headerHeight = siteLayoutStore.headerHeight;
    const footerHeight = siteLayoutStore.footerHeight;
    availableHeight.value = `calc(100vh - ${headerHeight}px - ${footerHeight}px)`;
});

const route = useRoute()
const { data: projectSingleData, pending: projectSinglePending, error: projectSingleError } = await useLazyAsyncQuery(projectBySlug, { slug: route.params.slug })
const { data: siteFooterData, pending: siteFooterPending, error: siteFooterError } = await useLazyAsyncQuery(siteFooter);

const isProjectVideo = computed(() => {
    return projectSingleData.value.project.projectVideo !== null
})
</script>