// src/data/projects.js
export const categories = [
  "All",
  "RL & Decision Making",
  "Time Series",
  "Vision",
  "NLP"
];

export const projects = [
  {
    id: 1,
    title: "Enhancing Neural Topic Models with RL",
    tech: "PyTorch, SBERT, VAE, REINFORCE",
    category: "RL & Decision Making",
    description:
      "Modeled topic inference as MDP using REINFORCE with neural density-based bonuses. Achieved 20% higher coherence and 0.975 topic diversity over ProdLDA/ETM."
  },
  {
    id: 2,
    title: "RL-Based Portfolio Optimization (Coming Soon)",
    tech: "PyTorch, Optuna",
    category: "Time Series",
    description:
      "Builds an RL agent that reallocates assets using Sharpe ratio."
  },
  {
    id: 3,
    title: "Multi-Modal Vision-Language Agent",
    tech: "CLIP, Transformers, PyTorch",
    category: "Vision",
    description:
      "Developed an agent to identify and summarize objects in real-time camera feeds using CLIP + REINFORCE."
  },
  {
    id: 4,
    title: "Prompt Engineering Toolkit",
    tech: "LangChain, OpenAI API",
    category: "NLP",
    description:
      "Created a developer-focused toolkit for prompt evaluation, auto-refinement, and failure detection."
  }
];
