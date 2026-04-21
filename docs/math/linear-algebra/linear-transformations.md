# 线性变换

线性变换是线性代数中最核心的映射概念。矩阵只是线性变换在某组基下的"具体表示"，理解这种抽象与具体的关系，才能真正理解神经网络层的本质。

> 特征值、特征向量与矩阵对角化属于矩阵的谱性质，见 [矩阵的谱与性质](./eigen-svd-low-rank)。

## 1. 线性变换的定义

**线性变换**（Linear Transformation）是两个向量空间之间的映射 $T: V \to W$，满足：

| 性质 | 公式 | 含义 |
|------|------|------|
| **可加性** | $T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v})$ | 变换保持加法结构 |
| **齐次性** | $T(c\mathbf{u}) = c \cdot T(\mathbf{u})$ | 变换保持数乘结构 |

两条合并为一条等价判定：

$$
T(c\mathbf{u} + d\mathbf{v}) = c\,T(\mathbf{u}) + d\,T(\mathbf{v}), \quad \forall\, \mathbf{u}, \mathbf{v} \in V,\ c, d \in \mathbb{F}
$$

### 线性变换 vs 矩阵变换

| | 线性变换 $T$ | 矩阵变换 $T_A(\mathbf{x}) = A\mathbf{x}$ |
|---|---|---|
| 性质 | 抽象的数学映射 | 线性变换在特定基下的具体表示 |
| 依赖基？ | 不依赖 | 依赖（换一组基就得到不同矩阵） |
| 关系 | 给定基后，每个线性变换唯一对应一个矩阵 | 同一变换，不同基给出不同但**相似**的矩阵 |

## 2. 线性变换的矩阵表示

### 2.1 如何确定一个线性变换？

对于线性空间 $V$，只要给定一组基 $\mathcal{B} = \{\mathbf{b}_1, \mathbf{b}_2, \ldots, \mathbf{b}_n\}$，空间中每个向量都可以由基表示。因此：

> **只要知道线性变换 $T$ 在每个基向量上的像，就能确定 $T$ 在整个空间上的行为。**

即，若 $\mathbf{v} = c_1 \mathbf{b}_1 + \cdots + c_n \mathbf{b}_n$，则：

$$
T(\mathbf{v}) = c_1 T(\mathbf{b}_1) + c_2 T(\mathbf{b}_2) + \cdots + c_n T(\mathbf{b}_n)
$$

### 2.2 变换矩阵的构造

给定 $V$ 的基 $\mathcal{B} = \{\mathbf{b}_1, \ldots, \mathbf{b}_n\}$ 和 $W$ 的基 $\mathcal{C} = \{\mathbf{c}_1, \ldots, \mathbf{c}_m\}$，线性变换 $T: V \to W$ 的**矩阵表示** $[T]_{\mathcal{B}}^{\mathcal{C}} \in \mathbb{R}^{m \times n}$ 的第 $j$ 列为 $T(\mathbf{b}_j)$ 在基 $\mathcal{C}$ 下的坐标：

$$
[T]_{\mathcal{B}}^{\mathcal{C}} = \Big[\, [T(\mathbf{b}_1)]_\mathcal{C} \;\Big|\; [T(\mathbf{b}_2)]_\mathcal{C} \;\Big|\; \cdots \;\Big|\; [T(\mathbf{b}_n)]_\mathcal{C} \,\Big]
$$

## 3. 核与像

### 3.1 核（Kernel）

线性变换 $T: V \to W$ 的**核**（kernel）是被映射到零向量的所有输入的集合：

$$
\ker(T) = \{ \mathbf{v} \in V \mid T(\mathbf{v}) = \mathbf{0}_W \}
$$

$\ker(T)$ 是 $V$ 的子空间。对于矩阵变换 $T_A$，$\ker(T_A) = \text{Null}(A)$。

- $T$ 是单射（injective） $\iff$ $\ker(T) = \{\mathbf{0}\}$。

### 3.2 像（Image）

线性变换 $T: V \to W$ 的**像**（image）是所有输出的集合：

$$
\text{Im}(T) = \{ T(\mathbf{v}) \mid \mathbf{v} \in V \}
$$

$\text{Im}(T)$ 是 $W$ 的子空间。对于矩阵变换 $T_A$，$\text{Im}(T_A) = \text{Col}(A)$（列空间）。

- $T$ 是满射（surjective） $\iff$ $\text{Im}(T) = W$。

### 3.3 维数定理

$$
\dim(\ker(T)) + \dim(\text{Im}(T)) = \dim(V)
$$

核的维数（nullity）加上像的维数（rank）等于定义域的维数——这是秩-零化度定理的变换版本。

## 4. 相似矩阵

### 4.1 核心思想：殊途同归

同一个线性变换 $T: V \to V$，在不同基 $\mathcal{B}$ 和 $\mathcal{B}'$ 下，得到不同的矩阵 $A$ 和 $B$，但它们描述的是**同一个变换**：

$$
\begin{array}{ccc}
V_{\mathcal{B}} & \xrightarrow{\ A\ } & V_{\mathcal{B}} \\
{\scriptstyle P}\downarrow & & \downarrow{\scriptstyle P} \\
V_{\mathcal{B}'} & \xrightarrow{\ B\ } & V_{\mathcal{B}'}
\end{array}
$$

其中 $P$ 是从基 $\mathcal{B}$ 到基 $\mathcal{B}'$ 的过渡矩阵。

### 4.2 相似矩阵的定义

若存在**可逆矩阵** $P$，使得：

$$
B = P^{-1} A P
$$

则称矩阵 $A$ 和 $B$ **相似**（similar），记作 $A \sim B$。

### 4.3 相似矩阵共享的不变量

相似矩阵代表同一线性变换，因此共享所有与变换本身相关的量：

| 不变量 | 公式/说明 |
|-------|---------|
| **特征值**（含重数） | $f_A(\lambda) = f_B(\lambda)$ |
| **行列式** | $\det(A) = \det(B)$ |
| **迹** | $\text{tr}(A) = \text{tr}(B)$ |
| **秩** | $\text{rank}(A) = \text{rank}(B)$ |
| **特征多项式** | $\det(\lambda I - A) = \det(\lambda I - B)$ |

这些不变量是分析模型结构的关键工具，详见 [矩阵的谱与性质](./eigen-svd-low-rank)。

## 5. 仿射变换

线性变换要求 $T(\mathbf{0}) = \mathbf{0}$（必须过原点）。但神经网络中常见的是**仿射变换**（affine transformation）：

$$
T(\mathbf{x}) = A\mathbf{x} + \mathbf{b}
$$

其中 $\mathbf{b}$ 是偏置向量（bias）。仿射变换 = 线性变换 + 平移，不过原点，因此严格来说不是线性变换，但它构成了深度学习每一层的基础运算。

## 在 AI 中的应用

| 概念 | AI/ML 中的体现 |
|------|--------------|
| 线性变换 | 神经网络线性层：$h = Wx$；注意力投影：$Q = XW_Q$，$K = XW_K$，$V = XW_V$ |
| 仿射变换 | 带 bias 的线性层：$h = Wx + b$ |
| 核（零空间） | 模型中不影响输出的输入方向（冗余信息） |
| 像（列空间） | 线性层能表达的输出集合，决定模型的表达能力 |
| 相似矩阵 | 不同坐标系下的同一变换；权重矩阵在不同基下的等价表示 |
