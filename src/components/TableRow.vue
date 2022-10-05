<template>
  <tr class="table-row">
    <td class="audio_title" :style="titleDataStyle" @click="switchCollapse()">
      <span
        v-if="rowData.children"
        style="padding-left: 30px; margin-right: 5px"
      >
        <ChevronRight v-if="isCollapsed" />
        <ChevronDown v-else-if="!isCollapsed" />
      </span>
      <span v-else style="margin-right: 50px" />

      {{ rowData.title }}
    </td>
    <td>{{ rowData.countView }}</td>
    <td>{{ rowData.countPlay }}</td>
    <td>{{ rowData.countSend }}</td>
    <td>{{ rowData.countOrder }}</td>
    <td>{{ rowData.countPay }}</td>
    <td>{{ rowData.viewSend }}</td>
    <td>{{ rowData.viewPay }}</td>
  </tr>
  <template v-if="!isCollapsed">
    <TableRow
      v-if="rowData.children"
      v-for="rowChildData in rowData.children"
      :row-data="rowChildData"
      :nest-level="nestLevel + 1"
      :key="rowChildData.id"
    />
  </template>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { AudioInfo } from "../AudioInfo";
import ChevronRight from "./icons/ChevronRight.vue";
import ChevronDown from "./icons/ChevronDown.vue";

type Props = {
  rowData: AudioInfo;
  nestLevel?: number;
};

const props = withDefaults(defineProps<Props>(), {
  nestLevel: 0,
});

const isCollapsed = ref(true);
const containsChildren = Boolean(props.rowData.children);
const titleDataStyle = reactive({
  paddingLeft: `${props.nestLevel * 35}px`,
  cursor: containsChildren ? "pointer" : "default",
});

function switchCollapse() {
  if (props.rowData.children) {
    isCollapsed.value = !isCollapsed.value;
  }
}
</script>

<style scoped>
.audio_title {
  display: flex;
}

tr {
  @apply transition-colors border-b-2;
}

tr:first-child {
  @apply border-t-2;
}

td {
  @apply p-4;
}

tr:hover {
  @apply bg-gray-100;
}
</style>