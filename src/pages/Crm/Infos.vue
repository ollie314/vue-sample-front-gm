<template>
  <div>
    <md-card>
      <md-card-header>
        <div class="md-title">Infos</div>
      </md-card-header>

      <md-card-content>
        <span class="md-body-1"
          >The intent of this module is only to show partner's activity and some
          other acitivies made through the CRM software (which is a fake
          actually).</span
        >
        <md-divider></md-divider>
        <span class="md-body-1">
          Here we are only viewing information. If a websocket is available, the
          system will automatically receive notification from the remote
          endpoint but this feature is not implemented for now.
        </span>
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
  name: "CrmInfos",
};
</script>