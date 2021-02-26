<template>
  <div>
    <md-card>
      <md-card-header>
        <div class="md-title">Relocation announcement</div>
      </md-card-header>

      <md-card-content>
        <md-field>
          <label>Insured ID</label>
          <md-input v-model="insuredId"></md-input>
        </md-field>
        <AddressForm title="Old Address" />
        <AddressForm title="new Address" />
      </md-card-content>

      <md-card-actions>
        <md-button v-on:click="increment">Cancel</md-button>
        <md-button v-on:click="sendIncrement">Submit</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<style lang="scss" scoped>
.md-card {
  width: 90vw;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>

<script>
import AddressForm from "@/components/AddressForm";

export default {
  name: "GmNetRelocation",
  components: {
    AddressForm,
  },
  data() {
    return {
      loading: false,
      insuredId: "aa7e2f83-7c8f-482f-83da-4ab70c47f7d7",
    };
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    sendIncrement() {
      this.$store.dispatch("increment", { ts: Date.now() });
    },
  },
  computed: {
    counter() {
      return this.$store.getters.counter;
    },
  },
};
</script>