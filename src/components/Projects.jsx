import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../data/projects";

const categories = ["All", "NLP", "RL", "Finance", "Time Series", "Vision"];

export default function Projects() {
  const [selected, setSelected] = useState("All");

  const filtered =
    selected === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(selected));

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-5 py-2 rounded-full border font-medium transition-all duration-300 shadow-sm hover:shadow-md ${
              selected === cat
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                : "bg-white text-blue-700 border-blue-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <AnimatePresence>
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {filtered.map((proj, i) => (
            <motion.div
              key={proj.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition-transform duration-300 hover:scale-[1.02]"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {proj.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Tech:</strong> {proj.tech.join(", ")}
              </p>
              <p className="text-gray-700 text-sm">{proj.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
