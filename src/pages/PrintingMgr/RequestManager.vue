<template>
  <div>
    <DsTable v-bind:datasource="requests" title="Printing request" />
  </div>
</template>

<script>
import DsTable from "@/components/Tables/DsTable";
export default {
  name: "PrintingRequestManager",
  components: {
    DsTable,
  },
  data: () => ({
    requests: [
      {
        id: "03b59e85-77b1-4531-b120-55291a06699f",
        insured: "4f035804-6035-4b0f-8540-52836c5c382e",
        email: "insureds-4f035804-6035-4b0f-8540-52836c5c382e@gm.io",
        docId: "f1524c37-5c2b-42ff-bcd7-0a6a01d2eb12",
        //path: "s3://2021/02/28/printings/communications/outputs/f1524c37-5c2b-42ff-bcd7-0a6a01d2eb12.pdf",
        title: "Renew contract",
      },
    ],
  }),
};
</script>