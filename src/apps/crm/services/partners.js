// TODO: replace by calls to api

import partners from "@/datas/apps/crm/partners";

export const fetchPartners = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(partners);
    }, 300);
  });

// TODO: complete the implementation with a real case
export const fetchPartnerById = (partnerId) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(partners.partners[0]);
    }, 400);
  });
