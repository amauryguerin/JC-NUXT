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

<style lang="scss">
nav {
    ul {
        display: flex;
        justify-content: center;
        position: relative;

        li {
            a {
                color: $black;
            }

            &:first-child {
                position: absolute;
                left: 0;
                top: -666px;
                transition: top ease-in-out .2s;

                a {
                    color: $white;
                }
            }

            &:last-child {
                position: absolute;
                right: 0;
                top: -666px;
                transition: top ease-in-out .2s;
                font-size: 4rem;

                a {
                    color: $white;
                }
            }

            &:not(:first-child):not(:last-child):hover {
                padding-bottom: 4rem;

                a {
                    transition: all ease-in-out .2s;
                }
            }

            a {
                font-size: 2rem;
                transition: all ease-in-out .2s;
            }
        }

        &:hover {

            li:first-child,
            li:last-child {
                top: 50%;
            }
        }
    }
}
</style>