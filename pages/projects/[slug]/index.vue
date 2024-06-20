<template>
    <div v-if="!projectSinglePending">
        <h2 ref="projectTitleRef">{{ projectSingleData.project.projectTitle }}</h2>
        <ProjectCarousel :projectSingleData="projectSingleData" :projectSinglePending="projectSinglePending"
            :projectSingleError="projectSingleError" :availableHeight="availableHeight" />
    </div>
    <SiteFooter ref="projectFooterRef" v-if="!siteFooterPending" :siteFooterData="siteFooterData"
        :siteFooterPending="siteFooterPending" :siteFooterError="siteFooterError" :isProjectVideo="isProjectVideo"
        :routerPath="`/projects/${route.params.slug}`" />
</template>

<script setup>
import { computed, watchEffect, onMounted, ref, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useSeoStore } from '@/stores/siteSeo.js'

import projectBySlug from '@/api/queries/projectBySlug'
import siteFooter from '@/api/queries/siteFooter'

import { useSiteLayoutStore } from '@/stores/siteLayout.js';

const route = useRoute()
const { data: projectSingleData, pending: projectSinglePending, error: projectSingleError } = await useLazyAsyncQuery(projectBySlug, { slug: route.params.slug })
const { data: siteFooterData, pending: siteFooterPending, error: siteFooterError } = await useLazyAsyncQuery(siteFooter)
const isProjectVideo = computed(() => {
    return projectSingleData.value && projectSingleData.value.project && projectSingleData.value.project.projectVideo !== null
})

const seoStore = useSeoStore();
watchEffect(() => {
    if (seoStore.seoData && projectSingleData.value) {
        const projectSeoData = seoStore.seoData.allProjects.find(project => project.id === projectSingleData.value.project.id).seoMetadata
        useSeoMeta({
            title: projectSeoData.title,
            ogTitle: projectSeoData.title,
            description: projectSeoData.description,
            ogDescription: projectSeoData.description,
            twitterCard: projectSeoData.twitterCard,
            ogImage: projectSeoData.image.url
        })
    }
})

const siteLayoutStore = useSiteLayoutStore()
const projectTitleRef = ref(null)
const availableHeight = ref(0)

onMounted(async () => {
    await nextTick()
    const headerHeight = siteLayoutStore.headerHeight
    const footerHeight = siteLayoutStore.footerHeight
    const projectTitleHeight = projectTitleRef.value ? projectTitleRef.value.offsetHeight : 0
    availableHeight.value = `calc(100vh - ${headerHeight}px - ${footerHeight}px - ${projectTitleHeight}px)`
});
</script>

<style lang="scss"></style>
