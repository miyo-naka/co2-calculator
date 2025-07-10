import { Question } from "@/types/Question";

export const questions: Question[] = [
  {
    id: "u0",
    type: "choice",
    category: "utilities",
    title: "電気の使用量は分かりますか？",
    options: [
      { label: "分かる（入力する）", value: "known" },
      { label: "分からない（平均値を使う）", value: "unknown" },
    ],
  },
  {
    id: "u1",
    category: "utilities",
    title: "月の電気使用量は？",
    type: "input",
    unit: "kWh",
    factor: 0.43,
  },
  {
    id: "u2",
    category: "utilities",
    title: "月のガス使用量は？",
    type: "input",
    unit: "m³",
    factor: 2.23,
  },
  {
    id: "u3",
    category: "utilities",
    title: "月の水道使用量は？",
    type: "input",
    unit: "m³",
    factor: 0.23,
  },
  {
    id: "u4",
    category: "utilities",
    title: "家族構成は？",
    type: "choice",
    options: [
      { label: "1〜2人", value: "1-2" },
      { label: "3人以上", value: "3+" },
    ],
  },
  {
    id: "u5",
    category: "utilities",
    title: "家のタイプは？",
    type: "choice",
    options: [
      { label: "アパート・マンション", value: "apartment" },
      { label: "戸建て", value: "house" },
    ],
  },

  {
    id: "t1",
    category: "transport",
    title: "月の車の走行距離は？",
    type: "input",
    unit: "km",
    factor: 0.19,
  },
  {
    id: "t2",
    category: "transport",
    title: "平日の公共交通の利用頻度は？",
    type: "choice",
    options: [
      { label: "週5回", value: "5", co2Factor: 18 },
      { label: "週3〜4回", value: "3-4", co2Factor: 12.6 },
      { label: "月1〜2回", value: "1-2", co2Factor: 1.8 },
      { label: "ほとんどしない", value: "0", co2Factor: 0 },
    ],
  },
  {
    id: "t3",
    category: "transport",
    title: "休日の外出頻度は？",
    type: "choice",
    options: [
      { label: "毎週出かける", value: "weekly", co2Factor: 7.2 },
      { label: "月1〜2回", value: "monthly", co2Factor: 1.8 },
      { label: "ほとんど出かけない", value: "none", co2Factor: 0 },
    ],
  },

  {
    id: "f1",
    category: "food",
    title: "肉を食べる頻度は？",
    type: "choice",
    options: [
      { label: "毎日食べる", value: "毎日食べる", co2Factor: 15 },
      { label: "週3〜4回", value: "週3〜4回", co2Factor: 10 },
      { label: "月1〜2回", value: "月1〜2回", co2Factor: 5 },
      { label: "ほとんど食べない", value: "ほとんど食べない", co2Factor: 1 },
    ],
  },
  {
    id: "f2",
    category: "food",
    title: "外食の頻度は？",
    type: "choice",
    options: [
      { label: "ほとんどしない", value: "ほとんどしない", co2Factor: 1 },
      { label: "週1回", value: "週1回", co2Factor: 5 },
      { label: "週3回", value: "週3回", co2Factor: 12 },
      { label: "毎日", value: "毎日", co2Factor: 20 },
    ],
  },
];
