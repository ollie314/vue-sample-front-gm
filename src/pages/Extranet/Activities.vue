<template>
  <div>
    <ActivityList />
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
import ActivityList from "@/components/ActivityList";
export default {
  name: "GmNetActivity",
  components: {
    ActivityList,
  },
};
</script>