<template>
    <footer ref="footerRef">
        <ul>
            <li v-for="link in filteredFooterMenu" :key="link.linkUrl">
                <nuxt-link :to="{ path: buildLinkPath(link.linkUrl) }">{{ link.linkTitle }}</nuxt-link>
            </li>
        </ul>
    </footer>
</template>
  
<script setup>
import { computed, onMounted, ref } from 'vue';
import { useSiteLayoutStore } from '@/stores/siteLayout.js';
import { useRoute } from 'vue-router';

const props = defineProps(['siteFooterData', 'siteFooterPending', 'siteFooterError', 'isProjectVideo', 'routerPath']);
const route = useRoute();

const buildLinkPath = (linkUrl) => {
    return props.routerPath ? `${props.routerPath}${linkUrl}` : linkUrl;
};

const shouldDisplayLink = (link) => {
    if (link.linkUrl === '/film') {
        return props.isProjectVideo || route.path.includes('/film');
    }
    if (link.linkUrl === '/film' && !props.isProjectVideo) {
        return false;
    }
    return true;
};

const filteredFooterMenu = computed(() => {
    return props.siteFooterData.siteFooter.footerMenu.filter(shouldDisplayLink);
});

const siteLayoutStore = useSiteLayoutStore();
const footerRef = ref(null);
onMounted(() => {
    siteLayoutStore.setFooterHeight(footerRef.value.offsetHeight);
});
</script>

<style lang="scss" scoped>
ul {
    display: flex;
    justify-content: center;
    gap: 1rem;

    li {
        a {
            font-size: 1.5rem;
        }
    }
}
</style>