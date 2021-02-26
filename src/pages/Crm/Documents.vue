<template>
  <div>
    <md-card>
      <md-card-header>
        <div class="md-title">Documents</div>
      </md-card-header>

      <md-card-content>
        <md-table>
          <md-table-row>
            <md-table-head>Date</md-table-head>
            <md-table-head>Name</md-table-head>
            <md-table-head>Issuer Name</md-table-head>
            <md-table-head>Partner Name</md-table-head>
            <md-table-head>Action</md-table-head>
          </md-table-row>
          <md-table-row v-for="doc in crmDocuments" v-bind:key="doc.id">
            <md-table-cell>{{ doc.name }}</md-table-cell>
            <md-table-cell>{{ doc.cat }}</md-table-cell>
            <md-table-cell>{{ doc.subcat }}</md-table-cell>
            <md-table-cell>{{ doc.partnerName }}</md-table-cell>
            <md-table-cell>
              <md-button
                v-bind:to="`/crm/documents/${doc.id}`"
                class="md-primary"
                >Show</md-button
              >
            </md-table-cell>
          </md-table-row>
        </md-table>
      </md-card-content>
    </md-card>
  </div>
</template>

<style lang="scss" scoped>
.md-card {
  width: 100%;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>

<script>
export default {
  name: "CrmDocuments",
  data: () => ({}),
  computed: {
    crmDocuments() {
      return this.$store.state.crm.documents.documents.documents.map(
        ({
          id,
          name,
          metas: { cat, subcat },
          partner: { name: partnerName },
        }) => ({
          id,
          name,
          cat,
          subcat,
          partnerName,
        })
      );
    },
  },
};
</script>