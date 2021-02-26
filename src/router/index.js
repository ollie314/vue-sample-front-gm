import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/Home";
import Messaging from "@/pages/Messaging";
import PartnerPage from "@/pages/Partners/Home";
import PartnerForm from "@/pages/Partners/Form";
import RelocationAnnouncementForm from "@/pages/Extranet/Relocation";
import GmNetActivities from "@/pages/Extranet/Activities";
import GmNetActivity from "@/pages/Extranet/Activity";

import PrintingRequestManager from "@/pages/PrintingMgr/RequestManager";

// CRM
import CRMHome from "@/pages/Crm/Home";
import CRMCases from "@/pages/Crm/Cases";
import CRMCase from "@/pages/Crm/Case";
import CRMDocuments from "@/pages/Crm/Documents";
import CRMDocument from "@/pages/Crm/Document";
import CRMPartners from "@/pages/Crm/Partners";
import CRMPartner from "@/pages/Crm/Partner";
import CRMInfos from "@/pages/Crm/Infos";

// DMS
import DMSHome from "@/pages/DMS/Home";

// EDG
import EdgHome from "@/pages/Edg/Home";

// Extranet
import ExtranetHome from "@/pages/Extranet/Home";

// Notification Center
import NotificationCenterHome from "@/pages/NotificationCenter/Home";

// Partners
import PartnersHome from "@/pages/Partners/Home";
import PartnersAddressManagerHome from "@/pages/Partners/AddressManager";

// PrintingMgr
import PrintingMgrHome from "@/pages/PrintingMgr/Home";

// SendingMgr
import SendingManagerHome from "@/pages/SendingMgr/Home";

// Tracking System
import TrackingSystemHome from "@/pages/TrackingSystem/Home";

// Others
import Fallback from "@/pages/Fallback";
import ErrorPage from "@/pages/Error";

//import AuthGuard from "./auth-guard";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Root",
      component: Home
      //beforeEnter: AuthGuard
    },
    {
      path: "/home",
      name: "Home",
      component: Home
      //beforeEnter: AuthGuard
    },
    {
      path: "/infos",
      name: "Infos",
      component: Fallback
      //beforeEnter: AuthGuard
    },
    {
      path: "/messaging",
      name: "Messaging",
      component: Messaging
      //beforeEnter: AuthGuard
    },
    {
      path: "/partners/home",
      name: "Partners Home",
      component: PartnerPage
    },
    {
      path: "/partners/edit",
      name: "Edit",
      component: PartnerForm
    },
    {
      path: "/partners/new",
      name: "Create",
      component: PartnerForm
    },
    {
      path: "/partners/relocate",
      name: "RelocationAnnoucement",
      component: RelocationAnnouncementForm
    },
    {
      path: "/extranet/activities",
      name: "ActivityList",
      component: GmNetActivities
    },
    {
      path: "/extranet/activities/:activityId",
      name: "Activity",
      component: GmNetActivity
    },

    // CRM
    {
      path: "/crm/home",
      name: "CrmHome",
      component: CRMHome
    },
    {
      path: "/crm/cases",
      name: "CRMCases",
      component: CRMCases
    },
    {
      path: "/crm/cases/:caseId",
      name: "CRMCase",
      component: CRMCase
    },
    {
      path: "/crm/documents",
      name: "CRMDocument",
      component: CRMDocuments
    },
    {
      path: "/crm/documents/:documentId",
      name: "DocumentInfos",
      component: CRMDocument
    },
    {
      path: "/crm/partners",
      name: "CRMPartners",
      component: CRMPartners
    },
    {
      path: "/crm/partners/:partnerId",
      name: "PartnerInfos",
      component: CRMPartner
    },
    {
      path: "/crm/partners/:partnerId/cases",
      name: "PartnerCases",
      component: CRMCases
    },
    {
      path: "/crm/partners/:partnerId/cases/:caseId",
      name: "PartnerCase",
      component: CRMCase
    },
    {
      path: "/crm/partners/:partnerId/documents",
      name: "PartnerDocuments",
      component: CRMDocuments
    },
    {
      path: "/crm/partners/:partnerId/documents/:documentId",
      name: "PartnerDocument",
      component: CRMDocument
    },
    {
      path: "/crm/infos",
      name: "CrmInfos",
      component: CRMInfos
    },

    // DMS
    {
      path: "/dms/home",
      name: "DMSHome",
      component: DMSHome
    },
    {
      path: "/dms/documents",
      name: "DMSDocuments",
      component: Fallback
    },

    // EDG
    {
      path: "/edg/home",
      name: "EDGHome",
      component: EdgHome
    },
    {
      path: "/edg/templates",
      name: "EDGTemplates",
      component: Fallback
    },
    {
      path: "/edg/compositions",
      name: "EDGCompositions",
      component: Fallback
    },

    // Extranet
    {
      path: "/extranet/home",
      name: "ExtranetHome",
      component: ExtranetHome
    },
    {
      path: "/extranet/documents",
      name: "ExtranetDocuments",
      component: Fallback
    },
    {
      path: "/extranet/activities",
      name: "ExtranetActivities",
      component: Fallback
    },
    {
      path: "/extranet/me",
      name: "ExtranetProfile",
      component: Fallback
    },

    // Notification center
    {
      path: "/notification-center/home",
      name: "NotificationCenterHome",
      component: NotificationCenterHome
    },
    {
      path: "/notification-center/notifications",
      name: "NotificationCenterNotifications",
      component: Fallback
    },

    // Partners
    {
      path: "/partners/home",
      name: "PartnersHome",
      component: PartnersHome
    },
    {
      path: "/partners/addresses",
      name: "PartnersAddressManager",
      component: PartnersAddressManagerHome
    },

    // PrintingMgr
    {
      path: "/printing-manager/home",
      name: "PringingManagerHome",
      component: PrintingMgrHome
    },
    {
      path: "/printing-manager/documents",
      name: "PringingManagerDocuments",
      component: Fallback
    },
    {
      path: "/printing-manager/request",
      name: "PringingManagerRequest",
      component: PrintingRequestManager
    },

    // Sending manager
    {
      path: "/sending-manager/home",
      name: "SendingMgrHome",
      component: SendingManagerHome
    },
    {
      path: "/sending-manager/outputs",
      name: "SendingMgrOutputs",
      component: Fallback
    },

    // Tracking
    {
      path: "/tracking/home",
      name: "TrackingSystemHome",
      component: TrackingSystemHome
    },
    {
      path: "/tracking/activities",
      name: "TrackingSystemActivities",
      component: Fallback
    },
    {
      path: "/tracking/alerts",
      name: "TrackingSystemAlerts",
      component: Fallback
    },

    // Utils
    {
      path: "/utils/home",
      name: "UtilsHome",
      component: Fallback
    }
  ]
});
