// src/data/projects.js

const projects = [
  {
    title: "Enhancing Neural Topic Models with RL",
    tech: ["PyTorch", "SBERT", "VAE", "REINFORCE"],
    categories: ["NLP", "RL"],
    description:
      "Modeled topic inference as MDP using REINFORCE with neural density-based bonuses. Achieved 20% higher coherence and 0.975 topic diversity over ProdLDA/ETM.",
  },
  {
    title: "RL-Based Portfolio Optimization",
    tech: ["PyTorch", "Optuna"],
    categories: ["Finance", "RL"],
    description:
      "Builds an RL agent that reallocates assets using Sharpe ratio.",
  },
  {
    title: "Nowcasting Labour Market Indicators",
    tech: ["SARIMAX", "Chronos", "MySQL"],
    categories: ["Time Series"],
    description:
      "Reduced economic reporting lag by 50% using SARIMAX forecasting with external economic signals.",
  },
  {
    title: "Few-Shot Learning with CosFace-CLIP",
    tech: ["Hydra", "PyTorch", "CLIP"],
    categories: ["Vision", "NLP"],
    description:
      "Integrated angular margin with Proto-CLIP for robust few-shot performance in multimodal learning.",
  },
];

export default projects;
