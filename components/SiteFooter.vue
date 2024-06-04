<template>
    <footer>
        <ul>
            <li v-for="link in filteredFooterMenu" :key="link.linkUrl">
                <nuxt-link :to="{ path: buildLinkPath(link.linkUrl) }">{{ link.linkTitle }}</nuxt-link>
            </li>
        </ul>
    </footer>
</template>
  
<script setup>
import { computed } from 'vue';

const props = defineProps(['siteFooterData', 'siteFooterPending', 'siteFooterError', 'isProjectVideo', 'routerPath']);

const buildLinkPath = (linkUrl) => {
    return props.routerPath ? `${props.routerPath}${linkUrl}` : linkUrl;
};

const filteredFooterMenu = computed(() => {
    return props.siteFooterData.siteFooter.footerMenu.filter(link => {
        if (link.linkUrl === '/film' && !props.isProjectVideo) {
            return false;
        }
        return true;
    });
});
</script>