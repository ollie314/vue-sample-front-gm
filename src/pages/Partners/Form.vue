<template>
  <div>
    <md-card>
      <md-card-header>
        <div class="md-title">Partner</div>
      </md-card-header>

      <md-card-content>
        <PartnerForm />
      </md-card-content>

      <md-card-actions>
        <md-button>Save</md-button>
        <md-button>Cancel</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<style lang="scss" scoped>
.md-card {
  width: 95vw;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>

<script>
import PartnerForm from "@/components/Partner";
export default {
  name: "PartnerForm",
  components: {
    PartnerForm,
  },
};
</script>