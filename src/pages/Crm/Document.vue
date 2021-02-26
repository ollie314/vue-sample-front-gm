<template>
  <div>
    <md-card>
      <md-card-header>
        <div class="md-title">Document</div>
      </md-card-header>

      <md-card-content>
        <div>name: {{ document.name }}</div>
        <div>Category: {{ document.metas.cat }}</div>
        <div>Sub category: {{ document.metas.subcat }}</div>
        <div>Partner: {{ document.partner.name }}</div>
      </md-card-content>
      <md-card-actions>
        <md-button to="/crm/documents">Back to list</md-button>
      </md-card-actions>
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
  name: "CrmDocument",
  data: () => ({}),
  mounted() {
    this.$store.commit("setCurrentDocumentId", this.$route.params.DocumentId);
    this.$store.dispatch("loadDocument");
  },
  computed: {
    documentId() {
      return this.$route.params.documentId;
    },
    document() {
      return this.$store.state.crm.documents.currentDocument;
    },
  },
};
</script>