<template>
  <div>
    <md-card>
      <md-card-header>
        <div class="md-title">Open</div>
      </md-card-header>

      <md-card-content> Test {{ counter }}</md-card-content>

      <md-card-actions>
        <md-button v-on:click="increment">Increment</md-button>
        <md-button v-on:click="sendIncrement">Submit</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<style lang="scss" scoped>
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>

<script>
export default {
  name: "Home",
  data() {
    return {
      loading: false,
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