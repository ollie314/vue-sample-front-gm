<template>
  <div>
    <PartnerList />
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
import PartnerList from "@/components/PartnerList";
export default {
  name: "PartnerHome",
  components: {
    PartnerList,
  },
};
</script>