<template>
  <div>
    <md-subheader>{{ title }}</md-subheader>
    <md-field>
      <label>Number</label>
      <md-input v-model="nb"></md-input>
    </md-field>
    <md-field>
      <label>Street</label>
      <md-input v-model="street"></md-input>
    </md-field>
    <md-field>
      <label>Zip</label>
      <md-input v-model="zip"></md-input>
    </md-field>
    <md-field>
      <label>City</label>
      <md-input v-model="city"></md-input>
    </md-field>
    <md-field>
      <label>State</label>
      <md-input v-model="state"></md-input>
    </md-field>
    <md-field>
      <label>Country</label>
      <md-input v-model="country"></md-input>
    </md-field>
  </div>
</template>

<script>
export default {
  name: "AddressForm",
  props: ["title"],
  data: () => ({
    nb: "42",
    street: "rue des mesanges",
    zip: "1920",
    city: "Martigny",
    state: "VS",
    country: "CH",
  }),
};
</script>