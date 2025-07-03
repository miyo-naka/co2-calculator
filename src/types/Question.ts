export type Question = {
  id: string; // 識別用
  category: "utilities" | "transport" | "food";
  title: string;
  type: "choice" | "multi" | "input";
  options?: {
    label: string;
    value: string;
    co2Factor?: number;
    score?: number;
  }[];
  unit?: string;
  factor?: number;
};
