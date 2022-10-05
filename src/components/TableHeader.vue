<template>
  <thead>
    <tr>
      <th>Категория</th>
      <TableHeaderCell
        v-for="cellName in headerCellNames"
        :sort-order="cellName === sortTableField ? sortTableOrder : 'none'"
        :sortable-field-name="cellName"
        @sort-change="handleSortChange($event)"
      />
    </tr>
  </thead>
</template>

<style scoped>
th {
  @apply text-left font-medium p-4 text-slate-600;
}

th div {
  display: flex;
}
</style>
<script setup lang="ts">
import TableHeaderCell from "./TableHeaderCell.vue";
import { SortableFields, SortOrder } from "../AudioInfo";
import { ref } from "vue";

const headerCellNames: SortableFields[] = [
  "countView",
  "countPlay",
  "countSend",
  "countOrder",
  "countPay",
  "viewSend",
  "viewPay",
];

const sortTableField = ref<SortableFields>("countView");
const sortTableOrder = ref<SortOrder>("desc");

const emit = defineEmits(["sortChange"]);

function handleSortChange([fieldName, sortOrder]: [SortableFields, SortOrder]) {
  sortTableField.value = fieldName;
  sortTableOrder.value = sortOrder;
  emit("sortChange", [fieldName, sortOrder]);
}
</script>