<template>
    <div v-html="projectSingleData.project.projectContent"></div>
    <SiteFooter v-if="!siteFooterPending" :siteFooterData="siteFooterData" :siteFooterPending="siteFooterPending"
        :siteFooterError="siteFooterError" :routerPath="`/projects/${route.params.slug}`"
        :isProjectVideo="isProjectVideo" />
</template>

<script setup>
import projectBySlug from '@/api/queries/projectBySlug'
import siteFooter from '@/api/queries/siteFooter'
const route = useRoute()
const { data: projectSingleData, pending: projectSinglePending, error: projectSingleError } = await useLazyAsyncQuery(projectBySlug, { slug: route.params.slug })
const { data: siteFooterData, pending: siteFooterPending, error: siteFooterError } = await useLazyAsyncQuery(siteFooter);

const isProjectVideo = computed(() => {
    return projectSingleData.value.project.projectVideo !== null
})

</script>