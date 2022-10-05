export type AudioInfo = {
  id: number;
  title: string;
  countView: number;
  countPlay: number;
  countSend: number;
  countOrder: number;
  countPay: number;
  viewSend: number;
  viewPay: number;
  children: AudioInfo[];
};

export type SortableFields = keyof Pick<
  AudioInfo,
  | "countOrder"
  | "countPlay"
  | "countPay"
  | "countSend"
  | "countView"
  | "viewPay"
  | "viewSend"
>;

export type SortOrder = "asc" | "desc" | "none";
