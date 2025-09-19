"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const turtles = [
    { name: "Leonardo", role: "Leader", color: "blue", img: "https://images.hdqwalls.com/download/leonardo-in-teenage-mutant-ninja-turtles-4k-gw-2880x1800.jpg" },
    { name: "Michelangelo", role: "Fun & Party", color: "orange", img: "https://images.hdqwalls.com/download/michelangelo-teenage-mutant-ninja-turtles-4k-ln-2880x1800.jpg" },
    { name: "Donatello", role: "Tech & Genius", color: "purple", img: "https://images.hdqwalls.com/download/donatello-in-teenage-mutant-ninja-turtles-4k-9p-2880x1800.jpg" },
    { name: "Raphael", role: "Strong & Aggressive", color: "red", img: "https://images.hdqwalls.com/download/raphael-in-teenage-mutant-ninja-turtles-4k-st-2880x1800.jpg" },
  ];

  const historyPoints = [
    "1984: TMNT created by Kevin Eastman & Peter Laird.",
    "1987: First animated series aired.",
    "1990: First live-action movie released.",
    "2003-2012: Various animated series continued TMNT legacy.",
    "2014: TMNT reboot movie released, introducing new fans to the universe.",
  ];

  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-96 w-full">
        <Image
          src="https://images.hdqwalls.com/download/teenage-mutant-ninja-turtles-splintered-fate-game-ne-2880x1800.jpg"
          alt="Ninja Turtles Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-xl"
          >
            About the Ninja Turtles
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            className="mt-4 text-lg md:text-xl max-w-2xl"
          >
            Discover the heroes in a half-shell: their history, skills, personalities, and how they became legends in pop culture.
          </motion.p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 px-6 bg-green-900/80">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-12 text-center drop-shadow-lg">
          Timeline & History
        </h2>
        <ul className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl text-white/90">
          {historyPoints.map((point, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-yellow-400 before:rounded-full"
            >
              {point}
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Turtle Profiles */}
      <section className="py-24 px-6 bg-black/80">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-12 text-center drop-shadow-lg">
          Meet the Turtles
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
          {turtles.map((turtle) => (
            <motion.div
              key={turtle.name}
              whileHover={{ scale: 1.05 }}
              className="w-60 bg-gray-900/80 rounded-xl overflow-hidden shadow-2xl border-2 border-yellow-400 cursor-pointer"
            >
              <Image src={turtle.img} alt={turtle.name} width={240} height={240} className="object-cover w-full h-60" />
              <div className="p-4 text-center">
                <h3 className={`text-xl font-bold text-${turtle.color}-400`}>{turtle.name}</h3>
                <p className="mt-2 text-white/90">{turtle.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      
    </div>
  );
}
