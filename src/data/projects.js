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
  // Add more...
];
export default projects;
