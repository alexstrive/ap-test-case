<template>
  <th>
    <div @click="invokeSort()" style="display: flex">
      <component :is="iconSet[sortableFieldName]" />
      <template v-if="sortOrder === 'desc'">
        <ArrowDownIcon />
      </template>
      <template v-else-if="sortOrder === 'asc'">
        <ArrowUpIcon />
      </template>
    </div>
  </th>
</template>

<script setup lang="ts">
import EyeIcon from "./icons/EyeIcon.vue";
import PlayIcon from "./icons/PlayIcon.vue";
import ArrowUpCircleIcon from "./icons/ArrowUpCircleIcon.vue";
import ArrowUpSquareIcon from "./icons/ArrowUpSquareIcon.vue";
import CardIcon from "./icons/CardIcon.vue";
import ViewPayRatioIcon from "./icons/ViewPayRatioIcon.vue";
import ViewSendRatioIcon from "./icons/ViewSendRatioIcon.vue";
import ArrowDownIcon from "./icons/ArrowDownIcon.vue";
import ArrowUpIcon from "./icons/ArrowUpIcon.vue";
import { toRefs } from "vue";
import { SortableFields, SortOrder } from "../AudioInfo";

const emit = defineEmits(["sortChange"]);

function invokeSort() {
  if (sortOrder.value === "desc") {
    emit("sortChange", [props.sortableFieldName, "asc"]);
  } else {
    emit("sortChange", [props.sortableFieldName, "desc"]);
  }
}

type Props = {
  sortableFieldName: SortableFields;
  sortOrder: SortOrder;
};

const iconSet: { [K in SortableFields]: { name?: string; components?: any } } =
  {
    countView: EyeIcon,
    countOrder: ArrowUpSquareIcon,
    countPay: CardIcon,
    countPlay: PlayIcon,
    countSend: ArrowUpCircleIcon,
    viewPay: ViewPayRatioIcon,
    viewSend: ViewSendRatioIcon,
  };

const props = defineProps<Props>();
const { sortOrder } = toRefs(props);
</script>

<style scoped>
div {
  cursor: pointer;
}
</style>