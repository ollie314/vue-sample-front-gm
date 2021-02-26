// TODO: should be splitted in submodules

import cases from "@/datas/apps/crm/cases";

import { fetchcases, fetchCaseById } from "@/apps/crm/services/cases";

export const crmCasesModule = {
  state: () => ({
    errors: [],
    cases,
    caseId: "",
    currentCase: {}
  }),
  mutations: {
    setCases(state, cases) {
      state.cases = cases;
    },
    addCases(state, cse) {
      state.cases = [...state.cases, cse];
    },
    setCurrentCase(state, cse) {
      state.currentCase = cse;
    },
    removeCase(state, cse) {
      state.cases = state.cases.filter((c) => c.id !== cse.id);
    }
  },
  actions: {
    async loadCases({ commit, state }) {
      try {
        commit("setLoading", true);
        const cases = await fetchcases();
        commit("setCases", cases);
      } catch (err) {
        commit("addError", err);
      } finally {
        commit("setLoading", false);
      }
    },
    async loadCase({ commit, state }) {
      try {
        commit("setLoading", true);
        const cse = await fetchCaseById(state.caseId);
        commit("setCurrentCase", cse);
      } catch (err) {
        commit("addError", err);
      } finally {
        commit("setLoading", false);
      }
    }
  },
  getters: {
    cases(state) {
      return state.cases;
    },
    currentCase(state) {
      return state.currentCase;
    }
  }
};
