<template>
  <div>
    <ActivityDetail />
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
import ActivityDetail from "@/components/ActivityDetail";
export default {
  name: "GmNetActivity",
  components: {
    ActivityDetail,
  },
};
</script>