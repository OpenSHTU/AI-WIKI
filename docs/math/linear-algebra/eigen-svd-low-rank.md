# 矩阵的谱与性质

本章从多个视角分析矩阵的内在性质：秩与迹描述矩阵的"信息量"，特征值揭示矩阵的"作用方式"，正定性刻画矩阵的"方向性"，矩阵范数度量矩阵的"大小"，条件数衡量计算的"稳定性"。这些工具在优化、统计和深度学习中无处不在。

## 1. 秩（Rank）

### 1.1 定义

矩阵 $A \in \mathbb{R}^{m \times n}$ 的**秩**（rank）$\text{rank}(A)$ 是其列空间（等价地，行空间）的维数，等于 RREF 中主元的个数。

$$
\text{rank}(A) = \dim(\text{Col}(A)) = \dim(\text{Row}(A))
$$

### 1.2 基本性质

| 性质 | 公式 |
|------|------|
| 上界 | $\text{rank}(A) \le \min(m, n)$ |
| 满秩 | $\text{rank}(A) = \min(m, n)$（列满秩或行满秩） |
| 转置不变 | $\text{rank}(A^\top) = \text{rank}(A)$ |
| 乘积上界 | $\text{rank}(AB) \le \min(\text{rank}(A), \text{rank}(B))$ |
| 秩-零化度定理 | $\text{rank}(A) + \text{nullity}(A) = n$ |
| 加法 | $\text{rank}(A + B) \le \text{rank}(A) + \text{rank}(B)$ |

### 1.3 低秩结构

若矩阵的秩 $r \ll \min(m, n)$，则称其为**低秩矩阵**（low-rank matrix）。低秩矩阵可以分解为：

$$
A = U V^\top, \quad U \in \mathbb{R}^{m \times r},\ V \in \mathbb{R}^{n \times r}
$$

存储开销从 $mn$ 降为 $r(m+n)$。LoRA 正是利用这一思想，用 $\Delta W = BA$（$B \in \mathbb{R}^{d \times r}$，$A \in \mathbb{R}^{r \times d}$）近似大矩阵的更新。

## 2. 迹（Trace）

### 2.1 定义

方阵 $A \in \mathbb{R}^{n \times n}$ 的**迹**（trace）是主对角线元素之和：

$$
\text{tr}(A) = \sum_{i=1}^{n} A_{ii}
$$

### 2.2 基本性质

| 性质 | 公式 |
|------|------|
| 线性 | $\text{tr}(A + B) = \text{tr}(A) + \text{tr}(B)$，$\text{tr}(cA) = c\,\text{tr}(A)$ |
| 转置不变 | $\text{tr}(A^\top) = \text{tr}(A)$ |
| 循环置换 | $\text{tr}(ABC) = \text{tr}(BCA) = \text{tr}(CAB)$ |
| 与特征值的关系 | $\text{tr}(A) = \sum_{i=1}^{n} \lambda_i$ |
| 内积形式 | $\text{tr}(A^\top B) = \sum_{i,j} A_{ij} B_{ij}$（Frobenius 内积） |

循环置换性质 $\text{tr}(AB) = \text{tr}(BA)$ 在矩阵微积分中极为有用（即使 $AB \ne BA$）。

## 3. 特征值与特征向量

### 3.1 定义

设 $A \in \mathbb{R}^{n \times n}$。若存在**非零向量** $\mathbf{v} \in \mathbb{R}^n$ 和标量 $\lambda$，使得：

$$
A\mathbf{v} = \lambda \mathbf{v}
$$

则称 $\lambda$ 为 $A$ 的**特征值**（eigenvalue），$\mathbf{v}$ 为对应的**特征向量**（eigenvector）。

**几何直觉**：特征向量是被矩阵变换后**方向不变**（只发生伸缩）的向量，$\lambda$ 是伸缩比例。

> 特征向量不能是零向量。特征值可以是负数或零（甚至复数）。

更具体地说，矩阵会把一般向量旋转、剪切、拉伸到新的方向；而特征向量是其中的“稳定方向”。沿这些方向观察矩阵，复杂的线性变换会退化成一个标量倍数：

- $\lambda > 1$：沿该方向被放大；
- $0 < \lambda < 1$：沿该方向被压缩；
- $\lambda < 0$：方向被反向，并按 $|\lambda|$ 缩放；
- $\lambda = 0$：该方向被压到零空间中。

因此，特征值描述的是矩阵在关键方向上的作用强度。最大特征值的模常用于判断迭代系统是否稳定；最小特征值是否接近 0，则常提示矩阵可能接近奇异，数值计算会变得不稳定。

### 3.2 特征多项式

由 $A\mathbf{v} = \lambda\mathbf{v}$ 得 $(\lambda I - A)\mathbf{v} = \mathbf{0}$，要使非零解存在，系数矩阵须奇异：

$$
\det(\lambda I - A) = 0
$$

展开得关于 $\lambda$ 的 $n$ 次多项式——**特征多项式**（characteristic polynomial）：

$$
f_A(\lambda) = \det(\lambda I_n - A)
$$

其根即为所有特征值（在复数域内共有 $n$ 个，计重数）。

### 3.3 特征子空间

对应于特征值 $\lambda$ 的**特征子空间**（eigenspace）：

$$
E_\lambda = \ker(\lambda I - A) = \{ \mathbf{v} \in \mathbb{R}^n \mid A\mathbf{v} = \lambda\mathbf{v} \}
$$

其维数称为 $\lambda$ 的**几何重数**（geometric multiplicity）；$\lambda$ 作为特征多项式的根的重数称为**代数重数**（algebraic multiplicity）。

### 3.4 关键性质汇总

| 性质 | 说明 |
|------|------|
| $\text{tr}(A) = \sum_i \lambda_i$ | 迹等于特征值之和 |
| $\det(A) = \prod_i \lambda_i$ | 行列式等于特征值之积 |
| $A$ 可逆 $\iff$ $0$ 不是特征值 | $\lambda = 0$ 的特征子空间 $= \text{Null}(A)$ |
| 非零特征值个数 $\le \text{rank}(A)$ | 秩决定了非零特征值的上限 |
| 不同特征值的特征向量线性无关 | 可用于构造对角化 |
| 相似矩阵具有相同特征值 | 特征值是线性变换的内在性质 |

这些性质的意义在于：迹和行列式把矩阵的整体信息压缩成两个标量；可逆性由是否存在零特征值决定；相似不变性说明特征值不依赖坐标系选择，而是线性变换本身的属性。

### 3.5 实对称矩阵的特殊性质

实对称矩阵（$A = A^\top$）的特征值具有非常好的性质：
- 特征值全为**实数**；
- 不同特征值对应的特征向量**互相正交**；
- 一定可以正交对角化：$A = Q\Lambda Q^\top$（$Q$ 正交，$\Lambda$ 对角）。

这是谱定理（Spectral Theorem）的核心内容，也是 PCA 和 SVD 的理论基础。直观上，实对称矩阵不会产生难以分离的“斜向剪切”：在一组正交坐标轴上，它只是在每个轴向上独立缩放。PCA 正是利用这一点，把数据方差最大的方向作为新的坐标轴。

## 4. 矩阵对角化

### 4.1 定义

若存在**可逆矩阵** $P$，使得：

$$
A = P D P^{-1}
$$

其中 $D = \text{diag}(\lambda_1, \ldots, \lambda_n)$ 是对角矩阵，则称 $A$ **可对角化**（diagonalizable）。此时：
- $D$ 的对角线上是 $A$ 的特征值；
- $P$ 的列向量是对应的特征向量。

### 4.2 可对角化的条件

$A \in \mathbb{R}^{n \times n}$ 可对角化 $\iff$ $A$ 有 $n$ 个线性无关的特征向量。

等价地：每个特征值的几何重数 $=$ 代数重数。

若 $A$ 有 $n$ 个不同的特征值，则 $A$ 必定可对角化（充分条件）。

### 4.3 正交对角化

若 $A = A^\top$（实对称矩阵），则 $A$ 可**正交对角化**：

$$
A = Q \Lambda Q^\top
$$

其中 $Q$ 是正交矩阵（$Q^\top Q = I$），$\Lambda$ 是对角矩阵。这比一般对角化更强，要求特征向量构成标准正交基。

### 4.4 对角化的应用

$$
A^k = P D^k P^{-1} = P \begin{bmatrix} \lambda_1^k & & \\ & \ddots & \\ & & \lambda_n^k \end{bmatrix} P^{-1}
$$

矩阵幂运算转化为标量幂运算，大幅简化计算。RNN 梯度传播中的梯度消失/爆炸，本质上就是权重矩阵特征值绝对值反复相乘的结果（$|\lambda| < 1$ → 消失，$|\lambda| > 1$ → 爆炸）。

## 5. 正定与半正定矩阵

### 5.1 正定矩阵

**实对称矩阵** $A \in \mathbb{R}^{n \times n}$ 是**正定矩阵**（positive definite, PD），当且仅当对所有非零向量 $\mathbf{x} \in \mathbb{R}^n$：

$$
\mathbf{x}^\top A \mathbf{x} > 0 \qquad (A \succ 0)
$$

**几何意义**：正定矩阵定义的二次型曲面是严格"碗状"，有唯一最小值（在原点）。

从二次型看，$\mathbf{x}^\top A\mathbf{x}$ 可以理解为方向 $\mathbf{x}$ 上的“能量”或“曲率”。正定表示所有非零方向上的能量都严格为正，因此没有平坦方向，也没有向下弯曲的方向。在优化中，Hessian 正定意味着局部形状像一个严格凸的碗；在统计中，协方差矩阵半正定来自一个基本事实：任意线性组合的方差都不可能为负。

特征值给出了更直接的判断方式：正定矩阵在每个特征方向上都产生正缩放，最小特征值越大，碗底越“陡”；最小特征值越接近 0，某些方向越平坦，问题也越容易病态。

**等价条件**（以下任一条成立即可判定 $A \succ 0$）：

| 条件 | 说明 |
|------|------|
| 所有特征值 $\lambda_i > 0$ | 谱条件 |
| 存在满秩 $B$ 使得 $A = B^\top B$ | 分解条件 |
| 所有顺序主子式 $\det(A_k) > 0$ | Sylvester 判别法 |
| 存在 Cholesky 分解 $A = LL^\top$ | 数值应用（$L$ 对角线元素全正） |

### 5.2 半正定矩阵

实对称矩阵 $A$ 是**正半定矩阵**（positive semidefinite, PSD），若：

$$
\forall\, \mathbf{x} \in \mathbb{R}^n, \quad \mathbf{x}^\top A \mathbf{x} \ge 0 \qquad (A \succeq 0)
$$

**等价条件**：

| 条件 | 说明 |
|------|------|
| 所有特征值 $\lambda_i \ge 0$ | 谱条件 |
| 存在矩阵 $B$（不要求满秩），使得 $A = B^\top B$ | 分解条件 |
| 所有主子式 $\ge 0$ | Sylvester 弱版本 |

### 5.3 矩阵类型对照

| 类型 | 符号 | 条件 | 特征值 | 几何形状 |
|------|------|------|--------|--------|
| 正定（PD） | $A \succ 0$ | $\mathbf{x}^\top A\mathbf{x} > 0$ | 全 $> 0$ | 严格碗状 |
| 正半定（PSD） | $A \succeq 0$ | $\mathbf{x}^\top A\mathbf{x} \ge 0$ | 全 $\ge 0$ | 碗状（允许平坦方向） |
| 半负定（NSD） | $A \preceq 0$ | $\mathbf{x}^\top A\mathbf{x} \le 0$ | 全 $\le 0$ | 倒碗（允许平坦方向） |
| 负定（ND） | $A \prec 0$ | $\mathbf{x}^\top A\mathbf{x} < 0$ | 全 $< 0$ | 严格倒碗 |
| 不定 | — | 以上均不满足 | 有正有负 | 马鞍面 |

### 5.4 AI 中的应用

| 场景 | 正定/半正定的作用 |
|------|----------------|
| Hessian 矩阵 | $H \succ 0$ $\Rightarrow$ 损失函数严格凸 $\Rightarrow$ 梯度下降收敛到唯一最小值 |
| 协方差矩阵 | 总是 PSD；若数据满秩则 PD |
| 高斯分布 $\mathcal{N}(\mu, \Sigma)$ | 要求 $\Sigma \succ 0$，确保概率密度函数存在 |
| Ridge 回归 | $X^\top X + \lambda I \succ 0$（对任意 $\lambda > 0$），保证可逆性 |
| 核函数 Gram 矩阵 | 必须 PSD（Mercer 条件），保证为合法核函数 |
| Mahalanobis 距离 | $d^2 = (\mathbf{x} - \mu)^\top \Sigma^{-1} (\mathbf{x} - \mu)$，$\Sigma \succ 0$ 保证距离非负 |

## 6. 矩阵范数

### 6.1 为什么需要矩阵范数？

向量有范数（长度），矩阵也需要一种"大小"度量，用于：分析变换的"放大倍数"、衡量矩阵间的距离、正则化损失函数、分析训练稳定性。

### 6.2 Frobenius 范数

$$
\|A\|_F = \sqrt{\sum_{i,j} A_{ij}^2} = \sqrt{\text{tr}(A^\top A)}
$$

- 等同于将矩阵展开为向量后取 $\ell_2$ 范数；
- 与 SVD 的关系：$\|A\|_F = \sqrt{\sum_i \sigma_i^2}$（$\sigma_i$ 为奇异值）；
- 常用于权重衰减（weight decay）正则化：$\mathcal{L}_{\text{reg}} = \lambda \|W\|_F^2$。

### 6.3 谱范数（算子范数）

$$
\|A\|_2 = \sigma_{\max}(A) = \sqrt{\lambda_{\max}(A^\top A)}
$$

- 等于矩阵最大奇异值；
- 几何意义：$A$ 对单位球面上向量的最大拉伸倍数；
- 用于谱归一化（Spectral Normalization）：通过约束每层权重的谱范数控制 Lipschitz 常数，稳定 GAN 训练。

### 6.4 核范数（迹范数）

$$
\|A\|_* = \sum_i \sigma_i
$$

- 等于奇异值之和；
- 是秩（rank）的凸松弛（convex relaxation）；
- 用于矩阵补全、推荐系统中的低秩约束。

## 7. 条件数

### 7.1 定义

矩阵 $A$ 的**条件数**（condition number）定义为：

$$
\kappa(A) = \|A\| \cdot \|A^{-1}\| = \frac{\sigma_{\max}}{\sigma_{\min}}
$$

（取谱范数时，条件数等于最大奇异值与最小非零奇异值之比。）

### 7.2 直觉

条件数衡量线性系统 $A\mathbf{x} = \mathbf{b}$ 对输入扰动的**敏感程度**：

- **$\kappa(A) \approx 1$（良态）**：$\mathbf{b}$ 的小扰动导致 $\mathbf{x}$ 的小变化，数值稳定；
- **$\kappa(A) \gg 1$（病态）**：$\mathbf{b}$ 的微小扰动可能导致 $\mathbf{x}$ 的剧烈变化，数值不稳定。

> 精度为 $\epsilon$ 的浮点运算，在条件数为 $\kappa$ 的矩阵上，结果最多有 $\log_{10}(\kappa)$ 位有效数字损失。

### 7.3 在 AI 中的意义

| 场景 | 条件数的影响 |
|------|------------|
| 梯度下降 | Hessian 条件数大 → loss 曲面细长 → 梯度下降震荡慢收敛 |
| 批归一化（BatchNorm） | 归一化输入降低激活层的"有效条件数"，加速训练 |
| 注意力权重 | 训练初期 $QK^\top / \sqrt{d_k}$ 的缩放防止 softmax 进入饱和区（相当于控制条件数） |
| 矩阵求逆 | 条件数大的矩阵求逆数值误差大，故 Ridge 回归加 $\lambda I$ 降低条件数 |

## 8. Rayleigh 商

### 8.1 定义

对实对称矩阵 $A$ 和非零向量 $\mathbf{x}$，**Rayleigh 商**（Rayleigh quotient）定义为：

$$
R_A(\mathbf{x}) = \frac{\mathbf{x}^\top A \mathbf{x}}{\mathbf{x}^\top \mathbf{x}}
$$

### 8.2 性质

$$
\lambda_{\min}(A) \le R_A(\mathbf{x}) \le \lambda_{\max}(A)
$$

- 最大值在 $\mathbf{x}$ 为最大特征向量时取到；
- 最小值在 $\mathbf{x}$ 为最小特征向量时取到。

Rayleigh 商提供了一种不直接求解特征方程、仅通过优化来逼近最大/最小特征值的方法，是 PCA、LDA 等方法的理论基础。

## 在 AI 中的完整图景

```
矩阵的谱
    ├── 特征值全 > 0  →  正定矩阵  →  凸优化、高斯分布
    ├── 特征值全 ≥ 0  →  半正定矩阵 →  协方差、核方法
    ├── 最大特征值    →  谱范数    →  Lipschitz 约束、GAN 稳定性
    ├── 特征值之比    →  条件数    →  优化收敛速度、数值稳定性
    └── 特征值之和    →  迹        →  矩阵微积分中的梯度公式

低秩结构
    ├── rank(A) = r ≪ n  →  低秩矩阵  →  LoRA、PCA、矩阵补全
    └── 奇异值分解 (SVD) →  见内积空间章节
```
