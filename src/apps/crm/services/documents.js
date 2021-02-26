// TODO: replace by calls to api

import documents from "@/datas/apps/crm/documents";

export const fetchDocuments = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(documents);
    }, 300);
  });

// TODO: complete the implementation with a real case
export const fetchDocumentById = (documentId) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(documents.documents[0]);
    }, 400);
  });
