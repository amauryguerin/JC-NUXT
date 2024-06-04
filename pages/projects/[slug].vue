<template>
    <div v-if="!projectSinglePending">
        <h2>
            {{ projectSingleData.project.projectTitle }}
        </h2>
        <ProjectCarousel :projectSingleData="projectSingleData" :projectSinglePending="projectSinglePending"
            :projectSingleError="projectSingleError" />
    </div>
</template>

<script setup>
import projectBySlug from '@/api/queries/projectBySlug'

const route = useRoute()
const { data: projectSingleData, pending: projectSinglePending, error: projectSingleError } = await useLazyAsyncQuery(projectBySlug, { slug: route.params.slug })
</script>