# 张量代数

深度学习中所有的数据和参数都以张量形式存在——输入序列、图像批次、权重矩阵无不如此。理解张量的代数结构，是读懂模型前向传播、高效使用框架 API、以及理解注意力机制和高阶特征交叉的基础。

---

## 1. 张量的定义

### 1.1 从标量到张量

张量是向量和矩阵向任意维度的推广：

| 名称 | 阶数 | 形状示例 | 深度学习中的例子 |
|------|------|---------|----------------|
| 标量（Scalar） | 0 阶 | $()$ | 损失值 $\ell$，学习率 $\eta$ |
| 向量（Vector） | 1 阶 | $(d,)$ | 词向量，bias 向量 |
| 矩阵（Matrix） | 2 阶 | $(m, n)$ | 权重矩阵 $W$，注意力分数矩阵 |
| 3 阶张量 | 3 阶 | $(B, L, d)$ | 一个 batch 的序列表示 |
| 4 阶张量 | 4 阶 | $(B, C, H, W)$ | 图像卷积特征图 |

### 1.2 形式定义

$n$ 阶张量 $\mathcal{T} \in \mathbb{R}^{d_1 \times d_2 \times \cdots \times d_n}$ 是一个多维数组，其中每个元素由 $n$ 个索引唯一确定：

$$
\mathcal{T}_{i_1, i_2, \ldots, i_n}, \quad 1 \le i_k \le d_k
$$

每个维度 $d_k$ 称为该**轴**（axis）的大小，$n$ 个维度的元组 $(d_1, \ldots, d_n)$ 称为张量的**形状**（shape）。

### 1.3 物理直觉

张量的每个轴通常有具体含义：

```
X ∈ ℝ^{B × L × d}
│         │    └── 特征维度（embedding dimension）
│         └────── 序列长度（sequence length）
└──────────────── 批次大小（batch size）
```

---

## 2. 基本张量运算

### 2.1 逐元素运算（Element-wise）

形状相同的两个张量可以逐元素地进行加法、乘法等运算：

$$
(\mathcal{A} + \mathcal{B})_{i_1 \ldots i_n} = \mathcal{A}_{i_1 \ldots i_n} + \mathcal{B}_{i_1 \ldots i_n}
$$

这对应了神经网络中的残差连接（$X + \text{Attn}(X)$）和 GELU 等逐元素激活函数。

### 2.2 外积（Outer Product）

向量 $\mathbf{u} \in \mathbb{R}^m$ 和 $\mathbf{v} \in \mathbb{R}^n$ 的外积是一个矩阵：

$$
(\mathbf{u} \otimes \mathbf{v})_{ij} = u_i v_j \in \mathbb{R}^{m \times n}
$$

推广：两个任意阶张量 $\mathcal{A} \in \mathbb{R}^{d_1 \times \cdots \times d_p}$ 和 $\mathcal{B} \in \mathbb{R}^{e_1 \times \cdots \times e_q}$ 的外积是 $p+q$ 阶张量。

### 2.3 张量收缩（Contraction）

**收缩**是矩阵乘法的推广：对两个张量共享的一个（或多个）轴求和，将其"消去"。

矩阵乘法 $C = AB$ 是收缩的特例：

$$
C_{ik} = \sum_j A_{ij} B_{jk}
$$

更一般的收缩，例如 $\mathcal{C}_{il} = \sum_{j,k} \mathcal{A}_{ijk} \mathcal{B}_{jkl}$，在多头注意力和卷积中普遍出现。

### 2.4 Hadamard 积（Element-wise Product）

$$
(\mathcal{A} \odot \mathcal{B})_{i_1 \ldots i_n} = \mathcal{A}_{i_1 \ldots i_n} \cdot \mathcal{B}_{i_1 \ldots i_n}
$$

用于 LSTM/GRU 中的门控机制（gate $\odot$ input）。

---

## 3. Einstein 求和约定（Einsum）

### 3.1 符号规则

Einstein 求和约定（Einstein summation）通过简洁的下标符号表达张量运算：

- **重复下标**：表示在该轴上求和（自动 sum over）；
- **自由下标**：出现在输出中，保留。

经典例子：矩阵乘法 $C_{ik} = \sum_j A_{ij} B_{jk}$ 写为：

$$
C_{ik} = A_{ij} B_{jk}
$$

（$j$ 重复 → 对 $j$ 求和，$i, k$ 自由 → 保留在输出中。）

### 3.2 常用运算的 Einsum 表达

| 运算 | 数学形式 | Einsum 记法 |
|------|---------|------------|
| 矩阵乘法 | $(AB)_{ik} = \sum_j A_{ij} B_{jk}$ | `ij,jk->ik` |
| 批量矩阵乘法 | $(ABatch)_{bik} = \sum_j A_{bij} B_{bjk}$ | `bij,bjk->bik` |
| 点积 | $\mathbf{u} \cdot \mathbf{v} = \sum_i u_i v_i$ | `i,i->` |
| 外积 | $(uv^\top)_{ij} = u_i v_j$ | `i,j->ij` |
| 迹 | $\text{tr}(A) = \sum_i A_{ii}$ | `ii->` |
| 多头注意力分数 | $S_{bhi j} = \sum_k Q_{bhik} K_{bhjk}$ | `bhid,bhjd->bhij` |

### 3.3 在 PyTorch/NumPy 中的使用

```python
import torch

# 矩阵乘法
C = torch.einsum('ij,jk->ik', A, B)

# 批量矩阵乘法（b = batch, i/j = seq len, d = dim）
# 计算注意力分数: Q @ K^T
scores = torch.einsum('bqd,bkd->bqk', Q, K)

# 加权求和: scores @ V
out = torch.einsum('bqk,bkd->bqd', attn_weights, V)
```

---

## 4. 形状操作

### 4.1 Reshape（重塑）

在**不改变元素总数**的前提下重新排列维度：

$$
\mathbb{R}^{B \times L \times d} \xrightarrow{\text{reshape}} \mathbb{R}^{B \times L \times H \times d_h}
$$

（将 $d$ 维拆分为 $H$ 个头，每头维度 $d_h = d/H$，用于多头注意力。）

Reshape 不复制数据，只改变如何解释内存中的连续数组（view 操作）。

### 4.2 Permute / Transpose（轴置换）

重新排列轴的顺序：

$$
\mathbb{R}^{B \times H \times L \times d_h} \xrightarrow{\text{permute}(0,2,1,3)} \mathbb{R}^{B \times L \times H \times d_h}
$$

矩阵转置是特例：$A^\top = \text{permute}(A, [1, 0])$。

### 4.3 广播（Broadcasting）

当两个张量形状不完全相同但**可兼容**时，框架自动"扩展"较小的张量以匹配较大的张量，无需显式复制数据。

**广播规则**（从最后一个维度向前对齐）：
1. 维度大小相同 → 直接对应；
2. 某维度大小为 1 → 沿该轴广播；
3. 维度不存在 → 视为大小 1 的维度。

```
A: (B, 1, d)    →  广播为 (B, L, d)
B: (1, L, d)    →  广播为 (B, L, d)
A + B: (B, L, d)
```

注意力中位置编码（positional encoding）加到 token embedding 上用的就是广播。

### 4.4 Squeeze / Unsqueeze（增减维度）

- `unsqueeze(dim)` / `expand_dims`：在指定位置插入大小为 1 的维度；
- `squeeze(dim)`：删除大小为 1 的维度。

常用于对齐不同模块输出的形状。

---

## 5. 张量分解

### 5.1 为什么需要张量分解？

高阶张量的参数量随阶数指数增长（维数灾难）。张量分解将高维结构分解为若干低秩分量，实现**压缩**与**解释**。

### 5.2 CP 分解（CANDECOMP/PARAFAC）

将 $n$ 阶张量分解为 $r$ 个秩-1 张量的和：

$$
\mathcal{T} \approx \sum_{k=1}^{r} \mathbf{a}_k^{(1)} \otimes \mathbf{a}_k^{(2)} \otimes \cdots \otimes \mathbf{a}_k^{(n)}
$$

是矩阵秩分解 $A = \sum_k \mathbf{u}_k \mathbf{v}_k^\top$ 的高阶推广。

### 5.3 Tucker 分解

$$
\mathcal{T} \approx \mathcal{G} \times_1 U^{(1)} \times_2 U^{(2)} \times_3 U^{(3)}
$$

其中 $\mathcal{G}$ 是小核张量（core tensor），$U^{(i)}$ 是每个模式的因子矩阵。可以看作每个轴上的 PCA。

### 5.4 张量列车分解（Tensor Train / MPS）

$$
\mathcal{T}_{i_1 i_2 \ldots i_n} = G^{(1)}_{i_1} G^{(2)}_{i_2} \cdots G^{(n)}_{i_n}
$$

其中每个 $G^{(k)}$ 是 3 阶张量（矩阵乘积的推广）。张量列车将指数级的参数量压缩为线性级，被用于压缩大型语言模型的 Embedding 层和全连接层。

---

## 6. 深度学习中的关键张量操作

### 6.1 批量矩阵乘法（BMM）

$$
\text{BMM}: \mathbb{R}^{B \times m \times k} \times \mathbb{R}^{B \times k \times n} \to \mathbb{R}^{B \times m \times n}
$$

Transformer 的注意力计算：$\text{Scores} = QK^\top / \sqrt{d_k}$，对整个 batch 并行。

### 6.2 多头注意力的张量流

```
输入 X: (B, L, d)
        ↓ 投影（线性层）
Q, K, V: (B, L, d) → reshape → (B, L, H, d_h) → permute → (B, H, L, d_h)
        ↓ 注意力分数
scores: einsum('bhqd,bhkd->bhqk') → (B, H, L, L)
        ↓ softmax + dropout
attn: (B, H, L, L)
        ↓ 加权求和
out: einsum('bhqk,bhkd->bhqd') → (B, H, L, d_h) → permute → (B, L, H, d_h) → reshape → (B, L, d)
```

### 6.3 卷积作为张量运算

2D 卷积可以看作：对输入张量 $(B, C_{in}, H, W)$ 和滤波器张量 $(C_{out}, C_{in}, k_H, k_W)$ 做局部区域的内积收缩，输出 $(B, C_{out}, H', W')$。

---

## 在 AI 中的应用

| 张量概念 | AI/ML 中的体现 |
|---------|--------------|
| 3 阶张量 $(B, L, d)$ | Transformer 中一个 batch 的 token 表示 |
| 4 阶张量 $(B, H, L, L)$ | 多头注意力权重矩阵（每头、每个 query-key 对） |
| Einsum | 注意力分数计算、批量内积、高效张量运算 |
| Reshape + Permute | 多头注意力中头的拆分与合并 |
| 广播 | 位置编码相加、归一化参数的扩展 |
| 低秩张量分解 | 模型压缩、参数高效微调（如 LoRA 是矩阵低秩分解的特例） |
