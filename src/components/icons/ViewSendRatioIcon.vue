<template>
  <span>
    <EyeIcon />
    /
    <ArrowUpSquareIcon />
  </span>
</template>

<script>
import ArrowUpSquareIcon from "./ArrowUpSquareIcon.vue";
import EyeIcon from "./EyeIcon.vue";

export default {
  name: "ViewSendRatioIcon",
  components: { EyeIcon, ArrowUpSquareIcon },
};
</script>

<style scoped>
span {
  display: flex;
}
</style>