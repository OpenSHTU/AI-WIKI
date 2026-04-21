# 线性空间

线性空间（又称向量空间）是线性代数中最核心的抽象结构。理解了线性空间，就能理解神经网络中的 embedding space、feature space 以及各种表示空间的本质。

## 1. 线性空间的定义

**线性空间**（Linear Space），也叫**向量空间**（Vector Space），是一个集合 $V$，其中定义了两种运算：

- **向量加法**：$\mathbf{u} + \mathbf{v} \in V$
- **数量乘法**：$c \cdot \mathbf{u} \in V$（$c$ 是标量）

### 1.1 两个封闭性（Closure）

| 封闭性 | 要求 |
|-------|------|
| 对加法封闭 | $\forall\, \mathbf{u}, \mathbf{v} \in V \Rightarrow \mathbf{u} + \mathbf{v} \in V$ |
| 对数乘封闭 | $\forall\, c \in \mathbb{F},\, \mathbf{u} \in V \Rightarrow c\mathbf{u} \in V$ |

### 1.2 八条公理（Axioms）

满足封闭性之外，还要满足以下 8 条公理：

| 编号 | 公理 | 含义 |
|------|------|------|
| A1 | $\mathbf{u} + \mathbf{v} = \mathbf{v} + \mathbf{u}$ | 加法交换律 |
| A2 | $(\mathbf{u} + \mathbf{v}) + \mathbf{w} = \mathbf{u} + (\mathbf{v} + \mathbf{w})$ | 加法结合律 |
| A3 | $\exists\, \mathbf{0} \in V: \mathbf{u} + \mathbf{0} = \mathbf{u}$ | 零向量存在 |
| A4 | $\forall\, \mathbf{u} \in V,\, \exists\, (-\mathbf{u}) \in V: \mathbf{u} + (-\mathbf{u}) = \mathbf{0}$ | 加法逆元存在 |
| A5 | $1 \cdot \mathbf{u} = \mathbf{u}$ | 数乘单位元 |
| A6 | $(cd)\mathbf{u} = c(d\mathbf{u})$ | 数乘结合律 |
| A7 | $c(\mathbf{u} + \mathbf{v}) = c\mathbf{u} + c\mathbf{v}$ | 数乘对向量加法分配 |
| A8 | $(c + d)\mathbf{u} = c\mathbf{u} + d\mathbf{u}$ | 数乘对标量加法分配 |

> 线性空间的定义非常广泛。$\mathbb{R}^n$ 是典型例子，但多项式集合、连续函数集合也可以构成线性空间。

## 2. 子空间

### 2.1 定义

设 $W \subseteq V$ 是向量空间 $V$ 的一个非空子集。$W$ 是 $V$ 的**子空间**（subspace），当且仅当 $W$ 对 $V$ 的运算封闭：

1. $\mathbf{0} \in W$（包含零向量）
2. $\forall\, \mathbf{u}, \mathbf{v} \in W \Rightarrow \mathbf{u} + \mathbf{v} \in W$（对加法封闭）
3. $\forall\, c \in \mathbb{F},\, \mathbf{u} \in W \Rightarrow c\mathbf{u} \in W$（对数乘封闭）

满足这三条即可（它们蕴含了 8 条公理中大部分的内容）。

### 2.2 常见子空间的例子

- $\mathbb{R}^n$ 中的任意过原点的直线或平面；
- 矩阵 $A$ 的**列空间** $\text{Col}(A)$：$A$ 的各列的线性组合；
- 矩阵 $A$ 的**零空间** $\text{Null}(A)$：满足 $A\mathbf{x} = \mathbf{0}$ 的所有向量。

## 3. 线性相关与线性无关

### 3.1 线性组合

向量 $\mathbf{v}$ 是向量组 $\{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k\}$ 的**线性组合**，若存在标量 $c_1, c_2, \ldots, c_k$ 使得：

$$
\mathbf{v} = c_1 \mathbf{v}_1 + c_2 \mathbf{v}_2 + \cdots + c_k \mathbf{v}_k
$$

### 3.2 线性无关

向量组 $\{\mathbf{v}_1, \ldots, \mathbf{v}_k\}$ **线性无关**（linearly independent），若：

$$
c_1 \mathbf{v}_1 + c_2 \mathbf{v}_2 + \cdots + c_k \mathbf{v}_k = \mathbf{0}
\implies c_1 = c_2 = \cdots = c_k = 0
$$

否则称为**线性相关**（linearly dependent）。直觉上，线性相关意味着某个向量可以由其他向量表示，是"冗余"的。

## 4. 基与坐标

### 4.1 基（Basis）

向量空间 $V$ 的一组**基**是一组线性无关且能**张成**（span）整个 $V$ 的向量组 $\{\mathbf{e}_1, \mathbf{e}_2, \ldots, \mathbf{e}_n\}$，即：
- 线性无关：$\{\mathbf{e}_i\}$ 之间没有冗余；
- 张成：$V$ 中每个向量都是 $\{\mathbf{e}_i\}$ 的线性组合。

### 4.2 坐标（Coordinates）

给定基 $\mathcal{B} = \{\mathbf{e}_1, \ldots, \mathbf{e}_n\}$，$V$ 中每个向量 $\mathbf{v}$ 可以唯一表示为：

$$
\mathbf{v} = c_1 \mathbf{e}_1 + c_2 \mathbf{e}_2 + \cdots + c_n \mathbf{e}_n
$$

系数 $(c_1, c_2, \ldots, c_n)$ 称为 $\mathbf{v}$ 在基 $\mathcal{B}$ 下的**坐标**（coordinates），记作 $[\mathbf{v}]_\mathcal{B}$。

坐标依赖于所选的基——同一个向量在不同基下有不同的坐标，这就是[基的变换](#7-基的变换)的意义所在。

## 5. 维数与秩

### 5.1 维数（Dimension）

向量空间 $V$ 的**维数** $\dim(V)$ 是任意一组基中向量的个数。所有基的大小相同。

### 5.2 矩阵的秩（Rank）

矩阵 $A$ 的**秩** $\text{rank}(A)$ 定义为 $A$ 的行空间（或等价地，列空间）的维数，等于 RREF 中主元的个数。

### 5.3 零空间（Null Space）

矩阵 $A \in \mathbb{R}^{m \times n}$ 的**零空间**（null space）定义为：

$$
\text{Null}(A) = \{ \mathbf{x} \in \mathbb{R}^n \mid A\mathbf{x} = \mathbf{0} \}
$$

零空间是 $\mathbb{R}^n$ 的子空间（包含 $\mathbf{0}$，且对加法和数乘封闭）。

**如何求 $\text{Null}(A)$**：

1. 构造齐次线性方程组 $A\mathbf{x} = \mathbf{0}$；
2. 将 $A$ 化为 RREF；
3. 找出自由变量（对应非主元列）；
4. 用自由变量表示解向量的一般形式；
5. 写出 $\text{Null}(A)$ 的一组基，维数即为自由变量个数。

### 5.4 秩-零化度定理（Rank-Nullity Theorem）

$$
\boxed{\text{rank}(A) + \text{nullity}(A) = n}
$$

其中 $\text{nullity}(A) = \dim(\text{Null}(A))$ 是零空间的维数，$n$ 是 $A$ 的列数（未知数个数）。

**直觉**：$A$ 的列中有 $\text{rank}(A)$ 个"主元方向"（被 $A$ 完全决定），剩下 $\text{nullity}(A)$ 个"自由方向"（落在零空间中）。

## 6. 正交补

### 6.1 定义

设 $W \subseteq \mathbb{R}^n$ 是欧氏空间 $\mathbb{R}^n$ 的一个子空间，$W$ 的**正交补**（orthogonal complement）定义为：

$$
W^{\perp} = \{ \mathbf{v} \in \mathbb{R}^n \mid \mathbf{v} \cdot \mathbf{w} = 0,\ \forall\, \mathbf{w} \in W \}
$$

即由所有与 $W$ 中每个向量都正交的向量构成的集合。

### 6.2 性质

| 性质 | 公式/说明 |
|------|---------|
| 维数互补 | $\dim(W) + \dim(W^\perp) = n$ |
| 直和分解 | $\mathbb{R}^n = W \oplus W^\perp$（每个向量可唯一分解为 $W$ 分量和 $W^\perp$ 分量之和） |
| 二次正交补 | $(W^\perp)^\perp = W$ |
| 交集 | $W \cap W^\perp = \{\mathbf{0}\}$ |

### 6.3 与矩阵的关系

$$
\text{Row}(A)^\perp = \text{Null}(A), \quad \text{Col}(A)^\perp = \text{Null}(A^\top)
$$

这意味着矩阵的零空间就是行空间的正交补，两者共同"瓜分"了整个 $\mathbb{R}^n$。

## 7. 可逆矩阵的等价命题

以下命题对 $n \times n$ 矩阵 $A$ 互相等价（即一条成立则全部成立）：

| 编号 | 等价命题 |
|------|---------|
| 1 | $A$ 可逆（非奇异） |
| 2 | $A$ 的列向量线性无关 |
| 3 | $A$ 的列向量张成 $\mathbb{R}^n$ |
| 4 | $A\mathbf{x} = \mathbf{0}$ 只有零解 |
| 5 | $A\mathbf{x} = \mathbf{b}$ 对任意 $\mathbf{b}$ 有唯一解 |
| 6 | $\text{rank}(A) = n$ |
| 7 | $\text{nullity}(A) = 0$（零空间只含 $\mathbf{0}$） |
| 8 | $\det(A) \ne 0$ |
| 9 | $0$ 不是 $A$ 的特征值 |
| 10 | $A^\top$ 也可逆 |

这组等价命题是线性代数的核心定理，在分析神经网络层的可逆性和表达能力时极为有用。

## 8. 基的变换

### 8.1 坐标变换矩阵

设 $\mathcal{B} = \{\mathbf{b}_1, \ldots, \mathbf{b}_n\}$ 和 $\mathcal{C} = \{\mathbf{c}_1, \ldots, \mathbf{c}_n\}$ 是 $V$ 的两组基。从 $\mathcal{B}$ 坐标到 $\mathcal{C}$ 坐标的变换可以用**过渡矩阵**（change-of-basis matrix）$P_{\mathcal{B} \to \mathcal{C}}$ 来表达：

$$
[\mathbf{v}]_\mathcal{C} = P_{\mathcal{B} \to \mathcal{C}} \cdot [\mathbf{v}]_\mathcal{B}
$$

### 8.2 直觉

不同的基就像不同的"坐标系"——同一个物体，在不同坐标系下有不同的坐标表示，但物体本身没有变。基变换矩阵做的就是在这些坐标系之间"翻译"。

这一思想在线性变换的矩阵表示中起核心作用：同一个抽象线性变换，在不同基下对应不同的矩阵（相似矩阵）。

## 在 AI 中的应用

| 概念 | AI/ML 中的体现 |
|------|--------------|
| 向量空间 | Embedding space：词向量、图像特征向量所在的空间 |
| 子空间 | 表示空间中的语义子空间（如情感方向、性别方向） |
| 基与坐标 | 任何一组特征提取器都在定义一组"基" |
| 秩-零化度定理 | 分析线性层的信息瓶颈：秩不足意味着信息压缩 |
| 零空间 | 模型参数更新的"无效方向"（不影响输出的方向） |
| 正交补 | PCA 中的主成分方向与噪声方向的关系 |
