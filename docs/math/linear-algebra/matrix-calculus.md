# 矩阵微积分

本章系统整理矩阵微积分的核心公式，主要参考 **The Matrix Cookbook**（Petersen & Pedersen, 2012）——这是机器学习和信号处理领域最权威的矩阵公式手册，汇集了大量实用的矩阵导数、迹导数、行列式导数等结果。本章从中提取最常用的部分，略去过于复杂或应用场景极少的公式，以便快速查阅和学习。

## 1. 符号约定

本章采用**分母布局**（denominator layout）约定，这与大多数机器学习教材（如 Matrix Cookbook）一致：

| 记法 | 含义 | 结果形状 |
|------|------|---------|
| $\dfrac{\partial y}{\partial \mathbf{x}}$ | 标量对列向量求导 | 列向量（与 $\mathbf{x}$ 形状相同） |
| $\dfrac{\partial \mathbf{y}}{\partial x}$ | 列向量对标量求导 | 列向量（与 $\mathbf{y}$ 形状相同） |
| $\dfrac{\partial \mathbf{y}}{\partial \mathbf{x}}$ | 列向量对列向量求导 | 矩阵（Jacobian） |
| $\dfrac{\partial y}{\partial A}$ | 标量对矩阵求导 | 矩阵（与 $A$ 形状相同） |

## 2. 基本微分法则

微分（differential）是导数推导的系统工具。对矩阵 $X$，以下规则成立：

| 法则 | 公式 |
|------|------|
| 常数法则 | $d(A) = 0$（$A$ 为常数矩阵） |
| 线性法则 | $d(\alpha X) = \alpha\, dX$ |
| 加法法则 | $d(X + Y) = dX + dY$ |
| 乘积法则 | $d(XY) = (dX)Y + X(dY)$ |
| 转置法则 | $d(X^\top) = (dX)^\top$ |
| 迹法则 | $d(\text{tr}(X)) = \text{tr}(dX)$ |
| 逆矩阵法则 | $d(X^{-1}) = -X^{-1}(dX)X^{-1}$ |
| 行列式法则 | $d(\det(X)) = \det(X)\,\text{tr}(X^{-1}\,dX)$ |
| 对数行列式法则 | $d(\ln\det(X)) = \text{tr}(X^{-1}\,dX)$ |

**核心技巧**：利用恒等式

$$
df = \text{tr}\!\left(\left(\frac{\partial f}{\partial X}\right)^\top dX\right)
$$

可以从 $df$ 的表达式中直接读出 $\dfrac{\partial f}{\partial X}$，避免逐元素计算。

## 3. 梯度（Gradient）

### 3.1 标量对向量求导

设 $f: \mathbb{R}^n \to \mathbb{R}$，$\mathbf{x} \in \mathbb{R}^n$。$f$ 关于 $\mathbf{x}$ 的**梯度**（gradient）：

$$
\nabla_\mathbf{x} f = \frac{\partial f}{\partial \mathbf{x}} =
\begin{bmatrix}
\dfrac{\partial f}{\partial x_1} \\[6pt]
\dfrac{\partial f}{\partial x_2} \\
\vdots \\
\dfrac{\partial f}{\partial x_n}
\end{bmatrix} \in \mathbb{R}^n
$$

**几何意义**：梯度指向函数值增长最快的方向，其大小为该方向上的变化率。

### 3.2 向量/矩阵形式的一阶导数

以下 $\mathbf{a}, \mathbf{b}$ 为常数向量，$A, B$ 为常数矩阵，$\mathbf{x}$ 为变量向量，$X$ 为变量矩阵。

**向量导数**

| 函数 $f(\mathbf{x})$ | 梯度 $\dfrac{\partial f}{\partial \mathbf{x}}$ |
|----------------------|----------------------------------------------|
| $\mathbf{a}^\top \mathbf{x}$ | $\mathbf{a}$ |
| $\mathbf{x}^\top \mathbf{a}$ | $\mathbf{a}$ |
| $\mathbf{x}^\top \mathbf{x} = \|\mathbf{x}\|^2$ | $2\mathbf{x}$ |
| $\mathbf{x}^\top A \mathbf{x}$（$A$ 对称） | $2A\mathbf{x}$ |
| $\mathbf{x}^\top A \mathbf{x}$（$A$ 一般） | $(A + A^\top)\mathbf{x}$ |
| $\|\mathbf{y} - A\mathbf{x}\|^2$ | $-2A^\top(\mathbf{y} - A\mathbf{x})$ |
| $\mathbf{a}^\top X \mathbf{b}$（对 $\mathbf{x}$ 中某分量） | — |

**矩阵导数（标量函数对矩阵）**

| 函数 $f(X)$ | 导数 $\dfrac{\partial f}{\partial X}$ |
|------------|--------------------------------------|
| $\mathbf{a}^\top X \mathbf{b}$ | $\mathbf{a}\mathbf{b}^\top$ |
| $\mathbf{a}^\top X^\top \mathbf{b}$ | $\mathbf{b}\mathbf{a}^\top$ |
| $\|\mathbf{y} - X\mathbf{x}\|^2$ | $-2(\mathbf{y} - X\mathbf{x})\mathbf{x}^\top$ |
| $\|X\|_F^2 = \text{tr}(X^\top X)$ | $2X$ |
| $\mathbf{x}^\top A \mathbf{x}$（对称 $A$，对 $\mathbf{x}$） | $2A\mathbf{x}$ |

## 4. Jacobian 矩阵

### 4.1 定义

设 $\mathbf{f}: \mathbb{R}^n \to \mathbb{R}^m$，输出为 $\mathbf{f}(\mathbf{x}) = (f_1(\mathbf{x}), \ldots, f_m(\mathbf{x}))^\top$。**Jacobian 矩阵**（Jacobian matrix）是所有偏导数组成的矩阵：

$$
J = \frac{\partial \mathbf{f}}{\partial \mathbf{x}} =
\begin{bmatrix}
\dfrac{\partial f_1}{\partial x_1} & \cdots & \dfrac{\partial f_1}{\partial x_n} \\[6pt]
\vdots & \ddots & \vdots \\[4pt]
\dfrac{\partial f_m}{\partial x_1} & \cdots & \dfrac{\partial f_m}{\partial x_n}
\end{bmatrix} \in \mathbb{R}^{m \times n}
$$

**直觉**：Jacobian 描述了输出空间中每个方向如何随输入变化，是线性近似 $\mathbf{f}(\mathbf{x} + \delta) \approx \mathbf{f}(\mathbf{x}) + J\delta$ 的系数矩阵。

### 4.2 常用 Jacobian

| 映射 $\mathbf{f}(\mathbf{x})$ | Jacobian $J$ |
|-------------------------------|-------------|
| $A\mathbf{x}$（$A \in \mathbb{R}^{m \times n}$ 固定） | $A$ |
| $\sigma(\mathbf{x})$（逐元素激活） | $\text{diag}(\sigma'(\mathbf{x}))$ |
| $\text{softmax}(\mathbf{x})$ | $\text{diag}(\mathbf{p}) - \mathbf{p}\mathbf{p}^\top$（$\mathbf{p} = \text{softmax}(\mathbf{x})$） |
| $\|\mathbf{x}\|_2 \cdot \mathbf{e}_i$（$\ell_2$ 归一化） | $\frac{1}{\|\mathbf{x}\|}(I - \hat{\mathbf{x}}\hat{\mathbf{x}}^\top)$ |

## 5. Hessian 矩阵

### 5.1 定义

设 $f: \mathbb{R}^n \to \mathbb{R}$。**Hessian 矩阵**是 $f$ 的所有二阶偏导数组成的矩阵：

$$
H = \nabla^2 f = \frac{\partial^2 f}{\partial \mathbf{x}^2} =
\begin{bmatrix}
\dfrac{\partial^2 f}{\partial x_1^2} & \cdots & \dfrac{\partial^2 f}{\partial x_1 \partial x_n} \\
\vdots & \ddots & \vdots \\
\dfrac{\partial^2 f}{\partial x_n \partial x_1} & \cdots & \dfrac{\partial^2 f}{\partial x_n^2}
\end{bmatrix} \in \mathbb{R}^{n \times n}
$$

$H$ 是对称矩阵（若 $f$ 二阶连续可微）。

### 5.2 Hessian 与优化

| Hessian 性质 | 对应几何/优化含义 |
|-------------|----------------|
| $H \succ 0$（正定） | 严格局部最小值，损失函数局部凸 |
| $H \preceq 0$（负半定） | 局部最大值或鞍点方向 |
| $H$ 不定（有正有负特征值） | 鞍点（Saddle point） |
| $\kappa(H) \gg 1$（条件数大） | loss 曲面狭长，梯度下降收敛慢 |

**二阶 Taylor 展开**：

$$
f(\mathbf{x} + \delta) \approx f(\mathbf{x}) + \nabla f(\mathbf{x})^\top \delta + \frac{1}{2} \delta^\top H \delta
$$

## 6. 迹导数（Trace Derivatives）

迹导数在推导矩阵运算的梯度时极为常用。以下 $A, B$ 为常数矩阵，$X$ 为变量矩阵。

| 函数 $f(X)$ | 导数 $\dfrac{\partial f}{\partial X}$ |
|------------|--------------------------------------|
| $\text{tr}(X)$ | $I$ |
| $\text{tr}(XA)$ | $A^\top$ |
| $\text{tr}(AX)$ | $A^\top$ |
| $\text{tr}(AXB)$ | $A^\top B^\top$ |
| $\text{tr}(AX^\top B)$ | $BA$ |
| $\text{tr}(X^2)$ | $2X^\top$ |
| $\text{tr}(X^\top X)$ | $2X$ |
| $\text{tr}(X^\top B X)$ | $(B + B^\top)X$ |
| $\text{tr}(X B X^\top)$ | $X(B + B^\top)$ |
| $\text{tr}(A X B X^\top)$ | $A^\top X B^\top + A X B$ |
| $\text{tr}(X^k)$ | $k(X^{k-1})^\top$ |
| $\text{tr}(A X^{-1} B)$ | $-(X^{-1} B A X^{-1})^\top$ |

> **推导方法**：对 $f = \text{tr}(g(X))$ 先写出 $df$，利用迹的循环置换不变性 $\text{tr}(ABC) = \text{tr}(CAB) = \text{tr}(BCA)$，再对比恒等式 $df = \text{tr}\!\left(\left(\frac{\partial f}{\partial X}\right)^\top dX\right)$ 读出导数。

## 7. 行列式与逆矩阵导数

### 7.1 行列式的导数

$$
\frac{\partial \det(X)}{\partial X} = \det(X) \cdot (X^{-1})^\top = \det(X) \cdot X^{-\top}
$$

$$
\frac{\partial \ln|\det(X)|}{\partial X} = (X^{-1})^\top = X^{-\top}
$$

若 $X$ 对称正定，则 $X^{-\top} = X^{-1}$，上式化简为 $X^{-1}$（常见于高斯分布的对数似然推导）。

### 7.2 逆矩阵的导数

$$
\frac{\partial (X^{-1})_{ij}}{\partial X_{kl}} = -(X^{-1})_{ik}(X^{-1})_{lj}
$$

对标量参数 $x$，若 $Y = Y(x)$，则：

$$
\frac{\partial Y^{-1}}{\partial x} = -Y^{-1} \frac{\partial Y}{\partial x} Y^{-1}
$$

对向量形式：

$$
\frac{\partial (\mathbf{a}^\top X^{-1} \mathbf{b})}{\partial X} = -X^{-\top} \mathbf{a} \mathbf{b}^\top X^{-\top}
$$

## 8. 范数导数

### 8.1 向量范数

$$
\frac{\partial \|\mathbf{x}\|_2^2}{\partial \mathbf{x}} = 2\mathbf{x}
$$

$$
\frac{\partial \|\mathbf{x}\|_2}{\partial \mathbf{x}} = \frac{\mathbf{x}}{\|\mathbf{x}\|_2} \quad (\mathbf{x} \ne \mathbf{0})
$$

$$
\frac{\partial \|\mathbf{x} - \mathbf{a}\|_2}{\partial \mathbf{x}} = \frac{\mathbf{x} - \mathbf{a}}{\|\mathbf{x} - \mathbf{a}\|_2}
$$

### 8.2 矩阵范数

$$
\frac{\partial \|X\|_F^2}{\partial X} = \frac{\partial \text{tr}(X^\top X)}{\partial X} = 2X
$$

$$
\frac{\partial \|AX - B\|_F^2}{\partial X} = 2A^\top(AX - B)
$$

$$
\frac{\partial \|XA - B\|_F^2}{\partial X} = 2(XA - B)A^\top
$$

## 9. 链式法则（Chain Rule）

### 9.1 标量情形

设 $y = f(g(\mathbf{x}))$，则：

$$
\frac{dy}{dx_i} = \frac{dy}{dg} \cdot \frac{dg}{dx_i}
$$

### 9.2 向量情形

设 $\mathbf{z} = g(\mathbf{x}) \in \mathbb{R}^k$，$y = f(\mathbf{z}) \in \mathbb{R}$，则：

$$
\frac{\partial y}{\partial \mathbf{x}} = J_g^\top \frac{\partial y}{\partial \mathbf{z}}
$$

其中 $J_g = \dfrac{\partial \mathbf{z}}{\partial \mathbf{x}} \in \mathbb{R}^{k \times n}$ 是 $g$ 的 Jacobian，$\dfrac{\partial y}{\partial \mathbf{z}} \in \mathbb{R}^k$ 是 $f$ 对中间量的梯度。

### 9.3 计算图与链式法则

神经网络的前向传播定义了一个**计算图**（computation graph），反向传播正是在图上从输出到输入逐层应用链式法则：

```
输入 x
  → 线性变换: z = Wx + b
  → 激活函数: a = σ(z)
  → 线性变换: o = Va + c
  → 损失: L = loss(o, y)

反向传播（梯度从右向左流动）：
  ∂L/∂o  →  ∂L/∂V = (∂L/∂o) · aᵀ  , ∂L/∂a = Vᵀ · (∂L/∂o)
         →  ∂L/∂z = diag(σ'(z)) · ∂L/∂a
         →  ∂L/∂W = (∂L/∂z) · xᵀ  , ∂L/∂x = Wᵀ · (∂L/∂z)
```

## 10. 反向传播（Backpropagation）

### 10.1 本质

反向传播是链式法则在计算图上的**高效实现**，避免了重复计算：

1. **前向传播**：计算每个节点的值并缓存（供反向时使用）；
2. **反向传播**：从损失节点出发，依链式法则逆向计算每个参数的梯度。

### 10.2 线性层的梯度

对层 $\mathbf{y} = W\mathbf{x} + \mathbf{b}$，设上游梯度为 $\dfrac{\partial L}{\partial \mathbf{y}} = \boldsymbol{\delta}$，则：

$$
\frac{\partial L}{\partial W} = \boldsymbol{\delta} \mathbf{x}^\top, \quad
\frac{\partial L}{\partial \mathbf{b}} = \boldsymbol{\delta}, \quad
\frac{\partial L}{\partial \mathbf{x}} = W^\top \boldsymbol{\delta}
$$

对批量数据 $Y = XW^\top + \mathbf{1}\mathbf{b}^\top$（$X \in \mathbb{R}^{B \times d_{in}}$，$W \in \mathbb{R}^{d_{out} \times d_{in}}$）：

$$
\frac{\partial L}{\partial W} = \Delta^\top X, \quad
\frac{\partial L}{\partial \mathbf{b}} = \Delta^\top \mathbf{1}, \quad
\frac{\partial L}{\partial X} = \Delta W
$$

其中 $\Delta = \dfrac{\partial L}{\partial Y} \in \mathbb{R}^{B \times d_{out}}$。

### 10.3 Softmax + Cross-Entropy 的梯度

设 $\mathbf{p} = \text{softmax}(\mathbf{z})$，$L = -\sum_k y_k \log p_k$（交叉熵），则：

$$
\frac{\partial L}{\partial \mathbf{z}} = \mathbf{p} - \mathbf{y}
$$

这一简洁的结果是 softmax 与交叉熵组合时 Jacobian 化简的结果。

## 11. 常用矩阵恒等式

在推导梯度时，矩阵求逆恒等式可以大幅简化计算，尤其在高斯过程、卡尔曼滤波和稀疏注意力中频繁出现。

### 11.1 Woodbury 矩阵恒等式

$$
(A + UBV)^{-1} = A^{-1} - A^{-1}U(B^{-1} + VA^{-1}U)^{-1}VA^{-1}
$$

其中 $A \in \mathbb{R}^{n \times n}$，$U \in \mathbb{R}^{n \times k}$，$B \in \mathbb{R}^{k \times k}$，$V \in \mathbb{R}^{k \times n}$。

**意义**：将一个 $n \times n$ 矩阵的求逆问题转化为一个 $k \times k$ 矩阵的求逆（$k \ll n$ 时高效）。

### 11.2 Sherman-Morrison 公式

Woodbury 恒等式在 $U = \mathbf{b}$，$V = \mathbf{c}^\top$，$B = 1$ 时退化为：

$$
(A + \mathbf{b}\mathbf{c}^\top)^{-1} = A^{-1} - \frac{A^{-1}\mathbf{b}\mathbf{c}^\top A^{-1}}{1 + \mathbf{c}^\top A^{-1}\mathbf{b}}
$$

**意义**：已知 $A^{-1}$，对 $A$ 做秩-1 更新后高效更新逆矩阵，无需重新求逆。

### 11.3 矩阵求逆引理（Push-through identity）

$$
A(I + BA)^{-1} = (I + AB)^{-1}A
$$

$$
(I + AB)^{-1}A = A(I + BA)^{-1}
$$

## 12. 常见梯度公式速查

### 12.1 对向量的梯度

$$
\nabla_\mathbf{x} (\mathbf{a}^\top \mathbf{x}) = \mathbf{a}
$$

$$
\nabla_\mathbf{x} (\mathbf{x}^\top A \mathbf{x}) = (A + A^\top)\mathbf{x} = 2A\mathbf{x} \quad (A \text{ 对称})
$$

$$
\nabla_\mathbf{x} \|\mathbf{x} - \mathbf{b}\|^2 = 2(\mathbf{x} - \mathbf{b})
$$

### 12.2 对矩阵的梯度

$$
\frac{\partial}{\partial W} \|XW - Y\|_F^2 = 2X^\top(XW - Y)
$$

$$
\frac{\partial}{\partial W} \text{tr}(W^\top A W) = (A + A^\top)W = 2AW \quad (A \text{ 对称})
$$

$$
\frac{\partial}{\partial \Sigma} \log \det(\Sigma) = \Sigma^{-\top} = \Sigma^{-1} \quad (\Sigma \text{ 对称正定})
$$

## 在 AI 中的应用

| 概念 | AI/ML 中的体现 |
|------|--------------|
| 梯度 $\nabla_\theta \mathcal{L}$ | 参数更新方向；SGD、Adam 的输入 |
| Jacobian | 每层的"敏感度矩阵"；反向传播中梯度的"转发矩阵" |
| Hessian | 二阶优化（Newton、K-FAC）；loss 曲面曲率分析；学习率选择 |
| 迹导数 $\partial\text{tr}(AB)/\partial A$ | 推导 LayerNorm、Attention 的参数梯度 |
| $\partial\ln\det(\Sigma)/\partial\Sigma = \Sigma^{-1}$ | 高斯分布对数似然对协方差矩阵的梯度 |
| Woodbury 恒等式 | 稀疏/低秩注意力计算；线性时间 Transformer；高斯过程推断 |
| Sherman-Morrison | 在线学习中的秩-1 更新；BFGS 拟牛顿法 |
| $\partial L/\partial \mathbf{z} = \mathbf{p} - \mathbf{y}$（softmax+CE） | 分类模型的最终梯度，推动参数更新 |
