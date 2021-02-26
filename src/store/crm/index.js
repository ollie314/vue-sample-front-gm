// TODO: should be splitted in submodules

import { crmCasesModule } from "./cases";
import { crmDocumentsModule } from "./documents";
import { crmPartnersModule } from "./partners";

export const crmModule = {
  modules: {
    cases: crmCasesModule,
    documents: crmDocumentsModule,
    partners: crmPartnersModule
  },
  state: () => ({}),
  mutations: {},
  actions: {},
  getters: {}
};
