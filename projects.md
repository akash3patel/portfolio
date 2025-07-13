---
layout: default
title: Projects
permalink: /projects/
head_custom: true
---

# 🚀 Projects

## 🧠 Reinforcement Learning & Count-Based Exploration

### Enhancing Neural Topic Models with Reinforcement Learning and Count-Based Exploration  
**Tech:** PyTorch, SBERT, VAE, REINFORCE  
- Framed topic inference as an MDP and applied REINFORCE with neural density-based intrinsic rewards.  
- Achieved **20% higher coherence** and **0.975 topic diversity** compared to ProdLDA/ETM.

<figure>
  <img src="assets/images/rl-topic.png" alt="Topic model heatmap" />
  <figcaption>Topic distribution heatmap</figcaption>
</figure>

---

## 📈 Time Series & Forecasting

### Nowcasting Canadian Labour Market Indicators – Statistics Canada  
**Tech:** SARIMAX, Chronos, MySQL, REST APIs  
- Built multi-factor SARIMAX models integrating GDP, stock indices, and immigration data.  
- Reduced official reporting lag by **50%** (from 42 to 21 days).

<figure>
  <img src="assets/images/labour-forecast.png" alt="Labour market forecast" />
  <figcaption>Forecast vs. actual indicator values</figcaption>
</figure>

---

## 🌐 Graph Neural Networks

### Trip Destination Prediction with GNNs  
**Tech:** PyTorch Geometric, MySQL, Matplotlib  
- Constructed cross-city graphs of travel patterns and trained a GNN to classify trip types.  
- Achieved high destination-prediction accuracy by modeling spatio-temporal relations.

<figure>
  <img src="assets/images/gnn-trip.png" alt="GNN trip prediction" />
  <figcaption>GNN-predicted destinations vs ground truth</figcaption>
</figure>

---

## 🔍 NLP & Ensemble Learning

### Advanced Fake Statement Detection Model  
**Tech:** Hugging Face Transformers, W&B, Ensemble (BERT + RF)  
- Fine-tuned BERT, DistilBERT, ConvBERT on the TruthSeeker dataset.  
- Combined with a Random Forest ensemble to reach **96.9%** (2-way) and **50.5%** (4-way) accuracy.

<figure>
  <img src="assets/images/fake-detect.png" alt="Fake statement ROC" />
  <figcaption>ROC curves for ensemble vs baselines</figcaption>
</figure>

---

## 🖼️ Vision & Multimodal Few-Shot Learning

### Few-Shot Learning for Images using Vision-Language Models with Angular Margin  
**Tech:** Hydra, PyTorch, CLIP, CosFace  
- Integrated angular-margin CosFace into a Proto-CLIP framework for 4-shot and 8-shot scenarios.  
- Demonstrated robust performance across diverse vision-language benchmarks.

<figure>
  <img src="assets/images/cosface-clip.png" alt="CosFace-CLIP accuracy" />
  <figcaption>Few-shot classification accuracy by class</figcaption>
</figure>

---

[← Back to Home]({{ "/" | relative_url }}){: .btn }
