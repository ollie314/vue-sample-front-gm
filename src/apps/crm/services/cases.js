// TODO: replace by calls to api

import cases from "@/datas/apps/crm/cases";

export const fetchcases = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(cases);
    }, 300);
  });

// TODO: complete the implementation with a real case
export const fetchCaseById = (caseId) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(cases.cases[0]);
    }, 400);
  });
