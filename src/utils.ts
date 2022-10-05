import { AudioInfo, SortableFields, SortOrder } from "./AudioInfo";
import { Ref } from "vue";

type KeyOfType<T, V> = keyof {
  [P in keyof T as T[P] extends V ? P : never]: any;
};

export const calcTotal =
  (fieldName: KeyOfType<AudioInfo, number>, data: Ref<AudioInfo[]>) =>
  (): number => {
    return data.value.reduce(
      (acc: number, tableRowData: AudioInfo) => acc + tableRowData[fieldName],
      0
    );
  };

export const calcAverage =
  (fieldName: KeyOfType<AudioInfo, number>, data: Ref<AudioInfo[]>) =>
  (): string => {
    const totalByField = calcTotal(fieldName, data)();
    const recordsNumber = data.value.length;

    return !totalByField
      ? "0%"
      : `${(totalByField / recordsNumber).toFixed(2)}%`;
  };

export const sortComparator =
  (sortOrder: SortOrder, fieldName: SortableFields) =>
  (a: AudioInfo, b: AudioInfo) => {
    if (sortOrder === "asc") {
      return a[fieldName] - b[fieldName];
    } else {
      return b[fieldName] - a[fieldName];
    }
  };
