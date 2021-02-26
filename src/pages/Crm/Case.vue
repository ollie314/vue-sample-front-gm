<template>
  <div>
    <md-card>
      <md-card-header>
        <div class="md-title">Crm Case</div>
        <md-divider></md-divider>
      </md-card-header>

      <md-card-content>
        <div>caseId: {{ caseId }}</div>
        <div>Name: {{ cse.name }}</div>
        <div>Name: {{ toDate(cse.date) }}</div>
        <div>Status: {{ toStatusString(cse.status) }}</div>
      </md-card-content>
      <md-card-actions>
        <md-button to="/crm/cases">Back to list</md-button>
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
import { toDate, toStatusString } from "@/apps/crm/domain/utils";

export default {
  name: "CrmCase",
  data() {
    return {};
  },
  mounted() {
    this.$store.commit("setCurrentCase", this.$route.params.caseId);
    this.$store.dispatch("loadCase");
  },
  computed: {
    caseId() {
      return this.$route.params.caseId;
    },
    cse() {
      return this.$store.state.crm.cases.currentCase;
    },
  },
  methods: {
    toDate(d) {
      return toDate(d);
    },
    toStatusString(s) {
      return toStatusString(s);
    },
  },
};
</script>