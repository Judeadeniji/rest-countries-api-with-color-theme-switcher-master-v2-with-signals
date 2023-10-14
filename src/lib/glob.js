import { defineStore, signal } from "rc-extended/store";

export const darkMode = signal(true);

// let the magic begin 😌
export const useApp = defineStore("app-store", {
  state: () => ({
    country: "",
    countries: [],
    region: "all",
    loading: false,
    error: false,
    url: "https://restcountries.com/v3.1/all",
  }),
  actions: {
    onRegionChange(_, newValue) {
      this.region = newValue;
      this.country = "";
      this.error = false;
      if (newValue === "all") {
        this.url = "https://restcountries.com/v3.1/all";
      } else {
        this.url = `https://restcountries.com/v3.1/region/${this.region}`;
      }
    },
    onCountryChange(_, newValue) {
      this.country = newValue;
      this.region = "all";
      this.error = false;
      if (newValue.trim() === "") {
        this.url = "https://restcountries.com/v3.1/all";
      } else {
        this.url = `https://restcountries.com/v3.1/name/${newValue}`;
      }
    },
  },
  effects: {
    //this effect depends on all state values referenced in it;
    country_eff() {
      const state = this;
      const controller = new AbortController();
      (async function () {
        state.loading = true;
        try {
          const res = await fetch(state.url, { signal: controller.signal });
          const data = await res.json();
          if (!data.length) {
            state.error = true;
          } else {
            const newData = data.filter((c) =>
              c.name.common.toLowerCase().startsWith(state.country.toLowerCase())
            );
            state.loading = false;
            if (!newData.length) {
              state.countries = newData;
            } else {
              state.countries = data;
            }
          }
          if (data.status == 404) {
            state.countries = [];
            state.loading = false;
            state.error = false;
          }
        } catch (err) {
          if (err.name !== "AbortError") {
            console.error(err);
            state.error = true;
            state.loading = false;
          }
        }
      })();

      return () => controller.abort();
    },
  },
});
