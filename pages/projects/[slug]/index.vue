<template>
    <div v-if="!projectSinglePending">
        <h2>
            {{ projectSingleData.project.projectTitle }}
        </h2>
        <ProjectCarousel :projectSingleData="projectSingleData" :projectSinglePending="projectSinglePending"
            :projectSingleError="projectSingleError" />
    </div>
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