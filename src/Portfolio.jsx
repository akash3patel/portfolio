import React, { useState } from "react";
import { motion } from "framer-motion";
import projects from "./data/projects"; // Ensure this is the correct path to your updated projects.js

const categories = ["All", ...new Set(projects.flatMap(p => p.categories))];

export default function Portfolio() {
  const [selected, setSelected] = useState("All");

  const filtered = selected === "All" ? projects : projects.filter(p => p.categories.includes(selected));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-300 text-gray-800 px-6 py-10">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800">Akash Patel</h1>
          <p className="text-lg mt-2 text-gray-600">
            Data Scientist & ML Engineer • Applied AI • Scalable & Fair Systems
          </p>

          {/* Category Filter */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 border shadow-sm ${
                  selected === cat
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="space-y-8">
          {filtered.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                {proj.title}
              </h2>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Tech:</strong> {proj.tech}
              </p>
              <p className="text-sm text-gray-700 mb-1">{proj.desc}</p>
              {proj.result && (
                <p className="text-xs mt-1 text-blue-700 font-medium">
                  {proj.result}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Resume Download */}
        <div className="text-center mt-12">
          <a
            href="/resume.pdf"
            className="text-blue-600 underline hover:text-blue-800 text-sm"
            download
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}
