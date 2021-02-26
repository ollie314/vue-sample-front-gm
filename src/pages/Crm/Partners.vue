<template>
  <div>
    <md-card>
      <md-card-header>
        <div class="md-title">Partners</div>
      </md-card-header>

      <md-card-content>
        <md-table>
          <md-table-row>
            <md-table-head>Name</md-table-head>
            <md-table-head>Email</md-table-head>
            <md-table-head>Action</md-table-head>
          </md-table-row>
          <md-table-row v-for="partner in crmPartners" v-bind:key="partner.id">
            <md-table-cell>{{ partner.name }}</md-table-cell>
            <md-table-cell>{{ partner.email }}</md-table-cell>
            <md-table-cell>
              <md-button
                v-bind:to="`/crm/partners/${partner.id}`"
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
  name: "CrmPartners",
  data: () => ({}),
  computed: {
    crmPartners() {
      return this.$store.state.crm.partners.partners.partners.map(
        ({ id, firstname, lastname, email }) => ({
          id,
          name: `${firstname} ${lastname}`,
          email,
        })
      );
    },
  },
};
</script>