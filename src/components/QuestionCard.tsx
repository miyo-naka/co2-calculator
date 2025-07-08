import { Question } from "@/types/Question";
import { useEffect, useState } from "react";

type QuestionCardProps = {
  question: Question;
  onSelect: (value: string | string[]) => void;
};

export default function QuestionCard({
  question,
  onSelect,
}: QuestionCardProps) {
  const [inputValue, setInputValue] = useState("");
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const toggleSelection = (value: string) => {
    setSelectedValues((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleInputSubmit = () => {
    if (question.type === "multi") {
      onSelect(selectedValues);
    } else {
      onSelect(inputValue);
    }
  };

  useEffect(() => {
    if (question.type === "multi") {
      setSelectedValues([]);
    }
    if (question.type === "input") {
      setInputValue("");
    }
  }, [question.id, question.type]);

  return (
    <div className="bg-white p-10 rounded-2xl shadow-xl text-center space-y-4">
      <h2 className="text-xl font-bold">{question.title}</h2>
      {question.type === "input" && (
        <div className="space-y-4">
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={`数値を入力 (${question.unit})`}
            className="border p-2 rounded"
          />
          <button
            onClick={handleInputSubmit}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 ml-2 rounded-full"
          >
            決定
          </button>
        </div>
      )}

      {question.type === "choice" && question.options && (
        <div className="flex flex-wrap justify-center gap-4">
          {question.options.map((option) => (
            <button
              key={option.value}
              onClick={() => onSelect(option.value)}
              className="bg-green-100 hover:bg-green-300 px-4 py-2 rounded-xl transition"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

      {question.type === "multi" && question.options && (
        <div className="flex flex-wrap justify-center gap-4">
          {question.options.map((option) => (
            <button
              key={option.value}
              onClick={() => toggleSelection(option.value)}
              className={`px-4 py-2 rounded-xl transition ${
                selectedValues.includes(option.value)
                  ? "bg-green-300"
                  : "bg-green-100"
              }`}
            >
              {option.label}
            </button>
          ))}
          <button
            onClick={handleInputSubmit}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full"
          >
            決定
          </button>
        </div>
      )}
    </div>
  );
}
