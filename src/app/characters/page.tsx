"use client";
import { JSX, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GiKatana, GiNunchaku, GiSai, GiWoodStick } from "react-icons/gi";
import Image from "next/image";

interface Turtle {
  name: string;
  color: string;
  skill: string;
  weapon: string;
  story: string;
  img: string;
}

const turtles: Turtle[] = [
  {
    name: "Leonardo",
    color: "blue",
    skill: "Master swordsman, Leader",
    weapon: "Twin Katanas",
    story:
      "Leonardo is the fearless leader of the Ninja Turtles. Calm, strategic, and disciplined.",
    img: "https://images.hdqwalls.com/download/leonardo-in-teenage-mutant-ninja-turtles-4k-gw-2880x1800.jpg",
  },
  {
    name: "Michelangelo",
    color: "orange",
    skill: "Nunchaku expert, Joker of the team",
    weapon: "Nunchaku",
    story:
      "Michelangelo is the fun-loving party dude of the group. Always ready for pizza and jokes.",
    img: "https://images.hdqwalls.com/download/michelangelo-teenage-mutant-ninja-turtles-4k-ln-2880x1800.jpg",
  },
  {
    name: "Donatello",
    color: "purple",
    skill: "Tech genius, Inventor",
    weapon: "Bo Staff",
    story:
      "Donatello is the brains of the team, creating gadgets and machines to help in their missions.",
    img: "https://images.hdqwalls.com/download/donatello-in-teenage-mutant-ninja-turtles-4k-9p-2880x1800.jpg",
  },
  {
    name: "Raphael",
    color: "red",
    skill: "Strong fighter, Hot-headed",
    weapon: "Sai",
    story:
      "Raphael is the tough, aggressive Turtle. Fierce in battle but loyal to his brothers.",
    img: "https://images.hdqwalls.com/download/raphael-in-teenage-mutant-ninja-turtles-4k-st-2880x1800.jpg",
  },
];

const weaponIcons: Record<string, JSX.Element> = {
  "Twin Katanas": <GiKatana className="inline text-xl mr-2 text-yellow-400" />,
  Nunchaku: <GiNunchaku className="inline text-xl mr-2 text-yellow-400" />,
  Sai: <GiSai className="inline text-xl mr-2 text-yellow-400" />,
  "Bo Staff": <GiWoodStick className="inline text-xl mr-2 text-yellow-400" />,
};

export default function CharactersAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white font-sans p-6">
      <h1 className="text-5xl md:text-6xl mt-30 font-extrabold text-yellow-400 text-center mb-16 drop-shadow-lg">
        Meet the Ninja Turtles
      </h1>

      <div className="max-w-4xl mx-auto space-y-4">
        {turtles.map((turtle, index) => (
          <div
            key={turtle.name}
            className="bg-gray-900/80 rounded-xl shadow-lg overflow-hidden cursor-pointer border-l-4 border-transparent hover:border-yellow-400 transition-all"
          >
            {/* Header with small image */}
            <div
              onClick={() => toggle(index)}
              className={`flex items-center justify-between p-4 ${
                openIndex === index ? "bg-gray-800" : ""
              }`}
            >
              <div className="flex items-center gap-4">
                <Image
                  width={1000}
                  height={1000}
                  src={turtle.img}
                  alt={turtle.name}
                  className="w-16 h-16 object-cover rounded-lg shadow-lg"
                />
                <h2 className={`text-2xl font-bold text-${turtle.color}-400`}>
                  {turtle.name}
                </h2>
              </div>
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </div>

            {/* Collapsible Content */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="px-4 pb-4"
                >
                  <div className="flex mt-10 flex-col md:flex-row gap-4 items-center mb-4">
                    {/* Large image */}
                    <Image
                      width={1000}
                      height={1000}
                      src={turtle.img}
                      alt={turtle.name}
                      className="w-full md:w-64 h-64 object-cover rounded-xl shadow-2xl"
                    />
                    <div className="flex-1 space-y-2 text-left">
                      <div>
                        <span className="font-semibold">Skill: </span>
                        {turtle.skill}
                      </div>
                      <div>
                        <span className="font-semibold">Weapon: </span>
                        <span className="flex items-center">
                          {weaponIcons[turtle.weapon]} {turtle.weapon}
                        </span>
                      </div>
                      <div>
                        <span className="font-semibold">Story: </span>
                        {turtle.story}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
