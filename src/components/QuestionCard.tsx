import { Question } from "@/types/Question";

type QuestionCardProps = Question & {
  onSelect: (value: string) => void;
};

export default function QuestionCard({
  title,
  options,
  onSelect,
}: QuestionCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl text-center space-y-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onSelect(option)}
            className="bg-green-100 hover:bg-green-300 px-4 py-2 rounded-xl transition"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
