import partners from "@/datas/apps/crm/partners";

import { fetchPartners, fetchPartnerById } from "@/apps/crm/services/partners";

export const crmPartnersModule = {
  state: () => ({
    partners,
    partnerId: "",
    currentPartner: {}
  }),
  mutations: {
    setPartners(state, partners) {
      state.partners = partners;
    },
    addPartner(state, partner) {
      state.partner = [...state.partner, partner];
    },
    setCurrentPartner(state, partner) {
      state.currentPartner = partner;
    },
    setCurrentPartnerId(state, partnerId) {
      state.currentPartnerId = partnerId;
    },
    removePartner(state, partner) {
      state.partners = state.partners.filter((p) => p.id !== partner.id);
    }
  },
  actions: {
    async loadPartners({ commit, state }) {
      try {
        commit("setLoading", true);
        const partners = await fetchPartners();
        commit("setPartners", partners);
      } catch (err) {
        commit("addError", err);
      } finally {
        commit("setLoading", false);
      }
    },
    async loadPartner({ commit, state }) {
      try {
        commit("setLoading", true);
        const partner = await fetchPartnerById(state.partnerId);
        commit("setCurrentPartner", partner);
      } catch (err) {
        commit("addError", err);
      } finally {
        commit("setLoading", false);
      }
    }
  },
  getters: {
    partners(state) {
      return state.partners;
    },
    currentPartners(state) {
      return state.currentPartners;
    }
  }
};
