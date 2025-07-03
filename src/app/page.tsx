"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import QuestionCard from "@/components/QuestionCard";
import ResultView from "@/components/ResultView";
import { questions } from "@/const/questions";
import { calculateCO2 } from "@/utils/calculateCO2";
import { Answer } from "@/types/Answer";

export default function Home() {
  const [step, setStep] = useState<"start" | "question" | "result">("start");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const handleStart = () => {
    setStep("question");
  };

  const handleAnswer = (selectedValue: string | string[]) => {
    const currentQuestion = questions[questionIndex];
    setAnswers((prev) => [
      ...prev,
      { questionId: currentQuestion.id, selectedValue },
    ]);
    if (questionIndex + 1 < questions.length) {
      setQuestionIndex((prev) => prev + 1);
    } else {
      setStep("result");
    }
  };

  const totalCO2 = calculateCO2(answers, questions);

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky via-white to-sky-200 flex items-center justify-center">
      {/* <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-10 left-10 w-60 opacity-20"
      >
        <Image
          src="/bg.svg"
          alt="bg"
          width={480}
          height={480}
          // fill
          className="object-contain"
        />
      </motion.div> */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 p-8 rounded-3xl shadow-xl max-w-3xl text-center"
      >
        {step === "start" && (
          <>
            <h1 className="text-3xl text-gray-700 font-bold mb-4">
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
