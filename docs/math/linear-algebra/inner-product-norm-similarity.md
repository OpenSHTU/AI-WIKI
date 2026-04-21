# 内积空间

内积空间在线性空间的基础上引入了**几何结构**：长度、角度、正交性。这些概念在 AI 中无处不在——注意力机制的相似度计算、LoRA 的低秩压缩、PCA 的主成分提取，都离不开内积与正交的思想。

## 1. 欧氏空间与内积

### 1.1 什么是欧氏空间

**欧氏空间**（Euclidean Space）通常指的是带有内积的实向量空间，最典型的例子是 $\mathbb{R}^n$。

在欧氏空间中，我们可以定义：
- **内积**（inner product）：衡量两个向量之间的"相关程度"；
- **范数**（norm）：衡量向量的"长度"；
- **夹角**（angle）：衡量两向量的方向关系；
- **正交性**（orthogonality）：两向量互相垂直；
- **正交基**（orthogonal basis）与**标准正交基**（orthonormal basis）。

### 1.2 内积的定义

**内积**是定义在向量空间 $V$ 上的一个二元运算 $\langle \cdot, \cdot \rangle: V \times V \to \mathbb{R}$，满足：

| 性质 | 公式 |
|------|------|
| **对称性** | $\langle \mathbf{u}, \mathbf{v} \rangle = \langle \mathbf{v}, \mathbf{u} \rangle$ |
| **线性性**（第一分量） | $\langle c\mathbf{u} + \mathbf{w}, \mathbf{v} \rangle = c\langle \mathbf{u}, \mathbf{v} \rangle + \langle \mathbf{w}, \mathbf{v} \rangle$ |
| **正定性** | $\langle \mathbf{v}, \mathbf{v} \rangle \ge 0$，且 $\langle \mathbf{v}, \mathbf{v} \rangle = 0 \iff \mathbf{v} = \mathbf{0}$ |

> 内积是**抽象**的。$\mathbb{R}^n$ 中最常用的是**点积**（dot product）$\langle \mathbf{u}, \mathbf{v} \rangle = \mathbf{u}^\top \mathbf{v} = \sum_i u_i v_i$，但也可以定义加权内积 $\langle \mathbf{u}, \mathbf{v} \rangle_A = \mathbf{u}^\top A \mathbf{v}$（其中 $A$ 正定）等各种形式。

### 1.3 范数与夹角

由内积导出的**（欧氏）范数**：

$$
\|\mathbf{v}\| = \sqrt{\langle \mathbf{v}, \mathbf{v} \rangle}
$$

两向量之间的**夹角** $\theta$：

$$
\cos\theta = \frac{\langle \mathbf{u}, \mathbf{v} \rangle}{\|\mathbf{u}\| \cdot \|\mathbf{v}\|}
$$

两向量**正交**（orthogonal）：$\langle \mathbf{u}, \mathbf{v} \rangle = 0$（即 $\theta = 90°$）。

**Cauchy-Schwarz 不等式**：

$$
|\langle \mathbf{u}, \mathbf{v} \rangle| \le \|\mathbf{u}\| \cdot \|\mathbf{v}\|
$$

## 2. 正交基与标准正交基

### 2.1 正交基

向量组 $\{\mathbf{u}_1, \mathbf{u}_2, \ldots, \mathbf{u}_n\}$ 是**正交基**（orthogonal basis），若：
- 任意两个不同向量正交：$\langle \mathbf{u}_i, \mathbf{u}_j \rangle = 0$ 对 $i \ne j$；
- 每个向量非零：$\mathbf{u}_i \ne \mathbf{0}$。

### 2.2 标准正交基

在正交基的基础上，要求每个向量都是单位向量（长度为 1），即得到**标准正交基**（orthonormal basis）：

$$
\langle \mathbf{q}_i, \mathbf{q}_j \rangle = \delta_{ij} =
\begin{cases} 1 & i = j \\ 0 & i \ne j \end{cases}
$$

用矩阵表示：若 $Q = [\mathbf{q}_1 \mid \mathbf{q}_2 \mid \cdots \mid \mathbf{q}_n]$，则 $Q^\top Q = I$。

### 2.3 正交基的优势

- **投影简单**：向量 $\mathbf{v}$ 在 $\mathbf{q}_i$ 方向的投影系数 $c_i = \langle \mathbf{v}, \mathbf{q}_i \rangle$；
- **坐标计算直接**：$\mathbf{v} = \sum_i \langle \mathbf{v}, \mathbf{q}_i \rangle \mathbf{q}_i$；
- **数值稳定性好**：避免了普通基的条件数问题。

## 3. Gram-Schmidt 正交化

### 3.1 目的

**Gram-Schmidt 正交化**（Gram-Schmidt Orthogonalization）的目的是：给定一组任意基 $\{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_n\}$，构造出一组等价的**标准正交基** $\{\mathbf{q}_1, \mathbf{q}_2, \ldots, \mathbf{q}_n\}$（张成同一个空间）。

### 3.2 算法过程

**第一步**：取 $\mathbf{v}_1$，单位化：

$$
\mathbf{u}_1 = \mathbf{v}_1, \quad \mathbf{q}_1 = \frac{\mathbf{u}_1}{\|\mathbf{u}_1\|}
$$

**第二步**：从 $\mathbf{v}_2$ 中减去在 $\mathbf{q}_1$ 方向的分量（投影），再单位化：

$$
\mathbf{u}_2 = \mathbf{v}_2 - \langle \mathbf{v}_2, \mathbf{q}_1 \rangle \mathbf{q}_1, \quad \mathbf{q}_2 = \frac{\mathbf{u}_2}{\|\mathbf{u}_2\|}
$$

**第 $k$ 步**：从 $\mathbf{v}_k$ 中减去在所有已有基向量方向上的投影：

$$
\mathbf{u}_k = \mathbf{v}_k - \sum_{j=1}^{k-1} \langle \mathbf{v}_k, \mathbf{q}_j \rangle \mathbf{q}_j, \quad \mathbf{q}_k = \frac{\mathbf{u}_k}{\|\mathbf{u}_k\|}
$$

**直觉**：每一步都是"去掉已有方向的成分，保留垂直方向的新信息"。

## 4. QR 分解

### 4.1 定义

设 $A \in \mathbb{R}^{m \times n}$（$m \ge n$，列线性无关），则 $A$ 可以分解为：

$$
A = QR
$$

其中：
- $Q \in \mathbb{R}^{m \times n}$ 的列是**标准正交**的（$Q^\top Q = I_n$）；
- $R \in \mathbb{R}^{n \times n}$ 是**上三角矩阵**（且对角线元素为正）。

### 4.2 从 Gram-Schmidt 推导 QR

对 $A = [\mathbf{a}_1 \mid \mathbf{a}_2 \mid \cdots \mid \mathbf{a}_n]$ 施行 Gram-Schmidt，得到标准正交基 $Q = [\mathbf{q}_1 \mid \cdots \mid \mathbf{q}_n]$。

由于每个 $\mathbf{a}_j$ 是 $\mathbf{q}_1, \ldots, \mathbf{q}_j$ 的线性组合，可以写出：

$$
\mathbf{a}_j = \sum_{i=1}^{j} r_{ij} \mathbf{q}_i = r_{1j}\mathbf{q}_1 + r_{2j}\mathbf{q}_2 + \cdots + r_{jj}\mathbf{q}_j
$$

其中 $r_{ij} = \langle \mathbf{a}_j, \mathbf{q}_i \rangle$（$i < j$），$r_{jj} = \|\mathbf{u}_j\|$。用矩阵形式即得 $A = QR$，$R$ 的 $(i,j)$ 元素 $r_{ij} = \mathbf{q}_i^\top \mathbf{a}_j$（$i \le j$），$i > j$ 时为 0。

### 4.3 为什么要用"标准正交"？

因为我们需要 $Q^\top Q = I$，从而：

$$
A = QR \implies Q^\top A = Q^\top QR = IR = R
$$

可以直接用 $R = Q^\top A$ 快速求出 $R$。

若 $Q$ 只是正交（列之间正交但长度 $\ne 1$），则 $Q^\top Q = D \ne I$（对角矩阵），需要额外处理对角缩放，计算更复杂，且数值稳定性更差。

### 4.4 QR 分解的应用

| 应用 | 说明 |
|------|------|
| **最小二乘** | $A^\top A \mathbf{x} = A^\top \mathbf{b}$ 化为 $R\mathbf{x} = Q^\top\mathbf{b}$，后向代入即可 |
| **数值稳定** | 比直接用 $(A^\top A)^{-1}$ 条件数更小 |
| **正交基提取** | $Q$ 的列就是 $A$ 的列空间的标准正交基 |

## 5. 正交矩阵

### 5.1 定义

方阵 $Q \in \mathbb{R}^{n \times n}$ 是**正交矩阵**（orthogonal matrix），若：

$$
Q^\top Q = Q Q^\top = I
$$

即 $Q^{-1} = Q^\top$。正交矩阵的列（同时也是行）构成 $\mathbb{R}^n$ 的标准正交基。

### 5.2 正交矩阵的性质

| 性质 | 说明 |
|------|------|
| $\det(Q) = \pm 1$ | 保持（或翻转）有向体积 |
| $\|Q\mathbf{x}\| = \|\mathbf{x}\|$ | 保持向量长度（等距变换） |
| $\langle Q\mathbf{u}, Q\mathbf{v} \rangle = \langle \mathbf{u}, \mathbf{v} \rangle$ | 保持内积（即保持夹角） |
| 特征值模为 1 | 实正交矩阵的特征值为 $\pm 1$ 或共轭复数对 $e^{\pm i\theta}$ |

正交矩阵代表的变换是**旋转**（$\det = 1$）或**旋转+反射**（$\det = -1$）。

## 6. 正交对角化

### 6.1 从对角化到正交对角化

在[线性变换](./linear-transformations)中，我们讨论了矩阵对角化 $A = PDP^{-1}$，其中 $P$ 是特征向量矩阵（不要求正交）。

**正交对角化**（Orthogonal Diagonalization）要求更强：$P$ 不仅可逆，而且是**正交矩阵**（即 $P^{-1} = P^\top$），从而：

$$
A = Q D Q^\top
$$

其中 $Q$ 是正交矩阵，$D$ 是对角矩阵。

### 6.2 可正交对角化的条件

> **谱定理（Spectral Theorem）**：实矩阵 $A$ 可正交对角化，当且仅当 $A$ 是**对称矩阵**（$A^\top = A$）。

对称矩阵的美好性质：
- 特征值全为**实数**；
- 不同特征值对应的特征向量**两两正交**；
- 一定有 $n$ 个线性无关的特征向量（可对角化）。

### 6.3 正交对角化算法

1. 验证 $A = A^\top$；
2. 求特征多项式 $\det(\lambda I - A) = 0$，解出特征值 $\lambda_1, \ldots, \lambda_k$（实数）；
3. 对每个特征值求特征子空间，在子空间内用 Gram-Schmidt 正交化得到正交特征向量；
4. 将所有特征向量单位化，排成 $Q$；$D = \text{diag}(\lambda_1, \ldots, \lambda_n)$；
5. 验证 $A = QDQ^\top$。

## 7. 奇异值分解（SVD）

### 7.1 动机

特征值分解要求方阵且（理想情况下）可对角化，但实际中的矩阵往往是长方形的（如数据矩阵 $X \in \mathbb{R}^{m \times n}$，$m \ne n$）。**奇异值分解**（Singular Value Decomposition, SVD）推广了特征值分解，适用于任意矩阵。

### 7.2 SVD 的定义

任意矩阵 $A \in \mathbb{R}^{m \times n}$（$m \ge n$）可以分解为：

$$
A = U \Sigma V^\top
$$

其中：
- $U \in \mathbb{R}^{m \times m}$：正交矩阵，列向量称为**左奇异向量**；
- $\Sigma \in \mathbb{R}^{m \times n}$：对角形矩阵，对角线上是**奇异值** $\sigma_1 \ge \sigma_2 \ge \cdots \ge \sigma_r > 0$（$r = \text{rank}(A)$），其余位置为 0；
- $V \in \mathbb{R}^{n \times n}$：正交矩阵，列向量称为**右奇异向量**。

### 7.3 SVD 与特征值的关系

$$
A^\top A = V \Sigma^\top U^\top U \Sigma V^\top = V (\Sigma^\top \Sigma) V^\top
$$

$$
A A^\top = U \Sigma V^\top V \Sigma^\top U^\top = U (\Sigma \Sigma^\top) U^\top
$$

即：$V$ 的列是 $A^\top A$ 的特征向量，$U$ 的列是 $A A^\top$ 的特征向量，奇异值 $\sigma_i = \sqrt{\lambda_i(A^\top A)}$。

### 7.4 低秩近似（Truncated SVD）

取前 $k$ 个奇异值和对应的奇异向量：

$$
A \approx A_k = U_k \Sigma_k V_k^\top = \sum_{i=1}^{k} \sigma_i \mathbf{u}_i \mathbf{v}_i^\top
$$

$A_k$ 是所有秩不超过 $k$ 的矩阵中，与 $A$ 的 Frobenius 范数意义下**最接近**的矩阵（Eckart-Young 定理）。

### 7.5 SVD 的应用

| 应用 | 说明 |
|------|------|
| **PCA** | 数据矩阵的右奇异向量即主成分方向；奇异值反映主成分的重要性 |
| **LoRA** | 用低秩矩阵 $BA$ 近似权重更新 $\Delta W$，减少参数量 |
| **图像压缩** | 保留前 $k$ 个奇异值，压缩存储 |
| **推荐系统** | 矩阵分解找出用户-物品的潜在因子 |
| **数值求解** | 求矩阵的伪逆 $A^+ = V \Sigma^+ U^\top$ |

## 8. 二次型

### 8.1 定义

设 $\mathbf{x} \in \mathbb{R}^n$，$A \in \mathbb{R}^{n \times n}$ 是对称矩阵（$A^\top = A$），形式：

$$
Q(\mathbf{x}) = \mathbf{x}^\top A \mathbf{x} = \sum_{i,j} A_{ij} x_i x_j
$$

称为由 $A$ 定义的**二次型**（quadratic form）。

### 8.2 二次型的规范化

利用对称矩阵的正交对角化 $A = QDQ^\top$，令 $\mathbf{y} = Q^\top \mathbf{x}$（坐标变换），则：

$$
Q(\mathbf{x}) = \mathbf{x}^\top QDQ^\top \mathbf{x} = \mathbf{y}^\top D \mathbf{y} = \sum_{i=1}^{n} \lambda_i y_i^2
$$

二次型在特征向量基下化为只含平方项的**标准形**。

### 8.3 二次型的符号

二次型的符号由矩阵 $A$ 的特征值决定：

| $A$ 的类型 | 特征值条件 | $Q(\mathbf{x})$ 的符号 |
|------------|-----------|----------------------|
| 正定（PD） | 所有 $\lambda_i > 0$ | $> 0$（$\mathbf{x} \ne \mathbf{0}$） |
| 正半定（PSD） | 所有 $\lambda_i \ge 0$ | $\ge 0$ |
| 负定（ND） | 所有 $\lambda_i < 0$ | $< 0$（$\mathbf{x} \ne \mathbf{0}$） |
| 不定（Indefinite） | 有正有负 | 无确定符号 |

二次型的正定性在优化和统计中至关重要，详见[正定与半正定矩阵](./eigen-svd-low-rank)。

## 在 AI 中的应用

| 概念 | AI/ML 中的体现 |
|------|--------------|
| 内积 | 注意力分数 $\text{score}(Q, K) = \dfrac{QK^\top}{\sqrt{d_k}}$；余弦相似度 |
| 范数 | L2 正则化 $\|\theta\|^2$；梯度裁剪 $\|\nabla\|$ |
| 正交基 | 数值稳定的权重初始化（正交初始化） |
| Gram-Schmidt | 正交化多头注意力的 $Q, K$ 空间 |
| QR 分解 | 最小二乘回归的数值求解；线性层的正交正则化 |
| SVD / 低秩近似 | LoRA：$\Delta W = BA$；PCA 降维；模型压缩 |
| 二次型 | Loss 的 Hessian 分析；正则化项 $\mathbf{x}^\top A \mathbf{x}$ |
