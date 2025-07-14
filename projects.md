---
layout: default
title: Projects
permalink: /projects/
head_custom: true
---

<style>
/* Nav container */
.project-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 3rem;
  justify-content: center;
}

/* Big category buttons */
.project-nav .cat-btn {
  padding: 0.75rem 1.5rem;
  background: #0063b1;
  color: white !important;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.2s;
}
.project-nav .cat-btn:hover {
  background: #004d8a;
}

/* Small project list under each category */
.project-nav .cat-list {
  list-style: none;
  margin-top: 0.5rem;
  padding-left: 0;
  text-align: center;
}
.project-nav .cat-list li {
  margin: 0.25rem 0;
}
.project-nav .cat-list a {
  color: #334e68;
  text-decoration: none;
  font-size: 0.9rem;
}
.project-nav .cat-list a:hover {
  text-decoration: underline;
}
</style>

# 🚀 Projects

<!-- NAVIGATION -->
<div class="project-nav">
  <!-- Reinforcement Learning -->
  <div>
    <a href="#reinforcement-learning" class="cat-btn">Reinforcement Learning</a>
    <ul class="cat-list">
      <li><a href="#enhancing-neural-topic-models">Neural Topic Models</a></li>
      <li><a href="#rl-portfolio-optimization">Portfolio Optimization</a></li>
    </ul>
  </div>

  <!-- Time Series -->
  <div>
    <a href="#time-series" class="cat-btn">Time Series</a>
    <ul class="cat-list">
      <li><a href="#nowcasting-labour-indicators">Nowcasting Indicators</a></li>
      <li><a href="#probabilistic-load-forecasting">Load Forecasting</a></li>
    </ul>
  </div>

  <!-- NLP -->
  <div>
    <a href="#nlp" class="cat-btn">NLP & Classification</a>
    <ul class="cat-list">
      <li><a href="#fake-statement-detection">Fake Statement Detection</a></li>
    </ul>
  </div>

  <!-- Vision -->
  <div>
    <a href="#vision" class="cat-btn">Vision & Multimodal</a>
    <ul class="cat-list">
      <li><a href="#few-shot-cosface-clip">Few-Shot CosFace-CLIP</a></li>
    </ul>
  </div>
</div>

---

## 🧠 Reinforcement Learning {#reinforcement-learning}

### Enhancing Neural Topic Models with Reinforcement Learning and Count-Based Exploration {#enhancing-neural-topic-models}
**Tech:** PyTorch, SBERT, VAE, REINFORCE  
Modeled topic inference as an MDP using REINFORCE with count-based intrinsic rewards, achieving **20% higher coherence** and **0.975 diversity**.

![Topic distribution heatmap](/assets/images/rl-topic.png)  
*Figure: Topic distribution heatmap*

---

### RL-Based Portfolio Optimization {#rl-portfolio-optimization}
**Tech:** PyTorch, Optuna  
Designed an RL agent to rebalance a portfolio optimizing for Sharpe ratio, showing **15% annual return improvement**.

![Portfolio allocation over time](/assets/images/portfolio-rl.png)  
*Figure: Portfolio allocation*

---

## 📈 Time Series {#time-series}

### Nowcasting Canadian Labour Market Indicators – Statistics Canada {#nowcasting-labour-indicators}
**Tech:** SARIMAX, Chronos, MySQL, REST APIs  
Reduced reporting lag by **50%** using multi-factor forecasting.

![Forecast vs actual indicators](/assets/images/labour-forecast.png)  
*Figure: Forecast vs. actual*

---

### Probabilistic Load Forecasting *(Coming Soon)* {#probabilistic-load-forecasting}
**Tech:** PyTorch, Darts, Quantile Regression  
Lightweight transformer for interval forecasting of energy load.

---

## 🔍 NLP & Classification {#nlp}

### Advanced Fake Statement Detection {#fake-statement-detection}
**Tech:** Hugging Face, W&B, Ensemble Learning  
Fine-tuned BERT variants with a random-forest ensemble to reach **96.9%** (2-way) and **50.5%** (4-way).

![ROC for fake detection](/assets/images/fake-detect.png)  
*Figure: ROC curves*

---

## 🖼️ Vision & Multimodal Learning {#vision}

### Few-Shot Learning with CosFace-CLIP {#few-shot-cosface-clip}
**Tech:** Hydra, PyTorch, CLIP, CosFace  
Integrated CosFace into Proto-CLIP achieving robust 4-shot/8-shot performance.

![Few-shot accuracy](/assets/images/cosface-clip.png)  
*Figure: Few-shot classification accuracy*


### Gauss-Proto-CLIP: Enhancing Few-Shot Learning {#gauss-proto-clip}
[📄 Paper (PDF)](/assets/papers/COMP5801_Paper_Project_Akash_Patel.pdf) · [💻 Code](https://github.com/your-username/gauss-proto-clip)

**Tech:** PyTorch · CLIP · NumPy · W&B  
**Data:** EuroSAT · DTD · Flowers · Pets · UCF101  

**🔎 Overview**  
Few-shot learning remains challenging when classes exhibit high intra-class variance. While Proto-CLIP uses single-point prototypes, our Gauss-Proto-CLIP models each class as a Gaussian (mean + covariance), enabling richer representations and superior fine-grained performance.

**🚀 Key Contributions**  
- Gaussian prototypes for image embeddings  
- Mahalanobis & Euclidean distance fusion  
- Prototype alignment via InfoNCE loss  
- Benchmarked on 5 vision–language datasets  

<figure>
  <img src="/assets/images/gauss-proto-clip-architecture.png" alt="Architecture" />
  <figcaption>Figure: Gaussian vs. vanilla prototypes</figcaption>
</figure>

| Dataset | 4-shot Acc. (%) |
| ------- | --------------- |
| EuroSAT | 74.93           |
| Flowers | 89.08           |
| …       | …               |

**🔧 What I Learned**  
– Probabilistic prototype modeling  
– Distance-based metric learning  
– Scalable experiment tracking with W&B  

**👉 Try It Yourself**  
- [📂 Code & Demo](https://github.com/your-username/gauss-proto-clip)  
- [📄 Full Report](/assets/papers/COMP5801_Paper_Project_Akash_Patel.pdf)  
- [✉️ Email Me](mailto:akashpatel3@cmail.carleton.ca)  

---

---

[← Back to Home]({{ "/" | relative_url }}){: .btn }
