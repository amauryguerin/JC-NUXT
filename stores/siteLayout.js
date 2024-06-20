import { defineStore } from "pinia";

export const useSiteLayoutStore = defineStore("siteLayout", {
  state: () => ({
    headerHeight: 0,
  }),
  actions: {
    setHeaderHeight(height) {
      this.headerHeight = height;
    },
  },
});
