"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaCheckCircle } from "react-icons/fa";

interface Question {
  id: number;
  question: string;
  options: string[];
}

const questions: Question[] = [
  { id: 1, question: "Who is the leader of the Ninja Turtles?", options: ["Leonardo", "Michelangelo", "Donatello", "Raphael"] },
  { id: 2, question: "Which weapon does Michelangelo primarily use?", options: ["Nunchaku", "Katanas", "Sai", "Bo Staff"] },
  { id: 3, question: "Donatello is skilled in which area?", options: ["Technology", "Martial Arts", "Pizza", "Jokes"] },
  { id: 4, question: "Which turtle is red?", options: ["Raphael", "Michelangelo", "Leonardo", "Donatello"] },
  { id: 5, question: "Leonardo primarily uses which weapon?", options: ["Katanas", "Sai", "Nunchaku", "Bo Staff"] },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (option: string) => {
    setAnswers([...answers, option]);
    // Move to next question or to form if last question
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setCurrent(questions.length); // Show form
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    console.log({ username, email, answers }); // Log submission
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col items-center justify-center p-6">
      {/* Quiz title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-12 drop-shadow-lg">
        Ninja Turtles Quiz
      </h1>

      {!submitted ? (
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-xl bg-gray-900/80 p-6 rounded-xl shadow-2xl"
        >
          {/* Questions section */}
          {current < questions.length ? (
            <>
              <h2 className="text-xl md:text-2xl font-bold mb-6">{questions[current].question}</h2>
              <div className="flex flex-col gap-4">
                {questions[current].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    className="bg-yellow-400 text-black px-4 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </>
          ) : (
            // Form for username and email
            <>
              <h2 className="text-2xl font-bold mb-4">Finalize Quiz</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <FaUser className="text-yellow-400 text-xl" />
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="flex-1 px-4 py-3 rounded-lg font-medium"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-yellow-400 text-xl" />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-4 py-3 rounded-lg font-medium"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition flex items-center justify-center gap-2"
                >
                  <FaCheckCircle /> Submit
                </button>
              </form>
            </>
          )}
        </motion.div>
      ) : (
        // Submission confirmation
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full max-w-xl bg-green-600/80 p-8 rounded-xl shadow-2xl text-center flex flex-col items-center gap-4"
        >
          <FaCheckCircle className="text-4xl text-yellow-400" />
          <h2 className="text-2xl md:text-3xl font-bold">Congratulations!</h2>
          <p className="text-lg md:text-xl">Your quiz submission has been successfully recorded.</p>
        </motion.div>
      )}
    </div>
  );
}
