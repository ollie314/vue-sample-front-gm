// TODO: should be splitted in submodules

import documents from "@/datas/apps/crm/documents";

import {
  fetchDocuments,
  fetchDocumentById
} from "@/apps/crm/services/documents";

export const crmDocumentsModule = {
  state: () => ({
    errors: [],
    documents,
    documentId: "",
    currentDocument: {}
  }),
  mutations: {
    setDocuments(state, documents) {
      state.documents = documents;
    },
    addDocument(state, document) {
      state.document = [...state.document, document];
    },
    setCurrentDocument(state, document) {
      state.currentDocument = document;
    },
    setCurrentDocumentId(state, documentId) {
      state.currentDocumentId = documentId;
    },
    removeDocument(state, document) {
      state.documents = state.documents.filter((d) => d.id !== document.id);
    }
  },
  actions: {
    async loadDocuments({ commit, state }) {
      try {
        commit("setLoading", true);
        const documents = await fetchDocuments();
        commit("setDocuments", documents);
      } catch (err) {
        commit("addError", err);
      } finally {
        commit("setLoading", false);
      }
    },
    async loadDocument({ commit, state }) {
      try {
        commit("setLoading", true);
        const document = await fetchDocumentById(state.documentId);
        commit("setCurrentDocument", document);
      } catch (err) {
        commit("addError", err);
      } finally {
        commit("setLoading", false);
      }
    }
  },
  getters: {
    documents(state) {
      return state.documents;
    },
    currentDocument(state) {
      return state.currentDocument;
    }
  }
};
