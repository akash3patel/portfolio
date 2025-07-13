import { Card, CardContent } from "./components/ui/card.jsx";
import { Button } from "./components/ui/button.jsx";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs.jsx";
import { Badge } from "./components/ui/badge.jsx";

const projects = {
  rl: [
    {
      title: "Enhancing Neural Topic Models with RL",
      tech: "PyTorch, SBERT, VAE, REINFORCE",
      desc: "Modeled topic inference as MDP using REINFORCE with neural density-based bonuses.",
      result: "20% higher coherence, 0.975 topic diversity over ProdLDA/ETM."
    },
    {
      title: "RL-Based Portfolio Optimization (Coming Soon)",
      tech: "PyTorch, Optuna",
      desc: "Builds an RL agent that reallocates assets using Sharpe ratio."
    }
  ],
  time: [
    {
      title: "Nowcasting Canadian Labour Indicators",
      tech: "SARIMAX, Chronos, REST APIs",
      desc: "Reduced reporting lag by 50% via multi-factor forecasting.",
      result: "Integrated GDP, stocks, immigration data."
    },
    {
      title: "Probabilistic Load Forecasting (Coming Soon)",
      tech: "Darts, Quantile Regression",
      desc: "Lightweight Transformer for energy forecasting."
    }
  ]
};

export default function Portfolio() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Akash Patel</h1>
      <p className="mb-6 text-muted-foreground">
        Data Scientist & ML Engineer | Applied AI | Scalable ML | Fair & Explainable Systems
      </p>

      <Tabs defaultValue="rl" className="w-full">
        <TabsList className="flex gap-4 mb-4">
          <TabsTrigger value="rl">🧠 RL & Decision Making</TabsTrigger>
          <TabsTrigger value="time">📈 Time Series</TabsTrigger>
        </TabsList>

        {Object.entries(projects).map(([key, projectList]) => (
          <TabsContent value={key} key={key}>
            <div className="grid md:grid-cols-2 gap-4">
              {projectList.map((proj, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                >
                  <Card className="rounded-2xl shadow-md">
                    <CardContent className="p-4">
                      <h2 className="text-xl font-semibold mb-1">{proj.title}</h2>
                      <p className="text-sm text-muted-foreground mb-2">{proj.tech}</p>
                      <p className="text-sm mb-2">{proj.desc}</p>
                      {proj.result && (
                        <Badge variant="outline" className="text-xs">{proj.result}</Badge>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-8">
        <Button asChild>
          <a href="/Akash_Patel_Resume.pdf" target="_blank">Download Resume</a>
        </Button>
      </div>
    </div>
  );
}
