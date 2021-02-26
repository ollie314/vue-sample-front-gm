<template>
  <div>
    <md-card>
      <md-card-header>
        <div class="md-title">Messaging</div>
      </md-card-header>

      <md-card-content>
        This is the content of the messaging process
      </md-card-content>

      <md-card-actions>
        <md-button>Action 1</md-button>
        <md-button>Action 2</md-button>
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
  name: "Messaging",
};
</script>