<template>
  <tfoot>
    <tr>
      <th>Итого</th>
      <th>{{ totalViews }}</th>
      <th>{{ totalPlays }}</th>
      <th>{{ totalSends }}</th>
      <th>{{ totalOrders }}</th>
      <th>{{ totalPays }}</th>
      <th>{{ totalViewSendRatio }}</th>
      <th>{{ totalViewPayRatio }}</th>
    </tr>
  </tfoot>
</template>

<script setup lang="ts">
import { computed, toRefs } from "vue";
import { calcAverage, calcTotal } from "../utils.js";
import { AudioInfo } from "../AudioInfo";

type Props = {
  data: AudioInfo[];
};

const props = defineProps<Props>();

const { data } = toRefs(props);

const totalViews = computed(calcTotal("countView", data));
const totalPlays = computed(calcTotal("countPlay", data));
const totalSends = computed(calcTotal("countSend", data));
const totalOrders = computed(calcTotal("countOrder", data));
const totalPays = computed(calcTotal("countPay", data));
const totalViewSendRatio = computed(calcAverage("viewSend", data));
const totalViewPayRatio = computed(calcAverage("viewPay", data));
</script>

<style scoped>
tfoot {
  @apply bg-gray-200;
}

th {
  @apply font-normal text-left p-4 font-medium;
}
</style>