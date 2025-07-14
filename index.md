---
layout: default
title: Akash Patel
---

<div class="page-hero">
  <!-- LEFT PANEL (hero/sidebar) -->
  <aside class="hero-panel">
    <h1>Akash Patel</h1>

    <!-- photo -->
    <img
      src="{{ '/assets/images/profile.png' | relative_url }}"
      alt="Akash Patel"
      class="profile-pic"
    />

    <!-- GitHub link -->
    <p class="view">
      <a href="https://github.com/akash3patel/portfolio">View on GitHub</a>
    </p>

    <!-- CTAs -->
    <div class="hero-ctas">
      <a href="{{ '/Akash_Patel_Resume.pdf' | relative_url }}" class="btn">Download Resume</a>
      <a href="{{ '/projects/' | relative_url }}" class="btn btn-outline">See Projects</a>
    </div>

    <!-- Skill badges -->
    <div class="skill-cloud">
      {% assign skills = "Python,PyTorch,NLP,Time Series,LLMs,Docker,Kubernetes" | split: "," %}
      {% for skill in skills %}
        <span class="badge">{{ skill }}</span>
      {% endfor %}
    </div>
  </aside>

  <main class="hero-main">
    <img src="{{ '/assets/images/profile.png' | relative_url }}" alt="Akash Patel" class="profile-pic">
    <h2>Data Scientist & ML Engineer</h2>
    <p>Applied AI · Scalable Systems · Explainable ML · Time Series · NLP</p>
  </main>
</div>

<!-- YOUR PAGE CONTENT CONTINUES BELOW -->


**Data Scientist & ML Engineer**  
Applied AI • Scalable Systems • Explainable ML • Time Series • NLP

---

## 🎓 Education

- **M.Eng in Data Science, Analytics & AI**, Carleton University *(2023 – 2025)*  
- **PG Diploma in AI: Architecture & Implementation**, Georgian College *(2022)*  
- **Applied Business Management**, University of Manitoba *(2019 – 2020)*  
- **B.Eng in Electrical Engineering**, PDPU, India *(2014 – 2018)*

---

## 💼 Experience

### **Machine Learning Scientist**  
*Defence Research and Development Canada (DRDC), Jan 2025 – Present, Ottawa, ON*  
- Designed an ML pipeline for scraping & processing open-source intelligence using LLMs  
- Built Flask microservices (Docker, GKE) for scalable deployment  
- Integrated GenAI dashboards reducing analyst workload by 90%

### **Junior Data Scientist**  
*Canadian Intellectual Property Office (ISED), May 2024 – Jan 2025, Gatineau, QC*  
- Built BERT-based model for NAPCS classification of trademarks  
- Developed few-shot pipeline (pseudo-labeling, synthetic data, active learning)  
- Created SHAP dashboards for explainability in QA loop

### **Graduate Teaching Assistant**  
*Carleton University, Sept 2023 – Present, Ottawa, ON*  
- Taught tutorials & labs in ML, optimization, and deep learning  
- Delivered guest lectures and mentored 100+ students

---


## 🚀 Projects

I’ve worked on RL, Time-Series, NLP & Vision projects.  
[Explore all projects →]({{ "/projects/" | relative_url }}){: .btn }

---

## 🛠 Technical Skills

- **Languages:** Python, R, SQL  
- **Frameworks:** PyTorch, TensorFlow, FastAPI, Streamlit, Hydra  
- **Libraries:** scikit-learn, Hugging Face, XGBoost, spaCy, NLTK, NumPy, Pandas  
- **Databases:** PostgreSQL, MySQL, SQLite  
- **Cloud & DevOps:** GCP (Vertex AI, GKE), AWS, Docker, Kubernetes, Terraform, CI/CD  
- **Tools & Platforms:** SHAP, Weights & Biases, Power BI, Tableau, VS Code  
- **Focus Areas:** LLMs, NLP, Time Series, Explainability, A/B Testing, Active Learning

---

## 📫 Contact

- GitHub: [@akash3patel](https://github.com/akash3patel)  
- Email: *available on request*

---

[← Back to Home]({{ "/" | relative_url }}){: .btn }

---
