<template>
    <footer>
        <ul>
            <li v-for="link in siteFooterData.siteFooter.footerMenu" :key="link.linkUrl">
                <nuxt-link :to="{ path: buildLinkPath(link.linkUrl) }">{{ link.linkTitle }}</nuxt-link>
            </li>
        </ul>
    </footer>
</template>
  
<script setup>
const props = defineProps(['siteFooterData', 'siteFooterPending', 'siteFooterError', 'routerPath']);
const buildLinkPath = (linkUrl) => {
    if (props.routerPath) {
        return `${props.routerPath}${linkUrl}`;
    } else {
        return linkUrl;
    }
};
</script>