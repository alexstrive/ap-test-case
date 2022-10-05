<template>
  <table>
    <TableHeader @sort-change="handleSortChange($event)" />
    <tbody>
      <TableRow
        v-for="tableRow in processedData"
        :key="tableRow.id"
        :row-data="tableRow"
      />
    </tbody>
    <TableFooter :data="tableData" />
  </table>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import TableRow from "./TableRow.vue";
import TableHeader from "./TableHeader.vue";
import TableFooter from "./TableFooter.vue";
import { AudioInfo, SortableFields, SortOrder } from "../AudioInfo";
import { sortComparator } from "../utils";

const tableData = ref([]);

onMounted(async () => {
  const response = await fetch("http://127.0.0.1:3000");
  tableData.value = (await response.json()).items;
});

const sortTableField = ref<SortableFields>("countView");
const sortTableOrder = ref<SortOrder>("desc");

const processedData = computed(() => sortRecords([...tableData.value]));

function sortRecords(data: AudioInfo[]) {
  if (!data) {
    return;
  }

  for (const record of data) {
    sortRecords(record.children);
  }

  return data.sort(sortComparator(sortTableOrder.value, sortTableField.value));
}

function handleSortChange([fieldName, sortOrder]: [SortableFields, SortOrder]) {
  sortTableField.value = fieldName;
  sortTableOrder.value = sortOrder;
}
</script>

<style scoped>
table {
  min-width: 1000px;
  width: 100vw;
}
</style>