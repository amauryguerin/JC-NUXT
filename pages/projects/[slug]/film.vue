<template>
    <video width="100%" height="auto" muted controls>
        <source :src="projectSingleData.project.projectVideo.url" />
        Your browser does not support the video tag.
    </video>
    <SiteFooter v-if="!siteFooterPending" :siteFooterData="siteFooterData" :siteFooterPending="siteFooterPending"
        :siteFooterError="siteFooterError" :routerPath="`/projects/${route.params.slug}`" />
</template>

<script setup>
import projectBySlug from '@/api/queries/projectBySlug'
import siteFooter from '@/api/queries/siteFooter'
const route = useRoute()
const { data: projectSingleData, pending: projectSinglePending, error: projectSingleError } = await useLazyAsyncQuery(projectBySlug, { slug: route.params.slug })
const { data: siteFooterData, pending: siteFooterPending, error: siteFooterError } = await useLazyAsyncQuery(siteFooter);
</script>