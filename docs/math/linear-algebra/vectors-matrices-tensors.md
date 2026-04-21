# 矩阵与线性方程组

线性代数的起点是线性方程组的求解，而矩阵是这一问题的核心工具。本节从高斯消元出发，系统介绍矩阵的基本运算与分解，并引出行列式这一重要标量量。


## 1. 线性方程组

一个包含 $m$ 个方程、$n$ 个未知数的线性方程组可以写成：

$$
\begin{cases}
a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n = b_1 \\
a_{21}x_1 + a_{22}x_2 + \cdots + a_{2n}x_n = b_2 \\
\quad\vdots \\
a_{m1}x_1 + a_{m2}x_2 + \cdots + a_{mn}x_n = b_m
\end{cases}
$$

写成矩阵形式为 $A\mathbf{x} = \mathbf{b}$，其中：
- $A \in \mathbb{R}^{m \times n}$ 是**系数矩阵**；
- $\mathbf{x} \in \mathbb{R}^n$ 是未知向量；
- $\mathbf{b} \in \mathbb{R}^m$ 是常数向量。

**增广矩阵**（augmented matrix）将系数与常数项拼在一起，便于行变换操作：

$$
[A \mid \mathbf{b}] =
\begin{bmatrix}
a_{11} & \cdots & a_{1n} & b_1 \\
\vdots & \ddots & \vdots & \vdots \\
a_{m1} & \cdots & a_{mn} & b_m
\end{bmatrix}
$$


## 2. 高斯-约当消元法

**高斯消元法**（Gaussian Elimination）通过对增广矩阵施加**初等行变换**，将方程组化简为等价但易于求解的形式。

### 2.1 初等行变换

共有三种基本操作，均不改变方程组的解：

| 操作 | 符号 | 含义 |
|------|------|------|
| 行缩放 | $r_i \leftarrow c \cdot r_i$（$c \ne 0$） | 某行乘以非零常数 |
| 行交换 | $r_i \leftrightarrow r_j$ | 交换两行 |
| 行加法 | $r_i \leftarrow r_i + c \cdot r_j$ | 某行加上另一行的常数倍 |

### 2.2 阶梯形（REF）与简约阶梯形（RREF）

通过行变换可将矩阵化为：

**行阶梯形（Row Echelon Form, REF）**：
- 全零行在最下方；
- 每行的**主元**（pivot，第一个非零元）严格位于上一行主元的右侧。

$$
\begin{bmatrix}
\mathbf{1} & * & * & * \\
0 & \mathbf{1} & * & * \\
0 & 0 & 0 & \mathbf{1} \\
0 & 0 & 0 & 0
\end{bmatrix}
$$

**简约行阶梯形（Reduced Row Echelon Form, RREF）**：
- 在 REF 的基础上，每个主元为 1，且主元所在列的其他元素都为 0。

RREF 是唯一的，每个矩阵只对应一个 RREF。

### 2.3 解的存在性与 Rank

设增广矩阵 $[A \mid \mathbf{b}]$ 化为 REF 后，矩阵 $A$ 的**秩**（rank）= 主元个数。

| 条件 | 解的情况 |
|------|---------|
| $\text{rank}(A) < \text{rank}([A \mid \mathbf{b}])$ | 无解（矛盾方程） |
| $\text{rank}(A) = \text{rank}([A \mid \mathbf{b}]) = n$ | 唯一解 |
| $\text{rank}(A) = \text{rank}([A \mid \mathbf{b}]) < n$ | 无穷多解（存在自由变量） |


## 3. 矩阵的基本运算

### 3.1 加法与数乘

矩阵加法和数乘按分量逐元素进行，满足通常的代数律（交换律、结合律、分配律）。

### 3.2 矩阵乘法

$A \in \mathbb{R}^{m \times p}$，$B \in \mathbb{R}^{p \times n}$，则 $C = AB \in \mathbb{R}^{m \times n}$，其中：

$$
C_{ij} = \sum_{k=1}^{p} A_{ik} B_{kj} = \mathbf{a}_i^\top \mathbf{b}_j
$$

**注意**：矩阵乘法一般不满足交换律，$AB \ne BA$。

主要代数性质：
- 结合律：$(AB)C = A(BC)$
- 分配律：$A(B + C) = AB + AC$
- 转置：$(AB)^\top = B^\top A^\top$

### 3.3 矩阵的转置

若 $A \in \mathbb{R}^{m \times n}$，则 $A^\top \in \mathbb{R}^{n \times m}$，$(A^\top)_{ij} = A_{ji}$。

- **对称矩阵**：$A^\top = A$（即 $A_{ij} = A_{ji}$）；
- **反对称（斜对称）矩阵**：$A^\top = -A$（对角线必须全为 0）。


## 4. 矩阵的逆

### 4.1 定义

若存在矩阵 $B$ 使得 $AB = BA = I$，则称 $A$ **可逆**（invertible，也称**非奇异**），$B$ 称为 $A$ 的**逆矩阵**，记作 $A^{-1}$。

> 可逆矩阵的逆矩阵唯一。

### 4.2 逆矩阵的代数性质

$$
(ABC)^{-1} = C^{-1}B^{-1}A^{-1}
$$

$$
(A^\top)^{-1} = (A^{-1})^\top
$$

$$
(cA)^{-1} = \frac{1}{c} A^{-1} \quad (c \ne 0)
$$

### 4.3 计算矩阵的逆

**方法一：公式法（$2 \times 2$ 矩阵）**

$$
A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}
\implies
A^{-1} = \frac{1}{ad - bc} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}
$$

仅当 $ad - bc \ne 0$（即 $\det(A) \ne 0$）时存在。

**方法二：伴随矩阵法（一般 $n \times n$ 矩阵）**

$$
A^{-1} = \frac{1}{\det(A)} \cdot \operatorname{adj}(A)
$$

其中 $\operatorname{adj}(A)$ 是 $A$ 的**伴随矩阵**（adjugate matrix），定义为代数余子式矩阵的转置：

$$
A_{ij} = (-1)^{i+j} M_{ij}
$$

- $M_{ij}$ 是删去第 $i$ 行第 $j$ 列后所得子矩阵的行列式（**余子式**）；
- $\operatorname{adj}(A) = [A_{ji}]$（代数余子式矩阵的转置）。

**方法三：增广矩阵行变换（推荐）**

将 $A$ 与单位矩阵拼接：

$$
[A \mid I] \xrightarrow{\text{初等行变换}} [I \mid A^{-1}]
$$

若左侧能化为 $I$，则右侧即为 $A^{-1}$；若出现全零行，则 $A$ 不可逆。


## 5. 特殊矩阵

### 5.1 初等矩阵

由单位矩阵经**一次**初等行变换得到的矩阵称为**初等矩阵**。对矩阵左乘一个初等矩阵，等价于对该矩阵施加对应的初等行变换。初等矩阵均可逆。

### 5.2 对角矩阵

仅主对角线上可能有非零元素的矩阵。设 $D = \text{diag}(d_1, d_2, \ldots, d_n)$，则：
- $D$ 可逆 $\iff$ 所有 $d_i \ne 0$；
- $D^{-1} = \text{diag}(d_1^{-1}, \ldots, d_n^{-1})$。

### 5.3 上下三角矩阵

- **上三角矩阵**：主对角线以下元素全为 0；
- **下三角矩阵**：主对角线以上元素全为 0。

性质：上（下）三角矩阵可逆当且仅当主对角元素均非零，且其逆矩阵仍是上（下）三角矩阵。

## 6. LU 分解

### 6.1 定义

若存在**下三角矩阵** $L$ 和**上三角矩阵** $U$，使得：

$$
A = LU
$$

则称之为 $A$ 的 **LU 分解**。通常约定 $L$ 的对角线元素均为 1（即单位下三角矩阵）。

> [!NOTE]
> 并非每个矩阵都存在 LU 分解。若可逆矩阵 $A$ 的 $(1,1)$ 元素为 0，则 $A$ 没有 LU 分解（需先进行行交换，得到 $PA = LU$ 的形式）。

### 6.2 求解线性方程组的应用

当 $A = LU$ 时，方程 $A\mathbf{x} = \mathbf{b}$ 变为 $LU\mathbf{x} = \mathbf{b}$。令 $\mathbf{y} = U\mathbf{x}$，分两步求解：

1. **前向代入**：解 $L\mathbf{y} = \mathbf{b}$（$L$ 是下三角，从上往下代入）；
2. **后向代入**：解 $U\mathbf{x} = \mathbf{y}$（$U$ 是上三角，从下往上代入）。

相比直接高斯消元，LU 分解在需要对同一矩阵求解多个右端项时效率更高。


## 7. 行列式

### 7.1 定义与基本性质

矩阵 $A \in \mathbb{R}^{n \times n}$ 的**行列式**（determinant）$\det(A)$ 是一个标量，几何意义是 $A$ 的列向量张成的平行体的有符号体积。

核心性质：

| 性质 | 公式 |
|------|------|
| 乘积法则 | $\det(AB) = \det(A)\det(B)$ |
| 数乘 | $\det(cA) = c^n\det(A)$ |
| 转置 | $\det(A^\top) = \det(A)$ |
| 逆矩阵 | $\det(A^{-1}) = \dfrac{1}{\det(A)}$ |
| 行交换 | 交换两行，行列式变号 |
| 行倍加 | 一行加上另一行的倍数，行列式不变 |
| 行缩放 | 某行乘以 $k$，行列式乘以 $k$ |

$A$ 可逆 $\iff$ $\det(A) \ne 0$。

### 7.2 计算方法

- **$2 \times 2$**：$\det\begin{bmatrix}a & b \\ c & d\end{bmatrix} = ad - bc$

- **$n \times n$（余子式展开，按第 $i$ 行）**：

$$
\det(A) = \sum_{j=1}^{n} (-1)^{i+j} A_{ij} M_{ij}
$$

- **三角矩阵**：行列式等于主对角线元素之积。

- **通过高斯消元**：将 $A$ 化为上三角形 $U$，记录行交换次数 $s$，则 $\det(A) = (-1)^s \prod_i U_{ii}$。

### 7.3 Cramer 法则

对于 $n \times n$ 可逆方程组 $A\mathbf{x} = \mathbf{b}$（$\det(A) \ne 0$），解的每个分量为：

$$
x_i = \frac{\det(A_i)}{\det(A)}
$$

其中 $A_i$ 是将矩阵 $A$ 的第 $i$ 列替换为 $\mathbf{b}$ 所得的矩阵。

> [!NOTE]
> Cramer 法则在理论分析中有用，但计算效率远低于高斯消元，不建议直接用于数值求解。


## 8. 矩阵变换

### 8.1 定义

由矩阵 $A \in \mathbb{R}^{m \times n}$ 定义的**矩阵变换**（matrix transformation）为：

$$
T_A: \mathbb{R}^n \to \mathbb{R}^m, \quad T_A(\mathbf{x}) = A\mathbf{x}
$$

这是一个从 $\mathbb{R}^n$ 到 $\mathbb{R}^m$ 的线性映射，将每个输入向量映射到其与 $A$ 的乘积。

### 8.2 单射、满射与双射

| 性质 | 定义 | 矩阵条件 |
|------|------|---------|
| **单射**（injective） | $T(\mathbf{x}) = T(\mathbf{y}) \Rightarrow \mathbf{x} = \mathbf{y}$ | 列线性无关，$\text{rank}(A) = n$ |
| **满射**（surjective） | $\forall \mathbf{b} \in \mathbb{R}^m, \exists \mathbf{x}: T(\mathbf{x}) = \mathbf{b}$ | 列张成 $\mathbb{R}^m$，$\text{rank}(A) = m$ |
| **双射**（bijective） | 既单射又满射 | $A$ 是方阵且可逆（$m = n$，$\det(A) \ne 0$） |

> 对于方阵 $A$：单射、满射、双射与 $A$ 可逆四者互相等价。


## 9. 伴随矩阵与 Hermitian 矩阵

矩阵 $A$ 的**伴随矩阵**（conjugate transpose，也记作 $A^*$ 或 $A^H$）定义为：

$$
(A^*)_{ij} = \overline{A_{ji}}
$$

即先转置再取复共轭。若 $A^* = A$，则称 $A$ 为**自伴矩阵**（self-adjoint）或 **Hermitian 矩阵**。

性质：Hermitian 矩阵对角线上的元素必定为实数。

对于实矩阵，Hermitian 矩阵即对称矩阵（$A^\top = A$）。


## 在 AI 中的应用

| 概念 | AI/ML 中的体现 |
|------|--------------|
| 矩阵乘法 | 神经网络前向传播：$h = Wx + b$ |
| 矩阵逆 | 正规方程求最小二乘解：$\hat{\theta} = (X^\top X)^{-1} X^\top y$ |
| LU 分解 | 高效求解多右端项线性系统 |
| 行列式 | 归一化常数、变量替换的 Jacobian |
| 矩阵变换 | 注意力中的投影：$Q = XW_Q$，$K = XW_K$，$V = XW_V$ |
