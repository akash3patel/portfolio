---
layout: default
title: Projects
permalink: /projects/
head_custom: true

projects:
  - title: "Enhancing Neural Topic Models with Reinforcement Learning and Count-Based Exploration"
    category: "Reinforcement Learning"
    technologies:
      - PyTorch
      - SBERT
      - VAE
      - REINFORCE
    description: >
      Modeled topic inference as an MDP using REINFORCE with count-based intrinsic rewards,
      achieving 20% higher coherence and 0.975 topic diversity over ProdLDA and ETM.
    image: "/assets/images/rl-topic.png"
    caption: "Topic distribution heatmap"

  - title: "Nowcasting Canadian Labour Market Indicators"
    category: "Time Series"
    technologies:
      - SARIMAX
      - Chronos
      - MySQL
      - REST APIs
    description: >
      Built multi-factor SARIMAX models integrating GDP, stock indices, and immigration data.
      Reduced official reporting lag by 50% (from 42 to 21 days).
    image: "/assets/images/labour-forecast.png"
    caption: "Forecast vs. actual indicators"

  - title: "Trip Destination Prediction with Graph Neural Networks"
    category: "Graph Neural Networks"
    technologies:
      - PyTorch Geometric
      - MySQL
      - Matplotlib
    description: >
      Constructed cross-city travel graphs and trained a GNN to classify trip types
      and predict destinations, capturing spatio-temporal relationships.
    image: "/assets/images/gnn-trip.png"
    caption: "GNN-predicted destinations vs. ground truth"

  - title: "Advanced Fake Statement Detection"
    category: "Natural Language Processing"
    technologies:
      - Hugging Face Transformers
      - Weights & Biases
      - Ensemble Learning
    description: >
      Fine-tuned BERT, DistilBERT, ConvBERT on the TruthSeeker dataset
      and stacked with a Random Forest to achieve 96.9% (2-way) and 50.5% (4-way) accuracy.
    image: "/assets/images/fake-detect.png"
    caption: "ROC curves for ensemble vs. baseline"

  - title: "Few-Shot Learning for Images with CosFace-CLIP"
    category: "Vision & Multimodal Learning"
    technologies:
      - Hydra
      - PyTorch
      - CLIP
      - CosFace
    description: >
      Integrated angular-margin CosFace into a Proto-CLIP framework for robust 4-shot and 8-shot performance
      across diverse vision-language benchmarks.
    image: "/assets/images/cosface-clip.png"
    caption: "Few-shot classification accuracy by class"
---

# 🚀 Projects

Welcome to my detailed projects portfolio. Browse the sections below for in-depth descriptions, images, and links.

{% for p in page.projects %}

## {{ p.title }}
**Category:** {{ p.category }}  
**Tech:** {{ p.technologies | join: ", " }}  

{{ p.description }}

{% if p.image %}
<figure>
  <img src="{{ p.image | relative_url }}" alt="{{ p.caption }}">
  <figcaption>{{ p.caption }}</figcaption>
</figure>
{% endif %}

---

{% endfor %}

[← Back to Home]({{ "/" | relative_url }}){: .btn }
