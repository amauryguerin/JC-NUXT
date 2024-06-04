<template>
    <header>
        <nav>
            <ul>
                <li v-for="link in siteHeaderData.siteHeader.headerMenu">
                    <nuxt-link :to="{ path: link.linkUrl }"> {{ link.linkTitle }}</nuxt-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
const props = defineProps(['siteHeaderData', 'siteHeaderPending', 'siteHeaderError']);
</script>