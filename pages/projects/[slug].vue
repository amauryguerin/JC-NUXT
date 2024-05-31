<template>
    <div v-if="!projectSinglePending">
        <div>
            <h1>
                {{ projectSingle.project.projectTitle }}
            </h1>
            <p>
                {{ projectSingle.project.projectContent }}
            </p>
            <div v-html="projectSingle.project.projectContent"></div>
        </div>
    </div>
</template>

<script setup>
import projectBySlug from '@/api/queries/projectBySlug'

const route = useRoute()
const { data: projectSingle, pending: projectSinglePending, error: projectSingleError } = await useLazyAsyncQuery(projectBySlug, { slug: route.params.slug })
</script>