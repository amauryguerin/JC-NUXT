<template>
    <header ref="headerRef">
        <nav>
            <ul>
                <li v-for="link in siteHeaderData.siteHeader.headerMenu" :key="link.linkUrl">
                    <nuxt-link :to="{ path: link.linkUrl }"> {{ link.linkTitle }}</nuxt-link>
                </li>
            </ul>
        </nav>
    </header>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import { useSiteLayoutStore } from '@/stores/siteLayout.js';
const headerRef = ref(null);
const siteLayoutStore = useSiteLayoutStore();

const props = defineProps(['siteHeaderData', 'siteHeaderPending', 'siteHeaderError']);

onMounted(() => {
    siteLayoutStore.setHeaderHeight(headerRef.value.offsetHeight);
});
</script>
  
<style lang="scss" scoped>
nav {
    padding: 1rem;

    ul {
        display: flex;
        gap: 1rem;
        justify-content: space-between;
        position: relative;
    }
}
</style>
  