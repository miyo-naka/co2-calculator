import { Question } from "@/types/Question";

export const questions: Question[] = [
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

  // {
  //   id: "housingType",
  //   category: "utilities",
  //   title: "お住まいのタイプは？",
  //   type
  //   options: [
  //     { label: "一軒家", value: "house" },
  //     { label: "アパート", value: "apartment" },
  //     { label: "その他", value: "other" },
  //   ],
  // },
  // {
  //   id: "familySize",
  //   category: "utilities",
  //   title: "家族の人数は？",
  //   options: [
  //     { label: "1人", value: "1", co2Factor: 1 },
  //     { label: "2人", value: "2", co2Factor: 0.8 },
  //     { label: "3人", value: "3", co2Factor: 0.7 },
  //     { label: "4人以上", value: "4", co2Factor: 0.6 },
  //   ],
  // },

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
    title: "月の公共交通の利用距離は？",
    type: "input",
    unit: "km",
    factor: 0.03,
  },

  {
    id: "f1",
    category: "food",
    title: "肉を食べる頻度は？",
    type: "choice",
    options: [
      { label: "毎日食べる", value: "毎日食べる", score: 5 },
      { label: "週3〜4回", value: "週3〜4回", score: 3 },
      { label: "月1〜2回", value: "月1〜2回", score: 1 },
      { label: "ほとんど食べない", value: "ほとんど食べない", score: 0 },
    ],
  },
  {
    id: "f2",
    category: "food",
    title: "外食の頻度は？",
    type: "choice",
    options: [
      { label: "ほとんどしない", value: "ほとんどしない", score: 0 },
      { label: "週1回", value: "週1回", score: 1 },
      { label: "週3回", value: "週3回", score: 3 },
      { label: "毎日", value: "毎日", score: 5 },
    ],
  },
  {
    id: "f3",
    category: "food",
    title: "よく使う調理方法は？",
    type: "multi",
    options: [
      { label: "電子レンジ", value: "電子レンジ", score: 1 },
      { label: "IH調理器", value: "IH調理器", score: 2 },
      { label: "ガスコンロ", value: "ガスコンロ", score: 3 },
      { label: "外食メイン", value: "外食メイン", score: 4 },
    ],
  },
  {
    id: "f4",
    category: "food",
    title: "よく使う調理家電は？",
    type: "multi",
    options: [
      { label: "なし", value: "なし", score: 0 },
      { label: "電子レンジ", value: "電子レンジ", score: 1 },
      { label: "オーブン", value: "オーブン", score: 2 },
      { label: "電気ケトル", value: "電気ケトル", score: 1 },
      { label: "全て使用", value: "全て使用", score: 4 },
    ],
  },
];
