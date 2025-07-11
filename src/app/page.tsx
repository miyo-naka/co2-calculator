"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import QuestionCard from "@/components/QuestionCard";
import ResultView from "@/components/ResultView";
import { questions } from "@/const/questions";
import { calculateCO2 } from "@/utils/calculateCO2";
import { Answer } from "@/types/Answer";
import { getAverageValues } from "@/const/getAverageValues";

export default function Home() {
  const [step, setStep] = useState<"start" | "question" | "result">("start");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [familyType, setFamilyType] = useState<string | null>(null);

  const handleStart = () => {
    setStep("question");
  };

  const handleAnswer = (selectedValue: string | string[]) => {
    const currentQuestion = questions[questionIndex];
    setAnswers((prev) => [
      ...prev,
      { questionId: currentQuestion.id, selectedValue },
    ]);

    if (currentQuestion.id === "u0") {
      if (selectedValue === "known") {
        setQuestionIndex((prev) => prev + 1);
        return;
      } else {
        setQuestionIndex((prev) => prev + 4); // u4へスキップ
        return;
      }
    }
    if (currentQuestion.id === "u3") {
      setQuestionIndex(questions.findIndex((q) => q.id === "t1"));
      return;
    }
    if (currentQuestion.id === "u4") {
      setFamilyType(selectedValue as string);
      setQuestionIndex((prev) => prev + 1); // u5へ
      return;
    }
    if (currentQuestion.id === "u5") {
      const house = selectedValue as string;

      const averages = getAverageValues(familyType as string, house as string);

      setAnswers((prev) => [
        ...prev,
        { questionId: "u1", selectedValue: averages.electric.toString() },
        { questionId: "u2", selectedValue: averages.gas.toString() },
        { questionId: "u3", selectedValue: averages.water.toString() },
      ]);

      // u1,u2,u3はスキップ → 次の非光熱系の質問へ
      setQuestionIndex((prev) => prev + 1);
      return;
    }

    // 通常の質問へ
    if (questionIndex + 1 < questions.length) {
      setQuestionIndex((prev) => prev + 1);
    } else {
      setStep("result");
    }
  };

  const totalCO2 = calculateCO2(answers, questions);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 p-4 sm:p-8 mx-2 rounded-3xl shadow-xl sm:max-w-3xl  text-center"
      >
        {step === "start" && (
          <>
            <h1 className="text-2xl sm:text-3xl text-gray-700 font-bold mb-4">
              家庭のCO₂排出計算
            </h1>
            <p className="text-gray-600 mb-6">
              生活スタイルに応じたCO₂排出量を簡単に見積もろう。
            </p>
            <button
              onClick={handleStart}
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition"
            >
              はじめる →
            </button>
          </>
        )}

        {step === "question" && (
          <QuestionCard
            question={questions[questionIndex]}
            onSelect={handleAnswer}
          />
        )}

        {step === "result" && (
          <ResultView
            totalCO2={totalCO2}
            answers={answers}
            questions={questions}
          />
        )}
      </motion.div>
    </main>
  );
}
