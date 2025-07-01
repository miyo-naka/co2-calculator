"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import QuestionCard from "@/components/QuestionCard";
import ResultView from "@/components/ResultView";
import { questions } from "@/const/questions";

export default function Home() {
  const [step, setStep] = useState<"start" | "question" | "result">("start");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleStart = () => {
    setStep("question");
  };

  const handleAnswer = (value: string) => {
    const nextAnswers = [...answers, value];
    setAnswers(nextAnswers);
    if (questionIndex + 1 < questions.length) {
      setQuestionIndex((prev) => prev + 1);
    } else {
      setStep("result");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky via-white to-sky-200 flex items-center justify-center">
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
            title={questions[questionIndex].title}
            options={questions[questionIndex].options}
            onSelect={handleAnswer}
          />
        )}
        {step === "result" && (
          <ResultView answers={answers} questions={questions} />
        )}
      </motion.div>
    </main>
  );
}
