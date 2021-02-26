<template>
  <div>
    <md-card>
      <md-card-header>
        <div class="md-title">Partner</div>
      </md-card-header>

      <md-card-content>
        <div>Firstname: {{ partner.firstname }}</div>
        <div>Lastname: {{ partner.lastname }}</div>
        <div>Email: {{ partner.email }}</div>
      </md-card-content>
      <md-card-actions>
        <md-button to="/crm/partners">Back to list</md-button>
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
  name: "CrmPartner",
  data: () => ({}),
  mounted() {
    this.$store.commit("setCurrentPartnerId", this.$route.params.partnerId);
    this.$store.dispatch("loadPartner");
  },
  computed: {
    partnerId() {
      return this.$route.params.partnerId;
    },
    partner() {
      return this.$store.state.crm.partners.currentPartner;
    },
  },
};
</script>