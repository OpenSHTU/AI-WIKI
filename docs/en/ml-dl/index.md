# ML & DL

This module is organized primarily by **learning signal**. This avoids duplicating the same algorithm under multiple parallel directory trees. Other taxonomic perspectives are kept on this page to help readers understand cross-cutting relationships between models.

## Recommended Resources

- [ML & DL Resources](./resources)

## ML Algorithm Taxonomy

### By Learning Signal

Learning signal describes what kind of information a model learns from.

- Supervised Learning
  - Learns a mapping from input to output using labeled data.
  - Data form: $\mathcal{D}=\{(x_i,y_i)\}_{i=1}^{n}$
  - Learning target: $f_\theta(x)\rightarrow y$ or $p_\theta(y|x)$
  - Regression models
    - [Linear Regression](/en/ml-dl/supervised-learning/regression-models/linear-regression)
    - [Ridge Regression](/en/ml-dl/supervised-learning/regression-models/ridge-regression)
    - [Lasso Regression](/en/ml-dl/supervised-learning/regression-models/lasso-regression)
    - [Elastic Net](/en/ml-dl/supervised-learning/regression-models/elastic-net)
    - [Support Vector Regression (SVR)](/en/ml-dl/supervised-learning/regression-models/support-vector-regression)
    - [Random Forest Regression](/en/ml-dl/supervised-learning/regression-models/random-forest-regression)
    - [Gradient Boosting Regression](/en/ml-dl/supervised-learning/regression-models/gradient-boosting-regression)
    - [Gaussian Process Regression](/en/ml-dl/supervised-learning/regression-models/gaussian-process-regression)
    - [Neural Network Regression](/en/ml-dl/supervised-learning/regression-models/neural-network-regression)
  - Classification models
    - [Logistic Regression](/en/ml-dl/supervised-learning/classification-models/logistic-regression)
    - [Softmax Regression](/en/ml-dl/supervised-learning/classification-models/softmax-regression)
    - [Naive Bayes](/en/ml-dl/supervised-learning/classification-models/naive-bayes)
    - [k-Nearest Neighbors (kNN)](/en/ml-dl/supervised-learning/classification-models/k-nearest-neighbors)
    - [Support Vector Machine (SVM)](/en/ml-dl/supervised-learning/classification-models/support-vector-machine)
    - [Decision Tree](/en/ml-dl/supervised-learning/classification-models/decision-tree)
    - [Random Forest](/en/ml-dl/supervised-learning/classification-models/random-forest)
    - [AdaBoost](/en/ml-dl/supervised-learning/classification-models/adaboost)
    - [Multilayer Perceptron (MLP)](/en/ml-dl/supervised-learning/classification-models/multilayer-perceptron)
    - [CNN Classifier](/en/ml-dl/supervised-learning/classification-models/cnn-classifier)
    - [RNN Classifier](/en/ml-dl/supervised-learning/classification-models/rnn-classifier)
    - [Transformer Classifier](/en/ml-dl/supervised-learning/classification-models/transformer-classifier)

- Unsupervised Learning
  - Uses only input data to discover structure, distributions, clusters, low-dimensional representations, or anomalies.
  - Data form: $\mathcal{D}=\{x_i\}_{i=1}^{n}$
  - Clustering methods
    - [K-Means](/en/ml-dl/unsupervised-learning/clustering-methods/k-means)
    - [Gaussian Mixture Model (GMM)](/en/ml-dl/unsupervised-learning/clustering-methods/gaussian-mixture-model)
    - [Spectral Clustering](/en/ml-dl/unsupervised-learning/clustering-methods/spectral-clustering)
  - Dimensionality reduction
    - [Principal Component Analysis (PCA)](/en/ml-dl/unsupervised-learning/dimensionality-reduction/principal-component-analysis)
  - Density estimation
    - [Kernel Density Estimation (KDE)](/en/ml-dl/unsupervised-learning/density-estimation/kernel-density-estimation)
    - [Gaussian Mixture Model (GMM)](/en/ml-dl/unsupervised-learning/density-estimation/gaussian-mixture-model)
  - [Anomaly Detection](/en/ml-dl/unsupervised-learning/anomaly-detection)

- Self-supervised Learning
  - Builds supervision signals from data itself without manual labels.
  - Autoregressive prediction
    - [n-gram Language Model](/en/ml-dl/self-supervised-learning/autoregressive-prediction/n-gram-language-model)
    - [RNN Language Model](/en/ml-dl/self-supervised-learning/autoregressive-prediction/rnn-language-model)
    - [Transformer Language Model](/en/ml-dl/self-supervised-learning/autoregressive-prediction/transformer-language-model)
    - [GPT-style Next-token Prediction](/en/ml-dl/self-supervised-learning/autoregressive-prediction/gpt-style-next-token-prediction)
  - Masked prediction
    - [Masked Language Modeling (MLM)](/en/ml-dl/self-supervised-learning/masked-prediction/masked-language-modeling)
    - [BERT-style Pretraining](/en/ml-dl/self-supervised-learning/masked-prediction/bert-style-pretraining)
    - [Masked Autoencoder (MAE)](/en/ml-dl/self-supervised-learning/masked-prediction/masked-autoencoder)
    - [Masked Image Modeling](/en/ml-dl/self-supervised-learning/masked-prediction/masked-image-modeling)
  - Contrastive learning (to be refined)
    - [Word2Vec](/en/ml-dl/self-supervised-learning/contrastive-learning/word2vec)
    - [SimCLRbi](/en/ml-dl/self-supervised-learning/contrastive-learning/simclrbi)
    - [MoCo](/en/ml-dl/self-supervised-learning/contrastive-learning/moco)
    - [BYOL](/en/ml-dl/self-supervised-learning/contrastive-learning/byol)
    - [Barlow Twins](/en/ml-dl/self-supervised-learning/contrastive-learning/barlow-twins)
    - [SwAV](/en/ml-dl/self-supervised-learning/contrastive-learning/swav)
    - [CLIP-style Image-Text Contrastive Learning](/en/ml-dl/self-supervised-learning/contrastive-learning/clip-style-image-text-contrastive-learning)
  - Denoising objectives
    - [Denoising Autoencoder](/en/ml-dl/self-supervised-learning/denoising/denoising-autoencoder)
    - [BART-style Denoising](/en/ml-dl/self-supervised-learning/denoising/bart-style-denoising)
    - [Diffusion Denoising Objective](/en/ml-dl/self-supervised-learning/denoising/diffusion-denoising-objective)
  - Predictive representation learning
    - [Contrastive Predictive Coding (CPC)](/en/ml-dl/self-supervised-learning/predictive-representation-learning/contrastive-predictive-coding)
    - [Bootstrap Representation Learning](/en/ml-dl/self-supervised-learning/predictive-representation-learning/bootstrap-representation-learning)

- Semi-supervised Learning
  - Uses a small labeled set and a large unlabeled set jointly.
  - Data form: $\mathcal{D}_L=\{(x_i,y_i)\},\quad \mathcal{D}_U=\{x_j\}$
  - Typical methods
    - [Pseudo-labeling](/en/ml-dl/semi-supervised-learning/pseudo-labeling)
    - [Consistency Regularization](/en/ml-dl/semi-supervised-learning/consistency-regularization)
    - [FixMatch](/en/ml-dl/semi-supervised-learning/fixmatch)

- Reinforcement Learning
  - Learns policies from agent-environment interaction.
  - Policy form: $\pi(a|s)$
  - Objective: $\max_\pi \mathbb{E}\left[\sum_{t=0}^{T}\gamma^t r_t\right]$
  - Core entities
    - [State](/en/ml-dl/reinforcement-learning/key-concepts/state)
    - [Action](/en/ml-dl/reinforcement-learning/key-concepts/action)
    - [Reward](/en/ml-dl/reinforcement-learning/key-concepts/reward)
    - [Policy](/en/ml-dl/reinforcement-learning/key-concepts/policy)
    - [Value Function](/en/ml-dl/reinforcement-learning/key-concepts/value-function)
    - [Environment Model](/en/ml-dl/reinforcement-learning/key-concepts/environment-model)
  - Bandits
    - [Multi-Armed Bandit](/en/ml-dl/reinforcement-learning/bandit/multi-armed-bandit)
    - [epsilon-Greedy](/en/ml-dl/reinforcement-learning/bandit/epsilon-greedy)
    - [Upper Confidence Bound (UCB)](/en/ml-dl/reinforcement-learning/bandit/upper-confidence-bound)
    - [Thompson Sampling](/en/ml-dl/reinforcement-learning/bandit/thompson-sampling)
  - Dynamic programming
    - [Policy Evaluation](/en/ml-dl/reinforcement-learning/dynamic-programming/policy-evaluation)
    - [Policy Iteration](/en/ml-dl/reinforcement-learning/dynamic-programming/policy-iteration)
    - [Value Iteration](/en/ml-dl/reinforcement-learning/dynamic-programming/value-iteration)
  - Monte Carlo RL
    - [Monte Carlo Prediction](/en/ml-dl/reinforcement-learning/monte-carlo-rl/monte-carlo-prediction)
    - [Monte Carlo Control](/en/ml-dl/reinforcement-learning/monte-carlo-rl/monte-carlo-control)
  - Temporal Difference Learning
    - [TD(0)](/en/ml-dl/reinforcement-learning/temporal-difference-learning/td)
    - [Q-Learning](/en/ml-dl/reinforcement-learning/temporal-difference-learning/q-learning)
    - [SARSA](/en/ml-dl/reinforcement-learning/temporal-difference-learning/sarsa)
  - Deep reinforcement learning
    - [Deep Q-Network (DQN)](/en/ml-dl/reinforcement-learning/deep-reinforcement-learning/deep-q-network)
    - [Proximal Policy Optimization (PPO)](/en/ml-dl/reinforcement-learning/deep-reinforcement-learning/proximal-policy-optimization)
    - [Soft Actor-Critic (SAC)](/en/ml-dl/reinforcement-learning/deep-reinforcement-learning/soft-actor-critic)
    - [MuZero](/en/ml-dl/reinforcement-learning/deep-reinforcement-learning/muzero)

- Imitation Learning (to be refined)
  - Learns policies from expert demonstrations.
  - Typical methods
    - [Behavior Cloning](/en/ml-dl/imitation-learning/behavior-cloning)
    - [DAgger](/en/ml-dl/imitation-learning/dagger)
    - [Inverse Reinforcement Learning (IRL)](/en/ml-dl/imitation-learning/inverse-reinforcement-learning)
    - [Maximum Entropy IRL](/en/ml-dl/imitation-learning/maximum-entropy-irl)
    - [Generative Adversarial Imitation Learning (GAIL)](/en/ml-dl/imitation-learning/generative-adversarial-imitation-learning)

- Active Learning (to be refined)
  - Actively selects the most valuable samples for annotation.
  - Typical methods
    - [Uncertainty Sampling](/en/ml-dl/active-learning/uncertainty-sampling)
    - [Query-by-Committee](/en/ml-dl/active-learning/query-by-committee)
    - [Expected Model Change](/en/ml-dl/active-learning/expected-model-change)
    - [Expected Error Reduction](/en/ml-dl/active-learning/expected-error-reduction)
    - [Core-set Selection](/en/ml-dl/active-learning/core-set-selection)
    - [Diversity-based Sampling](/en/ml-dl/active-learning/diversity-based-sampling)

### By Model Structure

Model structure describes how a model expresses functions, distributions, or policies.

- Linear Models: $f(x)=w^\top x+b$
- Kernel Models: $K(x,x')=\phi(x)^\top\phi(x')$
- Tree Models: recursive partitioning in feature space
- Ensemble Models: bagging, boosting, and model-combination families
- Probabilistic Graphical Models: Bayesian networks, MRFs, factor graphs, etc.
- Neural Networks: feedforward, CNN, RNN, Transformer, GNN, autoencoders

### By Probabilistic Perspective

This view focuses on how models represent distributions, uncertainty, latent variables, and dependencies.

- Discriminative Models
- Generative Models
- Latent Variable Models
- Bayesian Models
- Energy-based Models
- Approximate Inference Methods

### By Task Objective

Task objectives describe what the model is ultimately optimized to solve.

- Prediction / Classification / Regression
- Clustering / Dimensionality Reduction / Representation Learning
- Density Estimation / Generation / Structured Prediction
- Ranking / Anomaly Detection
- Decision Making / Planning
- Causal Inference
