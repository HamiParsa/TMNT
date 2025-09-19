"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaQuestionCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { GiTurtleShell } from "react-icons/gi";
export default function Home() {
  const turtles = [
    {
      name: "Leonardo",
      color: "blue",
      img: "https://images.hdqwalls.com/download/leonardo-in-teenage-mutant-ninja-turtles-4k-gw-2880x1800.jpg",
    },
    {
      name: "Michelangelo",
      color: "orange",
      img: "https://images.hdqwalls.com/download/michelangelo-teenage-mutant-ninja-turtles-4k-ln-2880x1800.jpg",
    },
    {
      name: "Donatello",
      color: "purple",
      img: "https://images.hdqwalls.com/download/donatello-in-teenage-mutant-ninja-turtles-4k-9p-2880x1800.jpg",
    },
    {
      name: "Raphael",
      color: "red",
      img: "https://images.hdqwalls.com/download/raphael-in-teenage-mutant-ninja-turtles-4k-st-2880x1800.jpg",
    },
  ];

  const comics = [
    {
      title: "TMNT #1",
      img: "https://m.media-amazon.com/images/M/MV5BODlkODE1MjgtNzk5My00M2FiLWJkZjAtMzBmNjIyMGM1MTY5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "TMNT #2",
      img: "https://i.ebayimg.com/images/g/wqIAAOSwXOFioVji/s-l1200.jpg",
    },
    {
      title: "TMNT Movie",
      img: "https://m.media-amazon.com/images/I/81ISU6fpH6L.jpg",
    },
  ];

  // Particle state
  const [particles, setParticles] = useState<{ top: number; left: number }[]>(
    []
  );

  useEffect(() => {
    const arr = Array.from({ length: 10 }, () => ({
      top: Math.random() * 80,
      left: Math.random() * 90,
    }));
    setParticles(arr);
  }, []);

  return (
    <div className="relative min-h-screen text-white font-sans overflow-x-hidden bg-black">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src="https://images.hdqwalls.com/download/tmnt-heroes-in-a-half-shell-la-2880x1800.jpg"
          alt="Ninja Turtles Hero"
          fill
          className="object-cover"
        />
        {/* Gradient Fade */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

        {/* Particle Effects only on Client */}
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-green-400 rounded-full blur-xl"
              style={{ top: `${p.top}%`, left: `${p.left}%` }}
              animate={{ y: [0, -10, 0], opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 3 + Math.random() * 2 }}
            />
          ))}
        </div>

        {/* Hero Text */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <div className="bg-black/50 px-6 py-4 rounded-lg">
            <motion.h1
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, type: "spring", stiffness: 70 }}
              className="text-5xl md:text-6xl font-extrabold mb-4 text-yellow-400 drop-shadow-2xl"
            >
              Heroes in a Half-Shell
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.2 }}
              className="text-lg md:text-xl mb-6 flex justify-center items-center"
            >
              Enter the legendary Ninja Turtles universe! <GiTurtleShell />
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <Link
                href="/characters"
                className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold shadow-lg hover:bg-yellow-500 transition-all duration-300 flex items-center gap-2"
              >
                <GiTurtleShell /> Meet the Turtles
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Turtle Carousel */}
      <section className="flex flex-wrap justify-center gap-12 py-24 bg-black/30">
        {turtles.map((turtle, i) => (
          <motion.div
            key={turtle.name}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.3, type: "spring", stiffness: 80 }}
            whileHover={{ scale: 1.05 }}
            className="relative w-44 h-44 cursor-pointer"
          >
            <Image
              src={turtle.img}
              alt={turtle.name}
              width={180}
              height={180}
              className={`rounded-full border-4 border-${turtle.color}-500 shadow-2xl`}
            />
            <p className="mt-2 text-center font-bold text-xl">{turtle.name}</p>
          </motion.div>
        ))}
      </section>

      {/* History Section */}
      <section className="py-24 px-6 bg-green-900/80">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-12 text-center drop-shadow-lg">
          History of Ninja Turtles
        </h2>
        <div className="max-w-5xl mx-auto text-white/90 space-y-6 text-lg md:text-xl">
          {[
            "Created in 1984, Teenage Mutant Ninja Turtles became an instant global sensation, blending humor, action, and heroism.",
            "Leonardo, Michelangelo, Donatello, and Raphael fight crime from the shadows of New York City, becoming legends in comics, TV shows, and movies.",
            "Their adventures have captivated generations, and their legacy continues to inspire new fans worldwide.",
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.3 }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </section>

      {/* Comics & Movies Section */}
      <section className="py-24 px-6 bg-black/60">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-12 text-center drop-shadow-lg">
          Comics & Movies
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {comics.map((comic, i) => (
            <motion.div
              key={comic.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="w-60 rounded-xl overflow-hidden shadow-2xl border-2 border-yellow-400 cursor-pointer"
            >
              <Image
                src={comic.img}
                alt={comic.title}
                width={240}
                height={340}
                className="object-cover"
              />
              <p className="text-center text-lg font-bold p-2">{comic.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Fun & Quiz Section */}
      <section className="py-24 px-6 bg-green-800/80 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-yellow-400 drop-shadow-lg">
          Fun & Quiz
        </h2>
        <p className="text-lg md:text-xl mb-6 text-white/90">
          Test your knowledge and find out which Turtle matches your
          personality!
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <Link href="/quiz" className="flex justify-center">
            <button className="bg-yellow-400 text-black font-bold px-12 py-4 rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 flex items-center justify-center ">
              <FaQuestionCircle />
              Take the Quiz
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
