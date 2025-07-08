import { Answer } from "@/types/Answer";
import { Question } from "@/types/Question";

export default function ResultView({
  totalCO2,
  answers,
  questions,
}: {
  totalCO2: number;
  answers: Answer[];
  questions: Question[];
}) {
  return (
    <div className="text-center space-y-4 p-8">
      <h2 className="text-4xl font-extrabold text-green-700 mb-4">
        結果発表！
      </h2>
      <p className="text-xl text-gray-700">あなた家庭のCO₂排出量は...</p>
      <div className="text-5xl font-extrabold text-green-800 bg-green-100 py-6 px-8 rounded-2xl shadow-inner">
        {totalCO2.toFixed(2)} kg
      </div>
      <p className="text-sm text-gray-500 mt-2">
        ※ 1ヶ月あたりのざっくり推定値です
      </p>

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
    </div>
  );
}
