<template>
  <span>
    <EyeIcon />
    /
    <CardIcon />
  </span>
</template>

<style scoped>
span {
  display: flex;
}
</style>
<script>
import ArrowUpSquareIcon from "./ArrowUpSquareIcon.vue";
import EyeIcon from "./EyeIcon.vue";
import CardIcon from "./CardIcon.vue";

export default {
  components: { CardIcon, EyeIcon, ArrowUpSquareIcon },
};
</script>