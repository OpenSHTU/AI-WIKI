# Math Foundation for AI



> [!IMPORTANT] 
> 在你学习本wiki的`数学基础`部分的时候，强烈推荐先阅读本章内容。

## 这一部分会涉及什么

- 线性代数
- 微积分
- 概率论与数理统计
- 信息论

## 资源推荐

- [Math Resources](./resources)

## 这一部分的核心是什么

> [!IMPORTANT] Idea
> 从模型视角出发，强目的导向地重新审视数学知识。

这一部分并非对教材中的数学知识的简单罗列，也并不是按照线性的顺序讲解学习AI所需要的数学内容，而是希望从我们现实应用或者科研中的模型出发，分析每一部分需要用到哪些数学知识，从而针对性的学习。或者反过来，当我们说这些数学内容对AI很重要时，它们到底出现在模型的哪里？

- 对于初学者：如果你不知道上述问题的答案，那么你可能会面临两个问题：

  1. 你觉得这些东西是繁杂的理论，于是你决定先开始科研，在实践中边做边学。结果发现论文中的方法你根本看不懂，你也无法对于现有模型提出自己的想法。但是你不知道自己卡在了哪里，你不知道自己是因为不知道什么数学知识，而不理解模型架构或者背后具体机制以及思想的。
  2. 你觉得这些东西是十分重要的，是后面做科研的基础，于是你决定先修读完相关课程再开始科研。但事实上，你在观看大而全的教程之后，并不知道自己学的内容有什么用，这样无目的导向的学习，会导致即便你学会了，也不能真正的灵活应用。反而因此在理论学习上耗费了大量的时间，没有积累足够的实践经验。

- 对于已经完成这些内容学习的人：如果你在大学修读完对应课程之后，没有思考过上述问题，那么你可能会面临：

  1. 在后续的研究中，发现某些知识自己学过，但是已经忘记了，想回头复习，却返现数学知识这么多，无从下手，想全部重新学一遍又觉得不切实际。迫切希望切中要害，快速找出自己需要复习的内容。

那么，出现以上问题的统一原因是什么？答案是我们没有建立起知识与知识之前的 **强连通** 的关系。因此本部分旨在建立数学知识与模型总每个部分的关系，让读者能够明白模型中每个部分都需要什么样的数学工具来描述、推导、训练和分析。

因此本章接下来的部分旨在做两件事
1. 梳理清楚模型的不同部分分别需要用到什么样的数学知识.
2. 反过来：不同的数学知识到底出现在模型的哪里.


## 1. 一个通用的 AI Model System

为了统一后续内容，我们先把一个 AI 模型抽象成一个通用系统。后面讨论线性代数、微积分、概率论、信息论和优化时，都默认围绕这个系统展开。

### 1.1 模型构成以及训练流程

<!-- 先给出本章会用到的核心符号：

| 符号 | 含义 |
| --- | --- |
| $\mathcal{X}$ | 输入空间，例如文本、图像、语音、图结构、多模态输入 |
| $\mathcal{Y}$ | 目标空间，例如类别、数值、序列、动作、下一个 token |
| $\mathcal{D}$ | 训练数据集 |
| $n$ | 训练样本数量 |
| $x_i$ | 第 $i$ 个输入样本，$x_i \in \mathcal{X}$ |
| $y_i$ | 第 $i$ 个目标，$y_i \in \mathcal{Y}$ |
| $\phi$ | 表示函数，将原始输入转成模型可处理的向量、矩阵或张量 |
| $z_i$ | 输入 $x_i$ 的表示，$z_i=\phi(x_i)$ |
| $\mathcal{Z}$ | 表示空间，也就是模型实际处理的空间 |
| $\theta$ | 模型参数，例如权重矩阵、bias、embedding table、normalization 参数 |
| $f_\theta$ | 参数化模型函数 |
| $\mathcal{O}$ | 模型原始输出空间，例如 logits、hidden states、actions |
| $s_i$ | logits 或 score，通常有 $s_i=f_\theta(z_i)$ |
| $p_\theta(y\mid x)$ | 模型给出的条件概率分布 |
| $\ell(\hat{y},y)$ | 单个样本上的 loss |
| $\mathcal{L}(\theta)$ | 整个数据集上的训练目标 |
| $\eta$ | learning rate |
| $\nabla_\theta \mathcal{L}$ | loss 对模型参数的梯度 |
| $\theta^*$ | 训练后希望得到的最优参数 | -->

如果只看主线，一个模型训练过程可以写成：


![AI Model System](/images/math/model.svg)



---

### 1.2 Dataset

最常见的监督学习数据集可以写成：

$$
\mathcal{D}=\{(x_i,y_i)\}_{i=1}^{n}
$$

其中：

- $x_i$ 是输入；
- $y_i$ 是目标；
- $n$ 是样本数量。

不同任务中 $\mathcal{D}$ 的例子：
- 语言模型 / Transformer 预训练：$\mathcal{D}=\{(x_1^{(i)},x_2^{(i)},\dots,x_{L_i}^{(i)})\}_{i=1}^{n}$
- 图像分类：$\mathcal{D}=\{(I_i,y_i)\}_{i=1}^{n}$
- 目标检测：$\mathcal{D}=\{(I_i,\{(b_{ij},c_{ij})\}_{j=1}^{m_i})\}_{i=1}^{n}$
- 语义分割：$\mathcal{D}=\{(I_i,y_i)\}_{i=1}^{n},\; y_i \in \{1,\dots,K\}^{H \times W}$
- 扩散模型：$\mathcal{D}=\{x_i\}_{i=1}^{n}$
- 多模态图文任务：$\mathcal{D}=\{(I_i,T_i)\}_{i=1}^{n}$


---

### 1.3 Representation

原始输入通常不能直接进入模型，需要先被表示成向量、矩阵或张量：

$$
z_i = \phi(x_i)
$$

其中：

- $\phi$ 是表示函数，例如 tokenizer、embedding layer、patch embedding、feature extractor；
- $z_i \in \mathbb{R}^{d}$、$\mathbb{R}^{L \times d}$ 或更高阶张量；
- $z_i$ 是模型真正处理的数学对象。

在语言模型中，一个序列可以表示为：

$$
X = [e_1,e_2,\dots,e_L] \in \mathbb{R}^{L \times d}
$$

这里 $L$ 是序列长度，$d$ 是 embedding dimension。

对于图像模型，一张图像可以被表示成 patch 序列：

$$
X = [p_1,p_2,\dots,p_N] \in \mathbb{R}^{N \times d}
$$

这就是 ViT 中 patch embedding 的基本形式。

---

### 1.4 Parameterized Model

模型可以看成一个带参数的函数：

$$
f_\theta: \mathcal{Z} \rightarrow \mathcal{O}
$$

其中：

- $\theta$ 是模型参数，例如权重矩阵、bias、embedding table、normalization 参数；
- $\mathcal{Z}$ 是表示空间；
- $\mathcal{O}$ 是输出空间，例如 logits、hidden states、actions、生成样本。

对于神经网络，模型通常是多层函数的复合：

$$
f_\theta(z)
= f_{\theta_m}^{(m)} \circ f_{\theta_{m-1}}^{(m-1)}
\circ \cdots \circ f_{\theta_1}^{(1)}(z)
$$

这也是反向传播和链式法则进入模型训练的地方。


---

### 1.5 Prediction Distribution

很多 AI 模型不只输出一个确定答案，而是输出一个概率分布：

$$
p_\theta(y \mid x)
$$

例如：

- 分类模型：$p_\theta(y \mid x)$；
- 语言模型：$p_\theta(x_t \mid x_{<t})$；
- 生成模型：$p_\theta(x)$ 或 $p_\theta(x \mid c)$。

如果模型先输出 logits：

$$
s = f_\theta(z) \in \mathbb{R}^{K}
$$

则分类概率通常由 softmax 给出：

$$
p_\theta(y=k \mid x)
= \frac{\exp(s_k)}{\sum_{j=1}^{K}\exp(s_j)}
$$

---

### 1.6 Loss Function

训练需要一个目标函数来衡量模型预测和真实目标之间的差异：

$$
\mathcal{L}(\theta)
= \frac{1}{n}\sum_{i=1}^{n}
\ell(f_\theta(\phi(x_i)), y_i)
$$


---

### 1.7 Optimization

训练模型就是寻找一组更好的参数：

$$
\theta^* = \arg\min_\theta \mathcal{L}(\theta)
$$

所谓的`更好`往往指最小化 loss function $\mathcal{L}$，因此训练过程可以看成一个优化问题。

为了真正优化参数，我们往往需要先计算梯度。反向传播（Backpropagation）就是高效计算
$\nabla_\theta \mathcal{L}$ 的过程：先做前向计算得到 loss，再按计算图从后往前用链式法则传递梯度。

若模型写成复合函数

$$
f_\theta = f^{(m)} \circ \cdots \circ f^{(1)}
$$

则反向传播本质是在逐层计算局部导数并相乘：

$$
\frac{\partial \mathcal{L}}{\partial \theta_l}
= \frac{\partial \mathcal{L}}{\partial h_l}
\frac{\partial h_l}{\partial \theta_l}
$$

得到梯度后，优化器执行参数更新，例如梯度下降：

$$
  \theta_{t+1}=\theta_t-\eta\nabla_\theta\mathcal{L}(\theta_t)
$$

因此可以把训练主线概括为：前向计算 $\rightarrow$ loss $\rightarrow$ 反向传播求梯度 $\rightarrow$ 参数更新。



## 2. 从 Model System 看数学工具

上面的系统可以压缩成一条主线：

```text
Data
→ Representation
→ Parameterized Function
→ Prediction Distribution
→ Loss
→ Gradient
→ Optimization
→ Trained Model
```

每一段都对应一类数学工具。

| 模型中的位置 | 核心问题 | 需要的数学工具 |
| --- | --- | --- |
| Data / Representation | 输入、参数、hidden state 如何表示？ | Linear Algebra, Tensor |
| Parameterized Function | 模型如何被写成函数复合？ | Calculus, Matrix Calculus |
| Prediction Distribution | 输出如何表示为概率？ | Probability |
| Loss Function | 预测和真实目标之间的差异如何度量？ | Information Theory, Statistics |
| Gradient | loss 如何随参数变化？ | Calculus, Matrix Calculus |
| Optimization | 参数如何被更新？ | Optimization |
| Large-scale Computation | 训练如何保持稳定和高效？ | Numerical Methods, Numerical Linear Algebra |
| Structure | token、图像 patch、节点、关系如何组织？ | Graph Theory, Geometry |

---

## 3. 数学工具如何进入模型

### Linear Algebra：表示和变换

线性代数回答：

> 模型中的对象如何被表示和变换？

模型的`计算`本质就是矩阵乘法和张量运算，因此线性代数是这一切的基础。

例如：

- $x \xrightarrow{\phi} z$
- $h^{(l)}=\sigma\!\left(W^{(l)}h^{(l-1)}+b^{(l)}\right)$
- attention 中的 $Q=XW_Q$、$K=XW_K$、$V=XW_V$ 
- LoRA低秩更新：$\Delta W=BA$


### Calculus / Matrix Calculus：变化和梯度

微积分回答：

> 模型输出和 loss 如何随着参数变化？

它对应模型系统中的：

- $s=f_{\theta}(z)$
- $\mathcal{L}(\theta)=\ell(s,y)$
- $\nabla_{\theta}\mathcal{L}(\theta)$

相关连接：
- partial derivative 描述多参数变化；
- gradient 给出 loss 对参数的更新方向；
- chain rule 支撑 backpropagation；
- Jacobian / Hessian 用来分析多输出函数、曲率和 loss landscape；

### Probability：不确定性建模

概率论回答：

> 模型如何表达不确定性？

它对应模型系统中的：

- $s=f_{\theta}(z)$
- $p_{\theta}(y\mid x)=\operatorname{softmax}(s)$

典型连接：

- 分类模型输出类别分布；
- 语言模型输出 next-token distribution；
- 生成模型学习数据分布；
- Bayesian 方法用 posterior 描述参数或预测的不确定性。

### Statistics：从样本估计规律

统计学回答：

> 如何从有限数据中估计模型，并判断它是否可靠？

它对应模型系统中的：

- $\mathcal{D}=\{(x_i,y_i)\}_{i=1}^{n}$
- $\hat{\theta}_{\mathrm{MLE}}=\arg\max_{\theta}\prod_{i=1}^{n}p_{\theta}(y_i\mid x_i)$
- $\mathbb{E}_{(x,y)\sim \mathcal{D}_{\mathrm{train}}}[\ell]-\mathbb{E}_{(x,y)\sim \mathcal{D}_{\mathrm{test}}}[\ell]$

典型连接：

- MLE / MAP 是参数估计方法；
- bias-variance tradeoff 解释欠拟合和过拟合；
- train / validation / test 用于模型选择；
- confidence interval、hypothesis testing、ablation study 用于实验可信度分析。


### Information Theory：分布差异和 loss

信息论回答：

> 如何度量预测分布和目标分布之间的差异？

它对应模型系统中的：

- $p_{\theta}(y\mid x)$
- $\mathcal{L}_{\mathrm{CE}}=-\sum_{k=1}^{K} y_k\log p_{\theta}(y=k\mid x)$

典型连接：

- cross entropy 是分类和语言模型最常见的 loss；
- KL divergence 用于 VAE、distillation、RLHF / DPO 等分布匹配问题；
- entropy 描述预测分布的不确定性；
- perplexity 是语言模型中 cross entropy 的常见评估形式。


### Optimization：训练模型

优化理论回答：

> 给定 loss，参数如何被训练出来？

它对应模型系统中的：

- $\theta^*=\arg\min_{\theta}\mathcal{L}(\theta)$
- $g_t=\nabla_{\theta}\mathcal{L}(\theta_t)$
- $\theta_{t+1}=\theta_t-\eta g_t$

典型连接：

- gradient descent 是最基本的训练形式；
- SGD / mini-batch SGD 连接数据采样和参数更新；
- Adam / AdamW 是深度学习和大模型训练中的常用 optimizer；
- non-convex optimization 用来理解深度网络的 loss landscape。


