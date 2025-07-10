import { Answer } from "@/types/Answer";
import { Question } from "@/types/Question";

export function calculateCO2(answers: Answer[], questions: Question[]): number {
  let total = 0;

  answers.forEach(({ questionId, selectedValue }) => {
    const question = questions.find((q) => q.id === questionId);

    if (question?.type === "input" && typeof selectedValue === "string") {
      const num = parseFloat(selectedValue);
      if (!isNaN(num) && question.factor) {
        total += num * question.factor;
      }
    }

    if (question?.type === "choice") {
      const selectedOption = question.options?.find(
        (opt) => opt.value === selectedValue
      );
      if (selectedOption?.co2Factor) total += selectedOption.co2Factor;
    }

    // if (question?.type === "multi" && Array.isArray(selectedValue)) {
    //   selectedValue.forEach((val) => {
    //     const opt = question.options?.find((o) => o.value === val);
    //     if (opt?.score) total += opt.score * 10;
    //   });
    // }
  });

  return total;
}
