<template>
  <div>
    <md-table v-model="ds" md-card>
      <md-table-toolbar>
        <h1 class="md-title">{{ title }}</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell v-for="k in keys" v-bind:md-label="k" v-bind:key="k">{{
          item[k]
        }}</md-table-cell>
        <md-table-cell md-label="Actions" md-sort-by="title">
          <md-button class="md-accent">Reject</md-button>
          <md-button class="md-primary">Accept</md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "DsTables",
  props: {
    datasource: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  data: () => ({}),
  computed: {
    ds() {
      return this.datasource;
    },
    keys() {
      return Object.keys(this.datasource[0]);
    },
  },
};
</script>