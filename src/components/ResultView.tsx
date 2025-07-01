import { Question } from "@/types/Question";

export default function ResultView({
  answers,
  questions,
}: {
  answers: string[];
  questions: Question[];
}) {
  return (
    <div className="text-center space-y-4">
      <h2 className="text-2xl font-bold">ご協力ありがとうございます！</h2>
      <p className="text-gray-700">あなたの回答:</p>
      <ul className="list-disc list-inside text-left inline-block">
        {answers.map((answer, index) => (
          <li key={index}>
            {questions[index].title}：{answer}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-green-700">
        ※ここにCO₂排出量を計算して表示予定です。
      </p>
    </div>
  );
}
