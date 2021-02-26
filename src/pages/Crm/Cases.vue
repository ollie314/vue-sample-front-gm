<template>
  <div>
    <md-card>
      <md-card-header>
        <div class="md-title">Crm Cases</div>
        <!-- For future implementation -->
        <md-button v-on:click="showMessage()" class="md-fab md-mini md-primary">
          <md-icon>add</md-icon>
        </md-button>
      </md-card-header>

      <md-card-content>
        <md-table>
          <md-table-row>
            <md-table-head>Date</md-table-head>
            <md-table-head>Name</md-table-head>
            <md-table-head>Issuer Name</md-table-head>
            <md-table-head>Partner Name</md-table-head>
            <md-table-head>Status</md-table-head>
            <md-table-head>Action</md-table-head>
          </md-table-row>
          <md-table-row v-for="cse in crmCases" v-bind:key="cse.id">
            <md-table-cell>{{ toDate(cse.date) }}</md-table-cell>
            <md-table-cell>{{ cse.name }}</md-table-cell>
            <md-table-cell>{{ cse.issuerName }}</md-table-cell>
            <md-table-cell>{{ cse.partnerName }}</md-table-cell>
            <md-table-cell>{{ toStatusString(cse.status) }}</md-table-cell>
            <md-table-cell>
              <md-button v-bind:to="`/crm/cases/${cse.id}`" class="md-primary"
                >Show</md-button
              >
            </md-table-cell>
          </md-table-row>
        </md-table>
      </md-card-content>
    </md-card>
    <md-snackbar
      :md-position="position"
      :md-duration="isInfinity ? Infinity : duration"
      :md-active.sync="showSnackBar"
      md-persistent
    >
      <span>{{ snackMessage }}</span>
      <md-button class="md-primary" @click="showSnackbar = false"
        >Request feature</md-button
      >
    </md-snackbar>
  </div>
</template>

<style lang="scss" scoped>
.md-card {
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>

<script>
import { toDate, toStatusString } from "@/apps/crm/domain/utils";

export default {
  name: "CrmCases",
  data: () => {
    return {
      // Snack bar configuration
      showSnackBar: false,
      position: "center",
      duration: 4000,
      isInfinity: false,
      // ------------------------
      snackMessage: "Not available for now",
    };
  },
  computed: {
    crmCases() {
      return this.$store.state.crm.cases.cases.cases.map(
        ({
          id,
          date,
          name,
          issuer: { name: issuerName },
          status,
          partner: { name: partnerName },
        }) => ({
          id,
          date,
          name,
          issuerName,
          status,
          partnerName,
        })
      );
    },
  },
  methods: {
    showMessage() {
      this.showSnackBar = true;
    },
    toDate(d) {
      return toDate(d);
    },
    toStatusString(s) {
      return toStatusString(s);
    },
  },
};
</script>