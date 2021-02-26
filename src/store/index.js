import Vue from "vue";
import Vuex from "vuex";

import { fetchPartners } from "@/partners/services/partner.service";

import { crmModule } from "./crm";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    crm: crmModule
  },
  state: {
    loading: false,
    error: null,
    errors: [],
    counter: 0,
    partners: []
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    setPartners(state, partners) {
      state.partners = partners;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    clearError(state) {
      state.error = null;
    },
    clearErrors(state) {
      state.errors = [];
    },
    addError(state, error) {
      state.errors = [state.errors, error];
    }
  },
  actions: {
    clearError({ commit }) {
      commit("clearError");
    },
    increment({ commit, state }, { ts }) {
      setTimeout(() => {
        commit("increment");
      }, 1000);
    },
    async searchPartners({ commit, state }) {
      commit("setLoading", true);
      const partners = await fetchPartners();
      commit("setPartners", partners);
      commit("setLoading", false);
    },
    toggleLoading({ commit, state }) {
      commit("setLoading", !state.loading);
    }
  },
  getters: {
    errors(state) {
      return state.errors;
    },
    counter(state) {
      return state.counter;
    },
    loading(state) {
      return state.loading;
    },
    error(state) {
      return state.error;
    }
  }
});
