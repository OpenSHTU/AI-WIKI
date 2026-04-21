# ML & DL


本模块的文件目录以 **Learning Signal** 为主线组织具体内容。这样可以避免同一算法在多个目录中重复出现。其他维度作为分类学视角保留在本页中，用于帮助读者理解模型之间的交叉关系。

## 资源推荐

- [ML & DL Resources](./resources)


## ML算法分类

### 按学习信号分类：Learning Signal

学习信号描述模型从何种信息中学习。

- Supervised Learning
  - 使用带标签数据学习从输入到输出的映射。
  - 数据形式：$\mathcal{D}=\{(x_i,y_i)\}_{i=1}^{n}$
  - 学习目标：$f_\theta(x)\rightarrow y$ 或 $p_\theta(y|x)$
  - 回归模型
    - [Linear Regression](/ml-dl/supervised-learning/regression-models/linear-regression)
    - [Ridge Regression](/ml-dl/supervised-learning/regression-models/ridge-regression)
    - [Lasso Regression](/ml-dl/supervised-learning/regression-models/lasso-regression)
    - [Elastic Net](/ml-dl/supervised-learning/regression-models/elastic-net)
    - [Support Vector Regression (SVR)](/ml-dl/supervised-learning/regression-models/support-vector-regression)
    - [Random Forest Regression](/ml-dl/supervised-learning/regression-models/random-forest-regression)
    - [Gradient Boosting Regression](/ml-dl/supervised-learning/regression-models/gradient-boosting-regression)
    - [Gaussian Process Regression](/ml-dl/supervised-learning/regression-models/gaussian-process-regression)
    - [Neural Network Regression](/ml-dl/supervised-learning/regression-models/neural-network-regression)
  - 分类模型
    - [Logistic Regression](/ml-dl/supervised-learning/classification-models/logistic-regression)
    - [Softmax Regression](/ml-dl/supervised-learning/classification-models/softmax-regression)
    - [Naive Bayes](/ml-dl/supervised-learning/classification-models/naive-bayes)
    - [k-Nearest Neighbors (kNN)](/ml-dl/supervised-learning/classification-models/k-nearest-neighbors)
    - [Support Vector Machine (SVM)](/ml-dl/supervised-learning/classification-models/support-vector-machine)
    - [Decision Tree](/ml-dl/supervised-learning/classification-models/decision-tree)
    - [Random Forest](/ml-dl/supervised-learning/classification-models/random-forest)
    - [AdaBoost](/ml-dl/supervised-learning/classification-models/adaboost)
    - [Multilayer Perceptron (MLP)](/ml-dl/supervised-learning/classification-models/multilayer-perceptron)
    - [CNN Classifier](/ml-dl/supervised-learning/classification-models/cnn-classifier)
    - [RNN Classifier](/ml-dl/supervised-learning/classification-models/rnn-classifier)
    - [Transformer Classifier](/ml-dl/supervised-learning/classification-models/transformer-classifier)

- Unsupervised Learning
  - 只使用输入数据，目标是发现数据内部结构、分布、簇、低维表示或异常点。
  - 数据形式：$\mathcal{D}=\{x_i\}_{i=1}^{n}$
  - 聚类方法
    - [K-Means](/ml-dl/unsupervised-learning/clustering-methods/k-means)
    - [Gaussian Mixture Model (GMM；常用 EM 算法训练)](/ml-dl/unsupervised-learning/clustering-methods/gaussian-mixture-model)
    - [Spectral Clustering](/ml-dl/unsupervised-learning/clustering-methods/spectral-clustering)
  - 降维方法
    - [Principal Component Analysis (PCA)](/ml-dl/unsupervised-learning/dimensionality-reduction/principal-component-analysis)
  - 密度估计
    - [Kernel Density Estimation (KDE)](/ml-dl/unsupervised-learning/density-estimation/kernel-density-estimation)
    - [Gaussian Mixture Model (GMM)](/ml-dl/unsupervised-learning/density-estimation/gaussian-mixture-model)
  - [异常检测](./unsupervised-learning/anomaly-detection)

- Self-supervised Learning
  - 从数据自身构造监督信号，不依赖人工标注。
  - 自回归预测
    - [n-gram Language Model](/ml-dl/self-supervised-learning/autoregressive-prediction/n-gram-language-model)
    - [RNN Language Model](/ml-dl/self-supervised-learning/autoregressive-prediction/rnn-language-model)
    - [Transformer Language Model](/ml-dl/self-supervised-learning/autoregressive-prediction/transformer-language-model)
    - [GPT-style Next-token Prediction](/ml-dl/self-supervised-learning/autoregressive-prediction/gpt-style-next-token-prediction)
  - 掩码预测
    - [Masked Language Modeling (MLM)](/ml-dl/self-supervised-learning/masked-prediction/masked-language-modeling)
    - [BERT-style Pretraining](/ml-dl/self-supervised-learning/masked-prediction/bert-style-pretraining)
    - [Masked Autoencoder (MAE)](/ml-dl/self-supervised-learning/masked-prediction/masked-autoencoder)
    - [Masked Image Modeling](/ml-dl/self-supervised-learning/masked-prediction/masked-image-modeling)
  - 对比学习(待完善)
    - [Word2Vec](/ml-dl/self-supervised-learning/contrastive-learning/word2vec)
    - [SimCLRbi](/ml-dl/self-supervised-learning/contrastive-learning/simclrbi)
    - [MoCo](/ml-dl/self-supervised-learning/contrastive-learning/moco)
    - [BYOL](/ml-dl/self-supervised-learning/contrastive-learning/byol)
    - [Barlow Twins](/ml-dl/self-supervised-learning/contrastive-learning/barlow-twins)
    - [SwAV](/ml-dl/self-supervised-learning/contrastive-learning/swav)
    - [CLIP-style Image-Text Contrastive Learning](/ml-dl/self-supervised-learning/contrastive-learning/clip-style-image-text-contrastive-learning)
  - 去噪学习
    - [Denoising Autoencoder](/ml-dl/self-supervised-learning/denoising/denoising-autoencoder)
    - [BART-style Denoising](/ml-dl/self-supervised-learning/denoising/bart-style-denoising)
    - [Diffusion Denoising Objective](/ml-dl/self-supervised-learning/denoising/diffusion-denoising-objective)
  - 预测式表示学习
    - [Contrastive Predictive Coding (CPC)](/ml-dl/self-supervised-learning/predictive-representation-learning/contrastive-predictive-coding)
    - [Bootstrap Representation Learning](/ml-dl/self-supervised-learning/predictive-representation-learning/bootstrap-representation-learning)

- Semi-supervised Learning
  - 同时使用少量标注数据和大量无标注数据。
  - 数据形式：$\mathcal{D}_L=\{(x_i,y_i)\},\quad \mathcal{D}_U=\{x_j\}$
  - 典型方法
    - [Pseudo-labeling](/ml-dl/semi-supervised-learning/pseudo-labeling)
    - [Consistency Regularization](/ml-dl/semi-supervised-learning/consistency-regularization)
    - [FixMatch](/ml-dl/semi-supervised-learning/fixmatch)

- Reinforcement Learning
  - 通过 agent 与 environment 的交互学习策略。
  - 策略形式：$\pi(a|s)$
  - 优化目标：$\max_\pi \mathbb{E}\left[\sum_{t=0}^{T}\gamma^t r_t\right]$
  - 关键对象
    - [State](/ml-dl/reinforcement-learning/key-concepts/state)
    - [Action](/ml-dl/reinforcement-learning/key-concepts/action)
    - [Reward](/ml-dl/reinforcement-learning/key-concepts/reward)
    - [Policy](/ml-dl/reinforcement-learning/key-concepts/policy)
    - [Value Function](/ml-dl/reinforcement-learning/key-concepts/value-function)
    - [Environment Model](/ml-dl/reinforcement-learning/key-concepts/environment-model)
  - Bandit
    - [Multi-Armed Bandit](/ml-dl/reinforcement-learning/bandit/multi-armed-bandit)
    - [ε-Greedy](/ml-dl/reinforcement-learning/bandit/epsilon-greedy)
    - [Upper Confidence Bound (UCB)](/ml-dl/reinforcement-learning/bandit/upper-confidence-bound)
    - [Thompson Sampling](/ml-dl/reinforcement-learning/bandit/thompson-sampling)
  - Dynamic Programming
    - [Policy Evaluation](/ml-dl/reinforcement-learning/dynamic-programming/policy-evaluation)
    - [Policy Iteration](/ml-dl/reinforcement-learning/dynamic-programming/policy-iteration)
    - [Value Iteration](/ml-dl/reinforcement-learning/dynamic-programming/value-iteration)
  - Monte Carlo RL
    - [Monte Carlo Prediction](/ml-dl/reinforcement-learning/monte-carlo-rl/monte-carlo-prediction)
    - [Monte Carlo Control](/ml-dl/reinforcement-learning/monte-carlo-rl/monte-carlo-control)
  - Temporal Difference Learning
    - [TD(0)](/ml-dl/reinforcement-learning/temporal-difference-learning/td)
    - [Q-Learning](/ml-dl/reinforcement-learning/temporal-difference-learning/q-learning)
    - [SARSA](/ml-dl/reinforcement-learning/temporal-difference-learning/sarsa)
  - Deep Reinforcement Learning
    - [Deep Q-Network (DQN)](/ml-dl/reinforcement-learning/deep-reinforcement-learning/deep-q-network)
    - [Proximal Policy Optimization (PPO)](/ml-dl/reinforcement-learning/deep-reinforcement-learning/proximal-policy-optimization)
    - [Soft Actor-Critic (SAC)](/ml-dl/reinforcement-learning/deep-reinforcement-learning/soft-actor-critic)
    - [MuZero](/ml-dl/reinforcement-learning/deep-reinforcement-learning/muzero)

- Imitation Learning(待完善)
  - 从专家行为中学习策略。
  - 典型方法
    - [Behavior Cloning](/ml-dl/imitation-learning/behavior-cloning)
    - [DAgger](/ml-dl/imitation-learning/dagger)
    - [Inverse Reinforcement Learning (IRL)](/ml-dl/imitation-learning/inverse-reinforcement-learning)
    - [Maximum Entropy IRL](/ml-dl/imitation-learning/maximum-entropy-irl)
    - [Generative Adversarial Imitation Learning (GAIL)](/ml-dl/imitation-learning/generative-adversarial-imitation-learning)

- Active Learning(待完善)
  - 主动选择最有价值的数据进行标注。
  - 典型方法
    - [Uncertainty Sampling](/ml-dl/active-learning/uncertainty-sampling)
    - [Query-by-Committee](/ml-dl/active-learning/query-by-committee)
    - [Expected Model Change](/ml-dl/active-learning/expected-model-change)
    - [Expected Error Reduction](/ml-dl/active-learning/expected-error-reduction)
    - [Core-set Selection](/ml-dl/active-learning/core-set-selection)
    - [Diversity-based Sampling](/ml-dl/active-learning/diversity-based-sampling)

### 按模型结构分类：Model Structure

模型结构描述模型使用何种形式表达函数、分布或策略。

- Linear Models
  - 形式：$f(x)=w^\top x+b$
  - 典型模型
    - Linear Regression
    - Ridge Regression
    - Lasso Regression
    - Elastic Net
    - Logistic Regression
    - Softmax Regression
    - Perceptron
    - Linear SVM
    - Generalized Linear Model (GLM)

- Kernel Models
  - 形式：$K(x,x')=\phi(x)^\top \phi(x')$
  - 典型模型
    - Support Vector Machine (SVM)
    - Support Vector Regression (SVR)
    - Kernel Ridge Regression
    - Kernel PCA
    - Gaussian Process
    - Kernel Density Estimation

- Tree Models
  - 通过递归划分特征空间进行预测。
  - 典型模型
    - Decision Tree
    - CART
    - ID3
    - Regression Tree
    - Model Tree

- Ensemble Models
  - 组合多个弱模型或基模型，提升稳定性和泛化能力。
  - Bagging
    - Bagging Classifier
    - Random Forest
    - ExtraTrees
  - Boosting
    - AdaBoost
    - Gradient Boosting Decision Tree (GBDT)
    - XGBoost
    - LightGBM
    - CatBoost
  - Model Combination
    - Voting Classifier
    - Stacking
    - Blending

- Probabilistic Graphical Models
  - 使用图结构表示随机变量之间的条件依赖、条件独立关系和分布分解方式。
  - 有向图模型
    - Bayesian Network
    - Naive Bayes
    - Hidden Markov Model (HMM)
    - Dynamic Bayesian Network（HMM 的推广）
    - Latent Dirichlet Allocation (LDA)
    - Kalman Filter
  - 无向图模型
    - Markov Random Field (MRF)
    - Ising Model
    - Boltzmann Machine
    - Restricted Boltzmann Machine (RBM)
    - Conditional Random Field (CRF)
  - 因子模型
    - Factor Graph

- Neural Networks
  - 使用多层可微模块进行函数逼近和表示学习。
  - 基础神经网络
    - Feedforward Neural Network
    - Multilayer Perceptron (MLP) (FFN的特例)
    - Residual Network (ResNet)
    - Highway Network
  - 卷积神经网络（CNN）
    - LeNet
    - AlexNet
    - VGG
    - GoogLeNet / Inception
    - ResNet
    - DenseNet
    - MobileNet
    - EfficientNet
    - ConvNeXt
  - 循环神经网络 (RNN)
    - Vanilla RNN
    - Long Short-Term Memory (LSTM)
    - Gated Recurrent Unit (GRU)
  - Attention and Transformer
    - Attention-based Seq2Seq
    - Transformer
    - Transformer-XL
    - BERT
    - GPT
    - T5
    - XLNet
  - 图神经网络
    - Graph Convolutional Network (GCN)
    - Graph Attention Network (GAT)
    - GraphSAGE
    - Message Passing Neural Network (MPNN)
    - Graph Isomorphism Network (GIN)
  - 自编码模型
    - Autoencoder (AE)
    - Denoising Autoencoder (DAE)
    - Sparse Autoencoder
    - Contractive Autoencoder
    - Variational Autoencoder (VAE)

<!-- - Sequence Models
  - 处理具有顺序结构的数据，例如文本、语音、时间序列和行为轨迹。
  - 传统序列模型
    - n-gram Language Model
    - Hidden Markov Model (HMM)
    - Conditional Random Field (CRF)
    - Kalman Filter
    - State Space Model
  - 神经序列模型
    - RNN
    - LSTM
    - GRU
    - Seq2Seq
    - Attention-based Seq2Seq
    - Transformer
    - Transformer-XL
    - GPT-style Autoregressive Model
    - BERT-style Bidirectional Encoder
    - T5-style Encoder-Decoder Model -->

<!-- 
- Foundation Models
  - 在大规模、广覆盖数据上训练，并可适配到大量下游任务。
  - 语言基础模型
    - BERT-style Encoder Model
    - GPT-style Decoder Model
    - T5-style Encoder-Decoder Model
    - LLaMA-style Causal Language Model
  - 视觉基础模型
    - Vision Transformer (ViT)
    - MAE
    - DINO
    - Segment Anything-style Vision Model
  - 多模态基础模型
    - CLIP-style Vision-Language Model
    - BLIP-style Vision-Language Model
    - Flamingo-style Multimodal Model
    - Multimodal LLM
  - 生成式基础模型
    - Large Language Model
    - Diffusion Foundation Model
    - Text-to-Image Model
    - Text-to-Video Model
  - 对齐模型
    - Instruction-tuned Language Model
    - RLHF-aligned Language Model
    - Preference-optimized Language Model -->

### 按概率建模方式分类：Probabilistic View

概率建模方式描述模型如何表示分布、不确定性、隐变量和依赖关系。

- Discriminative Models
  - 直接建模条件分布 $p(y|x)$ 或决策函数 $f(x)\rightarrow y$。
  - 典型模型
    - Logistic Regression
    - Softmax Regression
    - SVM
    - CRF
    - Decision Tree
    - Random Forest
    - GBDT
    - XGBoost
    - LightGBM
    - CatBoost
    - MLP Classifier
    - CNN Classifier
    - RNN Classifier
    - Transformer Classifier
    - BERT Classifier

- Generative Models
  - 建模数据分布、联合分布或隐变量联合分布：$p(x)$、$p(x,y)$、$p(x,z)$。
  - 传统生成模型
    - Naive Bayes
    - Gaussian Discriminant Analysis (GDA)
    - Gaussian Mixture Model (GMM)
    - Hidden Markov Model (HMM)
    - Bayesian Network
    - Latent Dirichlet Allocation (LDA)
    - Kalman Filter
  - 深度生成模型
    - Variational Autoencoder (VAE)
    - Generative Adversarial Network (GAN)
    - Normalizing Flow
    - Autoregressive Model
    - PixelRNN
    - PixelCNN
    - WaveNet
    - Diffusion Model
    - Score-based Generative Model
    - Energy-based Neural Model

- Latent Variable Models
  - 假设观测数据背后存在不可直接观测的变量。
  - 形式：$p(x)=\int p(x,z)\,dz$
  - 典型模型
    - Gaussian Mixture Model (GMM)
    - Hidden Markov Model (HMM)
    - Factor Analysis
    - Probabilistic PCA
    - Latent Dirichlet Allocation (LDA)
    - Kalman Filter
    - State Space Model
    - Variational Autoencoder (VAE)
    - Hidden Markov Random Field

- Bayesian Models
  - 将参数或函数视为随机变量，并使用后验分布表达不确定性。
  - 形式：$p(\theta|\mathcal{D})=\frac{p(\mathcal{D}|\theta)p(\theta)}{p(\mathcal{D})}$
  - 典型模型
    - Bayesian Linear Regression
    - Bayesian Logistic Regression
    - Bayesian Network
    - Gaussian Process
    - Bayesian Neural Network
    - Dirichlet Process Mixture Model
    - Bayesian Optimization
    - Bayesian Matrix Factorization

- Energy-based Models
  - 使用能量函数定义概率分布。
  - 形式：$p_\theta(x)=\frac{\exp(-E_\theta(x))}{Z_\theta}$
  - 典型模型
    - Hopfield Network
    - Boltzmann Machine
    - Restricted Boltzmann Machine (RBM)
    - Deep Boltzmann Machine
    - Energy-based Neural Network
    - Score-based Generative Model

- Approximate Inference Methods
  - 当后验分布或边缘分布不可精确计算时使用。
  - 基于优化的推断
    - Expectation-Maximization (EM)
    - Variational Inference
    - Mean Field Variational Inference
    - Amortized Variational Inference
  - 基于采样的推断
    - Markov Chain Monte Carlo (MCMC)
    - Gibbs Sampling
    - Metropolis-Hastings
    - Hamiltonian Monte Carlo
    - Particle Filtering
  - 消息传递
    - Belief Propagation
    - Loopy Belief Propagation
    - Variational Message Passing

### 按任务目标分类：Task Objective

任务目标描述模型最终要解决的问题。

- Prediction
  - 从输入预测输出。
  - 典型方法
    - Linear Regression
    - Logistic Regression
    - Support Vector Machine (SVM)
    - Decision Tree
    - Transformer

- Classification
  - 输出离散类别。
  - 典型方法
    - Naive Bayes
    - Support Vector Machine (SVM)
    - Random Forest
    - Gradient Boosting Decision Tree (GBDT)
    - CNN
    - BERT Classifier

- Regression
  - 输出连续值。
  - 典型方法
    - Ridge
    - Lasso
    - Support Vector Regression (SVR)
    - Random Forest Regression
    - Gaussian Process

- Clustering
  - 发现数据中的群组结构。
  - 典型方法
    - K-Means
    - Gaussian Mixture Model (GMM)
    - DBSCAN
    - Spectral Clustering
    - HDBSCAN

- Dimensionality Reduction
  - 将高维数据映射到低维空间。
  - 典型方法
    - Principal Component Analysis (PCA)
    - Kernel PCA
    - Independent Component Analysis (ICA)
    - Non-negative Matrix Factorization (NMF)
    - t-SNE
    - UMAP
    - Autoencoder

- Representation Learning
  - 自动学习有用特征。
  - 典型方法
    - Word2Vec
    - Autoencoder
    - Variational Autoencoder (VAE)
    - SimCLR
    - MoCo
    - BERT
    - Masked Autoencoder (MAE)
    - CLIP

- Density Estimation
  - 学习数据分布 $p(x)$。
  - 典型方法
    - Kernel Density Estimation (KDE)
    - Gaussian Mixture Model (GMM)
    - Autoregressive Model
    - Normalizing Flow
    - Energy-based Model

- Generation
  - 从模型中采样或生成新数据。
  - 典型方法
    - GPT-style Language Model
    - Variational Autoencoder (VAE)
    - Generative Adversarial Network (GAN)
    - PixelCNN
    - Diffusion Model
    - Text-to-Video Model

- Structured Prediction
  - 输出序列、树、图等结构化对象。
  - 典型方法
    - Hidden Markov Model (HMM)
    - Conditional Random Field (CRF)
    - Structured SVM
    - Seq2Seq
    - Pointer Network

- Ranking
  - 学习对象之间的相对顺序。
  - 典型方法
    - RankSVM
    - RankNet
    - LambdaRank
    - LambdaMART

- Anomaly Detection
  - 识别偏离正常分布的数据点。
  - 典型方法
    - One-Class SVM
    - Isolation Forest
    - Local Outlier Factor (LOF)
    - Robust Covariance
    - Autoencoder

- Decision Making
  - 选择行动，而不是只预测标签。
  - 典型方法
    - Bandit
    - Q-Learning
    - SARSA
    - Deep Q-Network (DQN)
    - Proximal Policy Optimization (PPO)
    - Soft Actor-Critic (SAC)
    - Model Predictive Control (MPC)

- Planning
  - 根据目标生成动作序列。
  - 典型方法
    - A*
    - IDA*
    - STRIPS
    - PDDL
    - Monte Carlo Tree Search (MCTS)
    - Hierarchical Task Network (HTN)

- Causal Inference
  - 估计干预效应，而不是普通相关性。
  - 典型方法
    - Propensity Score Matching
    - Difference-in-Differences (DID)
    - Instrumental Variables (IV)
    - Regression Discontinuity Design (RDD)
    - Causal Forest
    - PC Algorithm
    - Greedy Equivalence Search (GES)
    - NOTEARS

因果推断关注干预分布：$p(y|\operatorname{do}(x))$。


### 按应用领域分类：Application Domain


<!-- TODO: 需要进一步细化和完善。 -->
