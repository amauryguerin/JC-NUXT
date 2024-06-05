import { defineStore } from "pinia";
import siteSeo from "@/api/queries/siteSeo";

export const useSeoStore = defineStore("seo", {
  state: () => ({
    seoData: null,
    pending: true,
    error: null,
  }),
  actions: {
    async fetchSeoData(slug) {
      try {
        const { data: siteSeoData } = await useLazyAsyncQuery(siteSeo, {
          slug,
        });
        this.seoData = siteSeoData.value;
        this.pending = false;
      } catch (error) {
        this.error = error;
        this.pending = false;
      }
    },
  },
});
