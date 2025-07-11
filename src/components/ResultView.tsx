import { Answer } from "@/types/Answer";
import { Question } from "@/types/Question";
import Link from "next/link";

export default function ResultView({
  totalCO2,
  answers,
  questions,
}: {
  totalCO2: number;
  answers: Answer[];
  questions: Question[];
}) {
  const familyAnswer = answers.find((a) => a.questionId === "u4");
  const familyType = familyAnswer ? familyAnswer.selectedValue : "1-2";
  const averageCO2 = familyType === "3+" ? 450 : 200;

  return (
    <div className="text-center space-y-4 px-4 py-8 sm:p-8">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-green-700 mb-4">
        結果発表！
      </h2>
      <p className="text-xl text-gray-700">あなた家庭のCO₂排出量は...</p>
      <div className="text-3xl sm:text-5xl font-extrabold text-green-800 bg-green-100 py-6 px-4 sm:px-8 rounded-2xl shadow-inner">
        {totalCO2.toFixed(2)} kg
      </div>
      <p className="text-sm text-gray-500">※ 1ヶ月あたりのざっくり推定値です</p>

      <div className="p-4 bg-gray-100 rounded-xl text-center">
        <p className="text-lg font-semibold">全国平均との比較</p>
        <p className="text-base mt-2">
          あなたの排出量は{" "}
          <span className="font-bold text-green-700">
            {totalCO2.toFixed(2)} kgCO₂/月
          </span>{" "}
          です。
        </p>
        <p className="mt-1">
          家族構成（{familyType === "3+" ? "3人以上" : "1〜2人"}
          世帯）の全国平均は
          <span className="font-bold"> {averageCO2} kgCO₂/月</span> です。
        </p>
        <p className="mt-1">
          {totalCO2 > averageCO2 ? (
            <span className="text-red-600 font-semibold">
              平均より多めです。
            </span>
          ) : (
            <span className="text-green-600 font-semibold">
              平均より少なめです！
            </span>
          )}
        </p>
      </div>

      <ul className="list-disc list-inside text-left inline-block">
        {answers.map((answer: Answer, index: number) => {
          const question = questions.find((q) => q.id === answer.questionId);
          const option = question?.options?.find(
            (o) => o.value === answer.selectedValue
          );
          return (
            <li key={index}>
              {question?.title}：{option?.label ?? answer.selectedValue}
              {question?.unit ? ` ${question.unit}` : ""}
            </li>
          );
        })}
      </ul>

      <Link
        href="/explain"
        className="text-2xl font-extrabold text-green-700 bg-green-100 hover:bg-green-200 px-6 py-2 rounded-full shadow transition"
      >
        Next
      </Link>
    </div>
  );
}
