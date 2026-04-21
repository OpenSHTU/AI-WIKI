# 线性代数公式与性质汇总

本章系统整理线性代数中的核心公式与性质，主要参考 *The Matrix Cookbook*（Petersen & Pedersen, 2012）并补充经典结论。矩阵微积分内容见专项章节，本章不涉及。

---

## 1. 符号约定

| 符号 | 含义 |
|------|------|
| $A, B, C$ | 矩阵（大写粗体或大写斜体） |
| $\mathbf{a}, \mathbf{b}$ | 列向量（小写加粗） |
| $a_{ij}$ 或 $[A]_{ij}$ | 矩阵 $A$ 第 $i$ 行第 $j$ 列元素 |
| $A^\top$ | 转置 |
| $A^*$ 或 $A^H$ | 共轭转置（Hermitian 伴随） |
| $A^{-1}$ | 逆矩阵 |
| $A^+$ | Moore-Penrose 伪逆 |
| $\det(A)$ 或 $|A|$ | 行列式 |
| $\operatorname{tr}(A)$ | 迹 |
| $\operatorname{rank}(A)$ | 秩 |
| $\|A\|$ | 矩阵范数 |
| $I_n$ | $n \times n$ 单位矩阵 |
| $\mathbf{0}$ | 零矩阵或零向量 |
| $\otimes$ | Kronecker 积 |
| $\odot$ | Hadamard 积（逐元素乘） |
| $\operatorname{vec}(A)$ | 矩阵向量化（按列堆叠） |

---

## 2. 迹（Trace）

### 2.1 定义

$$
\operatorname{tr}(A) = \sum_{i=1}^n A_{ii}
$$

仅对方阵定义。

### 2.2 基本性质

| 性质 | 公式 |
|------|------|
| 线性 | $\operatorname{tr}(A + B) = \operatorname{tr}(A) + \operatorname{tr}(B)$ |
| 数乘 | $\operatorname{tr}(cA) = c\operatorname{tr}(A)$ |
| 转置不变 | $\operatorname{tr}(A) = \operatorname{tr}(A^\top)$ |
| 循环置换 | $\operatorname{tr}(ABC) = \operatorname{tr}(BCA) = \operatorname{tr}(CAB)$ |
| 交换 | $\operatorname{tr}(AB) = \operatorname{tr}(BA)$（即使 $AB \ne BA$） |
| 与特征值 | $\operatorname{tr}(A) = \sum_{i=1}^n \lambda_i$ |

### 2.3 迹与内积

$$
\operatorname{tr}(A^\top B) = \sum_{i,j} A_{ij} B_{ij}
$$

这是矩阵空间上的 Frobenius 内积：$\langle A, B \rangle_F = \operatorname{tr}(A^\top B)$。

### 2.4 二次型中的迹

$$
\mathbf{a}^\top A \mathbf{a} = \operatorname{tr}(\mathbf{a}^\top A \mathbf{a}) = \operatorname{tr}(A \mathbf{a}\mathbf{a}^\top)
$$

---

## 3. 行列式（Determinant）

### 3.1 基本性质

| 性质 | 公式 |
|------|------|
| 乘积 | $\det(AB) = \det(A)\det(B)$ |
| 数乘 | $\det(cA) = c^n\det(A)$（$A \in \mathbb{R}^{n\times n}$） |
| 转置 | $\det(A^\top) = \det(A)$ |
| 逆矩阵 | $\det(A^{-1}) = \dfrac{1}{\det(A)}$ |
| 幂次 | $\det(A^k) = \det(A)^k$ |
| 行交换 | 交换两行（列），行列式变号 |
| 行缩放 | 某行乘以 $k$，行列式乘以 $k$ |
| 行倍加 | 一行加上另一行的倍数，行列式不变 |
| 块对角 | $\det\begin{pmatrix}A & 0 \\ 0 & D\end{pmatrix} = \det(A)\det(D)$ |
| 特征值 | $\det(A) = \prod_{i=1}^n \lambda_i$ |

### 3.2 与秩的关系

$$
A \text{ 可逆} \iff \det(A) \ne 0 \iff \operatorname{rank}(A) = n
$$

### 3.3 块矩阵行列式

设 $A, D$ 均为方阵：

$$
\det\begin{pmatrix}A & B \\ C & D\end{pmatrix} = \det(A)\det(D - CA^{-1}B) \quad (A \text{ 可逆})
$$

$$
\det\begin{pmatrix}A & B \\ C & D\end{pmatrix} = \det(D)\det(A - BD^{-1}C) \quad (D \text{ 可逆})
$$

### 3.4 矩阵行列式引理

$$
\det(A + \mathbf{u}\mathbf{v}^\top) = (1 + \mathbf{v}^\top A^{-1}\mathbf{u})\det(A)
$$

推广：

$$
\det(A + UCV) = \det(C^{-1} + VA^{-1}U)\det(C)\det(A)
$$

### 3.5 Sylvester 行列式恒等式

$$
\det(I_m + AB) = \det(I_n + BA)
$$

其中 $A \in \mathbb{R}^{m\times n}$，$B \in \mathbb{R}^{n\times m}$。

### 3.6 计算方法

- **$2\times 2$**：$\det\begin{bmatrix}a & b \\ c & d\end{bmatrix} = ad - bc$
- **余子式展开**（按第 $i$ 行）：$\det(A) = \sum_{j=1}^n (-1)^{i+j} A_{ij} M_{ij}$
- **三角矩阵**：$\det = \prod_i A_{ii}$
- **高斯消元**：化为上三角后 $\det(A) = (-1)^s \prod_i U_{ii}$，$s$ 为行交换次数

---

## 4. 矩阵的秩（Rank）

### 4.1 基本性质

| 性质 | 结论 |
|------|------|
| 转置不变 | $\operatorname{rank}(A) = \operatorname{rank}(A^\top) = \operatorname{rank}(A^\top A) = \operatorname{rank}(AA^\top)$ |
| 数乘不变 | $\operatorname{rank}(cA) = \operatorname{rank}(A)$（$c \ne 0$） |
| 乘积 | $\operatorname{rank}(AB) \le \min(\operatorname{rank}(A), \operatorname{rank}(B))$ |
| 加法 | $\operatorname{rank}(A + B) \le \operatorname{rank}(A) + \operatorname{rank}(B)$ |
| 可逆乘 | $\operatorname{rank}(PA) = \operatorname{rank}(A)$（$P$ 可逆） |

### 4.2 Sylvester 秩不等式

$$
\operatorname{rank}(A) + \operatorname{rank}(B) - n \le \operatorname{rank}(AB) \le \min(\operatorname{rank}(A), \operatorname{rank}(B))
$$

其中 $A \in \mathbb{R}^{m\times n}$，$B \in \mathbb{R}^{n\times p}$。

### 4.3 秩-零化度定理

$$
\operatorname{rank}(A) + \operatorname{nullity}(A) = n \quad (A \in \mathbb{R}^{m\times n})
$$

### 4.4 满秩分解

任意秩为 $r$ 的矩阵 $A \in \mathbb{R}^{m\times n}$ 可分解为：

$$
A = FG
$$

其中 $F \in \mathbb{R}^{m\times r}$，$G \in \mathbb{R}^{r\times n}$，$F$ 和 $G$ 均满秩。

---

## 5. 矩阵的逆（Inverse）

### 5.1 基本性质

| 性质 | 公式 |
|------|------|
| 双重逆 | $(A^{-1})^{-1} = A$ |
| 乘积逆 | $(AB)^{-1} = B^{-1}A^{-1}$ |
| 转置逆 | $(A^\top)^{-1} = (A^{-1})^\top$ |
| 共轭逆 | $(A^*)^{-1} = (A^{-1})^*$ |
| 数乘逆 | $(cA)^{-1} = c^{-1}A^{-1}$（$c \ne 0$） |
| 幂次逆 | $(A^n)^{-1} = (A^{-1})^n$ |

### 5.2 Sherman-Morrison 公式

$$
(A + \mathbf{u}\mathbf{v}^\top)^{-1} = A^{-1} - \frac{A^{-1}\mathbf{u}\mathbf{v}^\top A^{-1}}{1 + \mathbf{v}^\top A^{-1}\mathbf{u}}
$$

条件：$A$ 可逆，$1 + \mathbf{v}^\top A^{-1}\mathbf{u} \ne 0$。

### 5.3 Woodbury 矩阵恒等式

$$
(A + UCV)^{-1} = A^{-1} - A^{-1}U(C^{-1} + VA^{-1}U)^{-1}VA^{-1}
$$

其中 $A \in \mathbb{R}^{n\times n}$，$C \in \mathbb{R}^{k\times k}$，$U \in \mathbb{R}^{n\times k}$，$V \in \mathbb{R}^{k\times n}$。

### 5.4 块矩阵求逆

设 $A, D$ 可逆，$S = D - CA^{-1}B$（Schur 补）：

$$
\begin{pmatrix}A & B \\ C & D\end{pmatrix}^{-1} = \begin{pmatrix}A^{-1} + A^{-1}BS^{-1}CA^{-1} & -A^{-1}BS^{-1} \\ -S^{-1}CA^{-1} & S^{-1}\end{pmatrix}
$$

### 5.5 Moore-Penrose 伪逆

对于任意矩阵 $A \in \mathbb{R}^{m\times n}$，伪逆 $A^+$ 是满足 Moore-Penrose 条件的唯一矩阵：

1. $AA^+A = A$
2. $A^+AA^+ = A^+$
3. $(AA^+)^\top = AA^+$
4. $(A^+A)^\top = A^+A$

**计算方法**（通过 SVD，$A = U\Sigma V^\top$）：

$$
A^+ = V\Sigma^+ U^\top
$$

其中 $\Sigma^+$ 是将 $\Sigma$ 的非零奇异值取倒数再转置。

**关键性质**：

| 条件 | 结论 |
|------|------|
| $A$ 可逆 | $A^+ = A^{-1}$ |
| 列满秩（$m \ge n$，$\operatorname{rank}(A)=n$） | $A^+ = (A^\top A)^{-1}A^\top$（左逆） |
| 行满秩（$m \le n$，$\operatorname{rank}(A)=m$） | $A^+ = A^\top(AA^\top)^{-1}$（右逆） |
| $(A^\top)^+$ | $(A^+)^\top$ |
| $(A^*)^+$ | $(A^+)^*$ |
| $(A^+)^+$ | $A$ |
| $\operatorname{rank}(A^+)$ | $\operatorname{rank}(A)$ |

---

## 6. 转置与共轭转置

### 6.1 转置性质

| 性质 | 公式 |
|------|------|
| 双重转置 | $(A^\top)^\top = A$ |
| 加法 | $(A + B)^\top = A^\top + B^\top$ |
| 乘积 | $(AB)^\top = B^\top A^\top$ |
| 数乘 | $(cA)^\top = cA^\top$ |
| 行列式 | $\det(A^\top) = \det(A)$ |
| 逆 | $(A^\top)^{-1} = (A^{-1})^\top$ |

### 6.2 共轭转置性质

$A^* = \overline{A}^\top$（取复共轭后转置）：

| 性质 | 公式 |
|------|------|
| 双重 | $(A^*)^* = A$ |
| 加法 | $(A + B)^* = A^* + B^*$ |
| 乘积 | $(AB)^* = B^*A^*$ |
| 数乘 | $(\alpha A)^* = \bar{\alpha}A^*$ |

---

## 7. 特殊矩阵运算

### 7.1 Hadamard 积（逐元素乘）

$$
[A \odot B]_{ij} = A_{ij}B_{ij}
$$

**性质**：

| 性质 | 公式 |
|------|------|
| 交换律 | $A \odot B = B \odot A$ |
| 结合律 | $(A \odot B) \odot C = A \odot (B \odot C)$ |
| 分配律 | $A \odot (B + C) = A \odot B + A \odot C$ |
| 迹关系 | $\operatorname{tr}(A^\top(B \odot C)) = \operatorname{tr}((A \odot B)^\top C)$ |
| 半正定 | $A, B$ 半正定 $\Rightarrow A \odot B$ 半正定（Schur 积定理） |

### 7.2 Kronecker 积

$$
A \otimes B = \begin{bmatrix} A_{11}B & \cdots & A_{1n}B \\ \vdots & \ddots & \vdots \\ A_{m1}B & \cdots & A_{mn}B \end{bmatrix}
$$

**性质**：

| 性质 | 公式 |
|------|------|
| 混合乘积 | $(A \otimes B)(C \otimes D) = (AC) \otimes (BD)$ |
| 转置 | $(A \otimes B)^\top = A^\top \otimes B^\top$ |
| 逆（均可逆时） | $(A \otimes B)^{-1} = A^{-1} \otimes B^{-1}$ |
| 迹 | $\operatorname{tr}(A \otimes B) = \operatorname{tr}(A)\operatorname{tr}(B)$ |
| 行列式 | $\det(A \otimes B) = \det(A)^n\det(B)^m$（$A \in \mathbb{R}^{m\times m}$，$B \in \mathbb{R}^{n\times n}$） |
| 秩 | $\operatorname{rank}(A \otimes B) = \operatorname{rank}(A)\operatorname{rank}(B)$ |
| 特征值 | 若 $\lambda$ 是 $A$ 的特征值，$\mu$ 是 $B$ 的特征值，则 $\lambda\mu$ 是 $A \otimes B$ 的特征值 |

### 7.3 vec 算子

$\operatorname{vec}(A)$ 将矩阵 $A$ 的各列从左到右竖直堆叠成一个列向量。

**关键公式**：

$$
\operatorname{vec}(AXB) = (B^\top \otimes A)\operatorname{vec}(X)
$$

$$
\operatorname{tr}(A^\top B) = \operatorname{vec}(A)^\top \operatorname{vec}(B)
$$

$$
\operatorname{vec}(A + B) = \operatorname{vec}(A) + \operatorname{vec}(B)
$$

---

## 8. 特征值与特征向量

### 8.1 定义

若 $A\mathbf{v} = \lambda\mathbf{v}$，$\mathbf{v} \ne \mathbf{0}$，则 $\lambda$ 是**特征值**，$\mathbf{v}$ 是对应的**特征向量**。

特征多项式：$p(\lambda) = \det(A - \lambda I) = 0$。

### 8.2 基本性质

| 性质 | 公式 |
|------|------|
| 迹 | $\operatorname{tr}(A) = \sum_i \lambda_i$ |
| 行列式 | $\det(A) = \prod_i \lambda_i$ |
| 幂次 | $A^k$ 的特征值为 $\lambda_i^k$ |
| 逆 | $A^{-1}$ 的特征值为 $\lambda_i^{-1}$ |
| 多项式 | $f(A)$ 的特征值为 $f(\lambda_i)$ |
| 转置 | $A^\top$ 与 $A$ 有相同特征值 |
| 相似变换 | $A$ 与 $P^{-1}AP$ 有相同特征值 |
| 数乘 | $cA$ 的特征值为 $c\lambda_i$ |
| 平移 | $(A - \mu I)$ 的特征值为 $\lambda_i - \mu$ |

### 8.3 Cayley-Hamilton 定理

矩阵满足其自身的特征多项式：

$$
p(A) = 0
$$

例如，若 $p(\lambda) = \lambda^2 - \operatorname{tr}(A)\lambda + \det(A)$（$2\times 2$ 情形），则 $A^2 - \operatorname{tr}(A)A + \det(A)I = 0$。

### 8.4 特征分解

若 $A \in \mathbb{R}^{n\times n}$ 有 $n$ 个线性无关特征向量，则：

$$
A = P\Lambda P^{-1}
$$

其中 $\Lambda = \operatorname{diag}(\lambda_1, \ldots, \lambda_n)$，$P$ 的列为对应特征向量。

对于实对称矩阵（或 Hermitian 矩阵），可取正交分解：

$$
A = Q\Lambda Q^\top \quad (Q^\top Q = I)
$$

### 8.5 特征值不等式

设 $A$ 为实对称矩阵，特征值排列为 $\lambda_1 \ge \lambda_2 \ge \cdots \ge \lambda_n$：

**Rayleigh 商**：

$$
\lambda_n \le \frac{\mathbf{x}^\top A\mathbf{x}}{\mathbf{x}^\top\mathbf{x}} \le \lambda_1 \quad \forall \mathbf{x} \ne \mathbf{0}
$$

**Weyl 不等式**（$C = A + B$，均为 Hermitian）：

$$
\lambda_{i+j-1}(C) \le \lambda_i(A) + \lambda_j(B) \le \lambda_{i+j-n}(C)
$$

**Courant-Fischer 极小极大定理**：

$$
\lambda_k(A) = \min_{\dim(S)=n-k+1} \max_{\mathbf{x} \in S, \|\mathbf{x}\|=1} \mathbf{x}^\top A\mathbf{x}
$$

---

## 9. 矩阵分解

### 9.1 LU 分解

$$
A = LU \quad \text{（或 } PA = LU \text{ 含行交换）}
$$

$L$ 为单位下三角矩阵，$U$ 为上三角矩阵。用于高效求解 $A\mathbf{x} = \mathbf{b}$：先前向代入 $L\mathbf{y} = \mathbf{b}$，再后向代入 $U\mathbf{x} = \mathbf{y}$。

### 9.2 Cholesky 分解

若 $A$ 为**正定对称**矩阵，则存在唯一下三角矩阵 $L$（对角元素为正），使得：

$$
A = LL^\top
$$

- 比 LU 分解快约 $2\times$；
- 常用于多元正态分布的采样、最小二乘。

### 9.3 LDL 分解

$$
A = LDL^\top
$$

其中 $L$ 为单位下三角，$D$ 为对角矩阵。适用于对称但不一定正定的矩阵。

### 9.4 QR 分解

任意矩阵 $A \in \mathbb{R}^{m\times n}$（$m \ge n$）均可分解为：

$$
A = QR
$$

$Q \in \mathbb{R}^{m\times m}$ 为正交矩阵，$R \in \mathbb{R}^{m\times n}$ 为上三角矩阵。

- 用于求解最小二乘、计算特征值（QR 算法）；
- 紧凑形式（经济型）：$A = \hat{Q}\hat{R}$，$\hat{Q} \in \mathbb{R}^{m\times n}$，$\hat{R} \in \mathbb{R}^{n\times n}$。

### 9.5 奇异值分解（SVD）

任意矩阵 $A \in \mathbb{R}^{m\times n}$（$m \ge n$）：

$$
A = U\Sigma V^\top
$$

- $U \in \mathbb{R}^{m\times m}$：正交矩阵（左奇异向量）；
- $\Sigma \in \mathbb{R}^{m\times n}$：对角矩阵，对角元 $\sigma_1 \ge \sigma_2 \ge \cdots \ge \sigma_r \ge 0$（奇异值）；
- $V \in \mathbb{R}^{n\times n}$：正交矩阵（右奇异向量）。

**关键关系**：

$$
A^\top A = V\Sigma^\top\Sigma V^\top, \quad AA^\top = U\Sigma\Sigma^\top U^\top
$$

奇异值是 $A^\top A$（或 $AA^\top$）非零特征值的平方根。

**截断 SVD（低秩近似）**：

$$
A_k = \sum_{i=1}^k \sigma_i \mathbf{u}_i\mathbf{v}_i^\top = U_k\Sigma_k V_k^\top
$$

Eckart-Young 定理：在所有秩 $k$ 矩阵中，$A_k$ 是 $A$ 的最佳近似（Frobenius 范数和谱范数均成立）：

$$
\min_{\operatorname{rank}(B)=k} \|A - B\|_F = \sqrt{\sum_{i=k+1}^r \sigma_i^2}
$$

### 9.6 特征分解与 SVD 的关系

| | 特征分解 | SVD |
|--|---------|-----|
| 适用矩阵 | 方阵（可对角化） | 任意矩阵 |
| 分解形式 | $A = P\Lambda P^{-1}$ | $A = U\Sigma V^\top$ |
| 正交分解 | 仅对称矩阵保证 | 永远有正交 $U,V$ |
| 值 | 特征值（可为复数、负数） | 奇异值（非负实数） |

---

## 10. 特殊矩阵类型

### 10.1 对称矩阵与反对称矩阵

- **对称**：$A^\top = A$；特征值均为实数；可正交对角化。
- **反对称（斜对称）**：$A^\top = -A$；对角线全为零；特征值为纯虚数或零。

任意方阵可分解为对称与反对称部分之和：

$$
A = \underbrace{\frac{A + A^\top}{2}}_{\text{对称部分}} + \underbrace{\frac{A - A^\top}{2}}_{\text{反对称部分}}
$$

### 10.2 正交矩阵

$Q$ 正交 $\iff Q^\top Q = QQ^\top = I \iff Q^{-1} = Q^\top$。

- $|\det(Q)| = 1$（$\det(Q) = \pm 1$）；
- 保范：$\|Q\mathbf{x}\| = \|\mathbf{x}\|$；
- 特征值模长为 1；
- 正交矩阵的乘积仍为正交矩阵。

### 10.3 正定矩阵

实对称矩阵 $A$ 为**正定**（positive definite，PD）$\iff$ 以下等价条件之一成立：

| 等价条件 |
|---------|
| $\mathbf{x}^\top A\mathbf{x} > 0$，$\forall \mathbf{x} \ne \mathbf{0}$ |
| 所有特征值 $\lambda_i > 0$ |
| 所有顺序主子式 $> 0$（Sylvester 判据） |
| Cholesky 分解存在（$A = LL^\top$，$L$ 对角元素为正） |
| $A = B^\top B$ 对某个满列秩矩阵 $B$ |

**半正定（PSD）**：$\ge$ 替换以上所有 $>$。

**性质**：

| 性质 | 结论 |
|------|------|
| 可逆 | 正定矩阵均可逆 |
| 逆矩阵 | 正定矩阵的逆仍为正定 |
| 加法 | 正定矩阵之和仍为正定 |
| $A + cI$ | $c > -\lambda_{\min}$ 时正定 |
| $B^\top AB$ | $A$ 正定，$B$ 列满秩 $\Rightarrow B^\top AB$ 正定 |

### 10.4 幂等矩阵（投影矩阵）

$P$ 幂等 $\iff P^2 = P$。

- 特征值只有 0 或 1；
- $\operatorname{tr}(P) = \operatorname{rank}(P)$；
- $I - P$ 也是幂等矩阵；
- 正交投影矩阵额外满足 $P^\top = P$（对称幂等）。

### 10.5 正规矩阵

$A$ 正规 $\iff A^*A = AA^*$。

包含：Hermitian、反 Hermitian、酉矩阵。正规矩阵可被酉矩阵对角化（谱定理的推广）。

### 10.6 Toeplitz 矩阵与循环矩阵

**Toeplitz 矩阵**：每条对角线上的元素相同，$A_{ij} = t_{i-j}$，由第一行和第一列完全确定。

**循环矩阵**：特殊的 Toeplitz 矩阵，每行由前一行循环右移一位得到。循环矩阵可被 DFT 矩阵对角化：

$$
C = F^*\Lambda F
$$

其中 $F$ 为离散 Fourier 变换矩阵。

### 10.7 块矩阵

**块对角矩阵**：

$$
A = \operatorname{diag}(A_1, A_2, \ldots, A_k), \quad \det(A) = \prod_i \det(A_i), \quad A^{-1} = \operatorname{diag}(A_1^{-1}, \ldots, A_k^{-1})
$$

**块三角矩阵**：

$$
\begin{pmatrix}A & B \\ 0 & D\end{pmatrix}^{-1} = \begin{pmatrix}A^{-1} & -A^{-1}BD^{-1} \\ 0 & D^{-1}\end{pmatrix}
$$

---

## 11. 矩阵范数

### 11.1 向量范数

| 名称 | 定义 |
|------|------|
| $\ell_1$ 范数 | $\|\mathbf{x}\|_1 = \sum_i |x_i|$ |
| $\ell_2$ 范数（Euclidean） | $\|\mathbf{x}\|_2 = \sqrt{\sum_i x_i^2}$ |
| $\ell_p$ 范数 | $\|\mathbf{x}\|_p = \left(\sum_i |x_i|^p\right)^{1/p}$，$p \ge 1$ |
| $\ell_\infty$ 范数 | $\|\mathbf{x}\|_\infty = \max_i |x_i|$ |

### 11.2 矩阵范数

| 名称 | 定义 | 备注 |
|------|------|------|
| Frobenius 范数 | $\|A\|_F = \sqrt{\sum_{i,j}A_{ij}^2} = \sqrt{\operatorname{tr}(A^\top A)}$ | 与向量 $\ell_2$ 一致 |
| 谱范数（$\ell_2$ 算子范数） | $\|A\|_2 = \sigma_{\max}(A)$ | 最大奇异值 |
| 核范数 | $\|A\|_* = \sum_i \sigma_i$ | 奇异值之和 |
| $\ell_1$ 算子范数 | $\|A\|_1 = \max_j \sum_i |A_{ij}|$ | 最大列绝对和 |
| $\ell_\infty$ 算子范数 | $\|A\|_\infty = \max_i \sum_j |A_{ij}|$ | 最大行绝对和 |

**SVD 与范数**：

$$
\|A\|_F^2 = \sum_i \sigma_i^2, \quad \|A\|_2 = \sigma_1, \quad \|A\|_* = \sum_i \sigma_i
$$

### 11.3 范数不等式

$$
\frac{1}{\sqrt{n}}\|A\|_\infty \le \|A\|_2 \le \sqrt{m}\|A\|_\infty \quad (A \in \mathbb{R}^{m\times n})
$$

$$
\|A\|_2 \le \|A\|_F \le \sqrt{r}\|A\|_2 \quad (r = \operatorname{rank}(A))
$$

$$
\|AB\|_F \le \|A\|_F\|B\|_F
$$

$$
\|AB\|_2 \le \|A\|_2\|B\|_2
$$

### 11.4 条件数

$$
\kappa(A) = \|A\|\|A^{-1}\| = \frac{\sigma_{\max}}{\sigma_{\min}} \quad (\text{使用谱范数时})
$$

$\kappa(A) = 1$ 当且仅当 $A$ 是正规化的正交矩阵。条件数衡量线性系统的数值稳定性。

---

## 12. 线性方程组的解

### 12.1 解的存在性与唯一性

| 条件 | 解的情况 |
|------|---------|
| $\operatorname{rank}(A) < \operatorname{rank}([A|\mathbf{b}])$ | 无解 |
| $\operatorname{rank}(A) = \operatorname{rank}([A|\mathbf{b}]) = n$ | 唯一解 |
| $\operatorname{rank}(A) = \operatorname{rank}([A|\mathbf{b}]) < n$ | 无穷多解 |

### 12.2 最小二乘问题

$\min_{\mathbf{x}} \|A\mathbf{x} - \mathbf{b}\|_2^2$ 的解由**正规方程**给出：

$$
A^\top A\mathbf{x} = A^\top\mathbf{b}
$$

- 若 $A$ 列满秩：$\hat{\mathbf{x}} = (A^\top A)^{-1}A^\top\mathbf{b} = A^+\mathbf{b}$
- 一般解：$\hat{\mathbf{x}} = A^+\mathbf{b}$（最小范数解）

### 12.3 正则化最小二乘

**Tikhonov 正则化（岭回归）**：

$$
\min_{\mathbf{x}} \|A\mathbf{x} - \mathbf{b}\|_2^2 + \lambda\|\mathbf{x}\|_2^2
$$

解为：

$$
\hat{\mathbf{x}} = (A^\top A + \lambda I)^{-1}A^\top\mathbf{b}
$$

### 12.4 零空间与值域

- **零空间**（核）：$\ker(A) = \{\mathbf{x}: A\mathbf{x} = \mathbf{0}\}$，维数 $= n - \operatorname{rank}(A)$
- **列空间**（值域）：$\operatorname{col}(A) = \{A\mathbf{x}: \mathbf{x} \in \mathbb{R}^n\}$，维数 $= \operatorname{rank}(A)$
- **正交补**：$\ker(A) = \operatorname{col}(A^\top)^\perp$，$\operatorname{col}(A) = \ker(A^\top)^\perp$

---

## 13. 向量空间与子空间

### 13.1 基本概念

- **子空间**：非空集合 $S \subseteq \mathbb{R}^n$，对加法和数乘封闭；
- **基**：线性无关且张成整个空间的向量集合；
- **维数**：基的元素个数；
- **正交基**：基向量两两正交；正交归一基（ONB）额外要求每个向量模为 1。

### 13.2 Gram-Schmidt 正交化

将线性无关组 $\{\mathbf{v}_1, \ldots, \mathbf{v}_k\}$ 正交化：

$$
\mathbf{u}_j = \mathbf{v}_j - \sum_{i=1}^{j-1}\frac{\mathbf{v}_j^\top\mathbf{u}_i}{\mathbf{u}_i^\top\mathbf{u}_i}\mathbf{u}_i
$$

单位化：$\mathbf{e}_j = \mathbf{u}_j / \|\mathbf{u}_j\|$。

### 13.3 投影

向量 $\mathbf{b}$ 在子空间 $\operatorname{col}(A)$ 上的正交投影：

$$
\hat{\mathbf{b}} = A(A^\top A)^{-1}A^\top\mathbf{b} = P\mathbf{b}
$$

投影矩阵 $P = A(A^\top A)^{-1}A^\top$（对称幂等）。

---

## 14. 二次型

### 14.1 定义

$$
Q(\mathbf{x}) = \mathbf{x}^\top A\mathbf{x} = \sum_{i,j} A_{ij}x_ix_j
$$

其中 $A$ 可不妨取对称矩阵。

### 14.2 正定性判断

| 类型 | 条件 |
|------|------|
| 正定（PD） | $Q(\mathbf{x}) > 0$，$\forall \mathbf{x} \ne \mathbf{0}$ |
| 半正定（PSD） | $Q(\mathbf{x}) \ge 0$，$\forall \mathbf{x}$ |
| 负定（ND） | $Q(\mathbf{x}) < 0$，$\forall \mathbf{x} \ne \mathbf{0}$ |
| 半负定（NSD） | $Q(\mathbf{x}) \le 0$，$\forall \mathbf{x}$ |
| 不定 | 以上均不满足 |

### 14.3 标准化

通过正交变换 $\mathbf{x} = Q\mathbf{y}$（$Q$ 为 $A$ 的特征向量矩阵），二次型化为标准形：

$$
Q(\mathbf{x}) = \mathbf{y}^\top\Lambda\mathbf{y} = \sum_i \lambda_i y_i^2
$$

---

## 15. 矩阵函数与幂级数

### 15.1 矩阵多项式

若 $f(\lambda) = \sum_{k=0}^m c_k \lambda^k$，则：

$$
f(A) = \sum_{k=0}^m c_k A^k
$$

### 15.2 矩阵指数

$$
e^A = \sum_{k=0}^\infty \frac{A^k}{k!} = I + A + \frac{A^2}{2!} + \cdots
$$

**性质**：

| 性质 | 公式 |
|------|------|
| 对角矩阵 | $e^{\operatorname{diag}(\lambda_i)} = \operatorname{diag}(e^{\lambda_i})$ |
| 可对角化 | $A = P\Lambda P^{-1} \Rightarrow e^A = Pe^{\Lambda}P^{-1}$ |
| 换序（$AB = BA$） | $e^{A+B} = e^Ae^B$ |
| 逆 | $(e^A)^{-1} = e^{-A}$ |
| 行列式 | $\det(e^A) = e^{\operatorname{tr}(A)}$ |
| 导数 | $\frac{d}{dt}e^{tA} = Ae^{tA}$ |

### 15.3 矩阵对数

若 $A$ 无零或负实数特征值，则：

$$
\ln(A) = \sum_{k=1}^\infty \frac{(-1)^{k-1}}{k}(A - I)^k \quad (\|A - I\| < 1)
$$

满足 $e^{\ln A} = A$。

### 15.4 矩阵的平方根

若 $A$ 为正定矩阵，其正定平方根 $A^{1/2}$ 满足 $A^{1/2}A^{1/2} = A$。通过 $A = Q\Lambda Q^\top$ 可得：

$$
A^{1/2} = Q\Lambda^{1/2}Q^\top
$$

---

## 16. 常用恒等式与不等式

### 16.1 矩阵恒等式

| 恒等式 | 公式 |
|--------|------|
| 推广结合律 | $(A + B)C = AC + BC$ |
| 转置链 | $(A_1A_2\cdots A_k)^\top = A_k^\top\cdots A_2^\top A_1^\top$ |
| 逆链 | $(A_1A_2\cdots A_k)^{-1} = A_k^{-1}\cdots A_2^{-1}A_1^{-1}$ |
| 迹循环 | $\operatorname{tr}(ABCD) = \operatorname{tr}(BCDA) = \operatorname{tr}(CDAB) = \operatorname{tr}(DABC)$ |
| Sylvester 行列式 | $\det(I + AB) = \det(I + BA)$ |

### 16.2 重要不等式

**Cauchy-Schwarz 不等式**：

$$
|\mathbf{x}^\top\mathbf{y}|^2 \le (\mathbf{x}^\top\mathbf{x})(\mathbf{y}^\top\mathbf{y})
$$

矩阵形式（$A$ 正定）：

$$
(\mathbf{x}^\top\mathbf{y})^2 \le (\mathbf{x}^\top A\mathbf{x})(\mathbf{y}^\top A^{-1}\mathbf{y})
$$

**Hadamard 不等式**：

$$
|\det(A)| \le \prod_j \|\mathbf{a}_j\|_2 \quad (\mathbf{a}_j \text{ 为 } A \text{ 的列向量})
$$

**迹不等式**（$A, B$ 均为半正定矩阵）：

$$
\operatorname{tr}(AB) \le \operatorname{tr}(A)\operatorname{tr}(B)
$$

$$
\operatorname{tr}(AB) \ge 0
$$

**Von Neumann 迹不等式**：

$$
|\operatorname{tr}(A^\top B)| \le \sum_i \sigma_i(A)\sigma_i(B)
$$

**Fan 不等式**（前 $k$ 个最大奇异值之和）：

$$
\sum_{i=1}^k \sigma_i(A + B) \le \sum_{i=1}^k \sigma_i(A) + \sum_{i=1}^k \sigma_i(B)
$$

---

## 17. 统计与概率中的矩阵

### 17.1 协方差矩阵

$$
\Sigma = \mathbb{E}[(\mathbf{x} - \boldsymbol{\mu})(\mathbf{x} - \boldsymbol{\mu})^\top]
$$

- 对称半正定；
- $\Sigma_{ij} = \operatorname{Cov}(x_i, x_j)$；
- 对角线 $\Sigma_{ii} = \operatorname{Var}(x_i)$。

### 17.2 多元正态分布

$$
p(\mathbf{x}) = \frac{1}{(2\pi)^{n/2}|\Sigma|^{1/2}} \exp\left(-\frac{1}{2}(\mathbf{x} - \boldsymbol{\mu})^\top\Sigma^{-1}(\mathbf{x} - \boldsymbol{\mu})\right)
$$

二次型 $(\mathbf{x} - \boldsymbol{\mu})^\top\Sigma^{-1}(\mathbf{x} - \boldsymbol{\mu})$ 称为 **Mahalanobis 距离**的平方。

### 17.3 Schur 补与条件分布

设联合分布 $\begin{pmatrix}\mathbf{x} \\ \mathbf{y}\end{pmatrix} \sim \mathcal{N}\left(\begin{pmatrix}\boldsymbol{\mu}_x \\ \boldsymbol{\mu}_y\end{pmatrix}, \begin{pmatrix}A & B \\ B^\top & C\end{pmatrix}\right)$，则条件分布：

$$
\mathbf{x}|\mathbf{y} \sim \mathcal{N}(\boldsymbol{\mu}_x + BC^{-1}(\mathbf{y} - \boldsymbol{\mu}_y),\ A - BC^{-1}B^\top)
$$

其中 $A - BC^{-1}B^\top$ 正是 Schur 补。

---

## 在 AI 中的应用

| 公式/概念 | AI/ML 中的体现 |
|-----------|---------------|
| SVD / 低秩近似 | PCA、推荐系统矩阵分解、语义分析（LSA） |
| Woodbury 恒等式 | 高斯过程、核方法中大矩阵求逆的高效计算 |
| Cholesky 分解 | 多元正态采样、卡尔曼滤波、贝叶斯优化 |
| 正规方程 / 伪逆 | 线性回归、最小二乘解 |
| Kronecker 积 / vec | 矩阵方程、多任务学习、高斯过程 |
| 谱范数 / 条件数 | 神经网络谱归一化（SN-GAN）、数值稳定性 |
| 正定矩阵 | 核函数（Gram 矩阵）、协方差矩阵 |
| 矩阵指数 | 连续时间动态系统、状态空间模型 |
| 特征分解 | PCA（$XX^\top$ 的特征向量）、谱聚类 |
| Rayleigh 商 | Fisher 线性判别分析（LDA） |
| 投影矩阵 | 线性回归帽矩阵 $H = X(X^\top X)^{-1}X^\top$ |
| 迹与 Frobenius 范数 | 正则化（权重衰减）、核迹范数最小化 |
