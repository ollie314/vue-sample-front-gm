<template>
  <div>
    <md-tab
      v-for="tab in tabs"
      v-bind:key="tab.id"
      v-bind:id="tab.id"
      v-bind:to="tab.uri"
      v-bind:md-label="tab.label"
    ></md-tab>
  </div>
</template>

<script>
export default {
  name: "RoutableTab",
  props: ["tabs"],
  data: () => ({}),
};
</script>
