// import { Card, CardContent } from "./components/ui/card.jsx";
// import { Button } from "./components/ui/button.jsx";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs.jsx";
// import { Badge } from "./components/ui/badge.jsx";
// import { motion } from "framer-motion";

// const projects = {
//   rl: [
//     {
//       title: "Enhancing Neural Topic Models with RL",
//       tech: "PyTorch, SBERT, VAE, REINFORCE",
//       desc: "Modeled topic inference as MDP using REINFORCE with neural density-based bonuses.",
//       result: "20% higher coherence, 0.975 topic diversity over ProdLDA/ETM."
//     },
//     {
//       title: "RL-Based Portfolio Optimization (Coming Soon)",
//       tech: "PyTorch, Optuna",
//       desc: "Builds an RL agent that reallocates assets using Sharpe ratio."
//     }
//   ],
//   time: [
//     {
//       title: "Nowcasting Canadian Labour Indicators",
//       tech: "SARIMAX, Chronos, REST APIs",
//       desc: "Reduced reporting lag by 50% via multi-factor forecasting.",
//       result: "Integrated GDP, stocks, immigration data."
//     },
//     {
//       title: "Probabilistic Load Forecasting (Coming Soon)",
//       tech: "Darts, Quantile Regression",
//       desc: "Lightweight Transformer for energy forecasting."
//     }
//   ]
// };

// export default function Portfolio() {
//   return (
//     <div className="p-6 max-w-5xl mx-auto">
//       <h1 className="text-4xl font-bold mb-4">Akash Patel</h1>
//       <p className="mb-6 text-gray-600">
//         Data Scientist & ML Engineer | Applied AI | Scalable ML | Fair & Explainable Systems
//       </p>

//       <Tabs defaultValue="rl" className="w-full">
//         <TabsList className="flex gap-4 mb-4">
//           <TabsTrigger value="rl">🧠 RL & Decision Making</TabsTrigger>
//           <TabsTrigger value="time">📈 Time Series</TabsTrigger>
//         </TabsList>

//         {Object.entries(projects).map(([key, projectList]) => (
//           <TabsContent value={key} key={key}>
//             <div className="grid md:grid-cols-2 gap-4">
//               {projectList.map((proj, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3, delay: idx * 0.1 }}
//                 >
//                   <Card className="rounded-2xl shadow-md">
//                     <CardContent className="p-4">
//                       <h2 className="text-xl font-semibold mb-1">{proj.title}</h2>
//                       <p className="text-sm text-gray-500 mb-2">{proj.tech}</p>
//                       <p className="text-sm mb-2">{proj.desc}</p>
//                       {proj.result && (
//                         <Badge variant="outline" className="text-xs">{proj.result}</Badge>
//                       )}
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           </TabsContent>
//         ))}
//       </Tabs>

//       <div className="mt-8">
//         <Button asChild>
//           <a href="/Akash_Patel_Resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
//         </Button>
//       </div>
//     </div>
//   );
// }

import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-300 text-gray-800 px-6 py-10">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800">Akash Patel</h1>
          <p className="text-lg mt-2 text-gray-600">
            Data Scientist & ML Engineer • Applied AI • Scalable & Fair Systems
          </p>
          <div className="mt-4 flex justify-center gap-3">
            <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-sm font-medium">RL & Decision Making</span>
            <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">Time Series</span>
          </div>
        </div>

        {/* Projects Section */}
        <div className="space-y-8">
          <div className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              Enhancing Neural Topic Models with RL
            </h2>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Tech:</strong> PyTorch, SBERT, VAE, REINFORCE
            </p>
            <p className="text-sm text-gray-700">
              Modeled topic inference as MDP using REINFORCE with neural density-based bonuses. Achieved 20% higher coherence and 0.975 topic diversity over ProdLDA/ETM.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition opacity-80">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              RL-Based Portfolio Optimization (Coming Soon)
            </h2>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Tech:</strong> PyTorch, Optuna
            </p>
            <p className="text-sm text-gray-700">
              Builds an RL agent that reallocates assets using Sharpe ratio.
            </p>
          </div>
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


