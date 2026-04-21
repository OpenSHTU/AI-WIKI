# 信息论导论：熵、散度与互信息

信息论为 AI 中的许多概念提供统一语言：模型预测的不确定性可以用**熵**描述，真实分布与模型分布的差异可以用**KL 散度**和**交叉熵**描述，表示与目标之间保留了多少信息可以用**互信息**描述。若无特别说明，本文默认使用 $\log_2$，信息单位为 bit，并约定 $0\log 0=0$。

## 1. 公式速查

设 $X,Y,Z$ 为离散随机变量，联合分布为 $p(x,y,z)$，边缘分布为 $p(x),p(y)$，条件分布为 $p(y\mid x)$。

| 名称 | 公式 | 含义 |
| --- | --- | --- |
| 自信息量 | $i(x)=\log\frac{1}{p(x)}$ | 事件越罕见，发生时带来的信息越大 |
| 熵 | $H(X)=-\sum_x p(x)\log p(x)$<br>$=\mathbb{E}\left[\log\frac{1}{p(X)}\right]$ | 随机变量的平均不确定性 |
| 联合熵 | $H(X,Y)=-\sum_{x,y}p(x,y)\log p(x,y)$ | 同时描述 $(X,Y)$ 的平均不确定性 |
| 条件熵 | $H(Y\mid X)=\sum_x p(x)H(Y\mid X=x)$<br>$=-\sum_{x,y}p(x,y)\log p(y\mid x)$ | 已知 $X$ 后，$Y$ 剩余的不确定性 |
| KL 散度 | $D_{\mathrm{KL}}(p\Vert q)=\sum_x p(x)\log\frac{p(x)}{q(x)}$ | 用 $q$ 近似 $p$ 的分布差异 |
| 交叉熵 | $H(p,q)=-\sum_x p(x)\log q(x)$ | 真实分布为 $p$，模型分布为 $q$ 时的平均负对数概率 |
| 互信息 | $I(X;Y)=D_{\mathrm{KL}}(p(x,y)\Vert p(x)p(y))$ | $X$ 与 $Y$ 共享的信息量 |
| 条件互信息 | $I(X;Y\mid Z)=H(X\mid Z)-H(X\mid Y,Z)$ | 已知 $Z$ 后，$Y$ 对 $X$ 额外提供的信息 |

最重要的一组关系是：

$$
\begin{aligned}
H(X,Y)
&=H(X)+H(Y\mid X)\\
&=H(Y)+H(X\mid Y),\\[4pt]
I(X;Y)
&=H(X)-H(X\mid Y)\\
&=H(Y)-H(Y\mid X)\\
&=H(X)+H(Y)-H(X,Y),\\[4pt]
H(p,q)&=H(p)+D_{\mathrm{KL}}(p\Vert q).
\end{aligned}
$$

直觉上，联合熵关注“合起来有多少不确定性”，条件熵关注“知道一个变量后还剩多少不确定性”，互信息关注“一个变量解释了另一个变量多少不确定性”。

## 2. 熵：不确定性的度量

### 2.1 自信息量

若事件 $X=x$ 的概率为 $p(x)$，其**自信息量**定义为

$$
i(x)=\log\frac{1}{p(x)}=-\log p(x).
$$

必然事件的自信息量为 $0$；小概率事件一旦发生，更“意外”，因此自信息量更大。

### 2.2 熵

随机变量 $X$ 的**熵**是自信息量的期望：

$$
\begin{aligned}
H(X)
&=\mathbb{E}_{X\sim p}\left[\log\frac{1}{p(X)}\right]\\
&=\sum_x p(x)\log\frac{1}{p(x)}\\
&=-\sum_x p(x)\log p(x).
\end{aligned}
$$

熵越大，分布越分散，随机变量越不确定；熵越小，分布越集中，随机变量越确定。

基本性质：

$$
H(X)\ge 0.
$$

当且仅当 $X$ 是确定变量时，$H(X)=0$。若 $|\mathcal X|<\infty$，则

$$
0\le H(X)\le \log|\mathcal X|.
$$

上界在均匀分布 $p(x)=1/|\mathcal X|$ 时取得。令 $u(x)=1/|\mathcal X|$，由 KL 非负性可得

$$
\begin{aligned}
D_{\mathrm{KL}}(p\Vert u)
&=\sum_x p(x)\log\frac{p(x)}{u(x)}\\
&=-H(X)+\log|\mathcal X|\\
&\ge 0.
\end{aligned}
$$

因此 $H(X)\le \log|\mathcal X|$，等号当且仅当 $p=u$。

### 2.3 联合熵

两个随机变量的**联合熵**定义为

$$
\begin{aligned}
H(X,Y)
&=-\sum_{x,y}p(x,y)\log p(x,y)\\
&=\mathbb{E}\left[\log\frac{1}{p(X,Y)}\right].
\end{aligned}
$$

联合熵度量同时描述 $X$ 和 $Y$ 的平均不确定性。若 $X,Y$ 独立，则

$$
H(X,Y)=H(X)+H(Y).
$$

若 $Y=X$，则

$$
H(X,Y)=H(X).
$$

这说明联合熵并不是机械相加：两个变量共享的信息不会被重复计算。

### 2.4 条件熵

**条件熵**定义为

$$
\begin{aligned}
H(Y\mid X)
&=\sum_x p(x)H(Y\mid X=x)\\
&=-\sum_{x,y}p(x,y)\log p(y\mid x)\\
&=\mathbb{E}\left[\log\frac{1}{p(Y\mid X)}\right].
\end{aligned}
$$

它表示已知 $X$ 后，$Y$ 还剩多少不确定性。由链式法则可得

$$
H(Y\mid X)=H(X,Y)-H(X).
$$

由互信息的定义也可写成

$$
H(Y\mid X)=H(Y)-I(X;Y).
$$

也就是说，$Y$ 原本有 $H(Y)$ 的不确定性，知道 $X$ 后被解释掉 $I(X;Y)$，剩下的就是 $H(Y\mid X)$。

### 2.5 条件会降低熵

平均意义下，条件不会增加不确定性：

$$
H(X)\ge H(X\mid Y).
$$

证明非常直接：

$$
H(X)-H(X\mid Y)=I(X;Y)\ge 0.
$$

注意这里说的是平均条件熵 $H(X\mid Y)$。对某个具体取值 $Y=y$，$H(X\mid Y=y)$ 不一定小于 $H(X)$。

## 3. 散度与交叉熵：分布差异的度量

### 3.1 KL 散度

两个分布 $p,q$ 的 **KL 散度**定义为

$$
D_{\mathrm{KL}}(p\Vert q)
=\sum_x p(x)\log\frac{p(x)}{q(x)}.
$$

KL 散度刻画 $q$ 相对于 $p$ 的偏差。它通常不对称：

$$
D_{\mathrm{KL}}(p\Vert q)
\ne
D_{\mathrm{KL}}(q\Vert p).
$$

因此 KL 散度不是严格意义上的距离。

### 3.2 KL 非负性

KL 散度总是非负：

$$
D_{\mathrm{KL}}(p\Vert q)\ge 0.
$$

证明如下。由于 $\log$ 是凹函数，由 Jensen 不等式，

$$
\begin{aligned}
-D_{\mathrm{KL}}(p\Vert q)
&=\sum_x p(x)\log\frac{q(x)}{p(x)}\\
&=\mathbb{E}_{x\sim p}
\left[\log\frac{q(x)}{p(x)}\right]\\
&\le
\log\mathbb{E}_{x\sim p}
\left[\frac{q(x)}{p(x)}\right]\\
&=\log\sum_x q(x)\\
&=0.
\end{aligned}
$$

所以 $D_{\mathrm{KL}}(p\Vert q)\ge 0$，等号当且仅当 $p=q$。

### 3.3 交叉熵

**交叉熵**定义为

$$
H(p,q)=-\sum_x p(x)\log q(x).
$$

它与熵、KL 散度之间有非常重要的分解：

$$
\begin{aligned}
H(p,q)
&=-\sum_x p(x)\log q(x)\\
&=-\sum_x p(x)\log p(x)\\
&\quad+\sum_x p(x)\log\frac{p(x)}{q(x)}\\
&=H(p)+D_{\mathrm{KL}}(p\Vert q).
\end{aligned}
$$

当真实分布 $p$ 固定时，最小化交叉熵 $H(p,q_\theta)$ 等价于最小化 $D_{\mathrm{KL}}(p\Vert q_\theta)$。这也是分类模型和语言模型中交叉熵损失的基本来源。

若 $p$ 是 one-hot 标签分布，则交叉熵退化为

$$
H(p,q_\theta)=-\log q_\theta(y\mid x),
$$

这就是负对数似然（negative log likelihood）。

### 3.4 Perplexity

语言模型中，给定序列 $x_1,\dots,x_n$，

$$
q_\theta(x_1,\dots,x_n)
=\prod_{t=1}^n q_\theta(x_t\mid x_{<t}).
$$

平均负对数似然为

$$
\mathcal L_{\mathrm{NLL}}
=-\frac{1}{n}\sum_{t=1}^n
\log q_\theta(x_t\mid x_{<t}).
$$

若使用 $\log_2$，困惑度为

$$
\mathrm{PPL}=2^{\mathcal L_{\mathrm{NLL}}}.
$$

若使用自然对数，则

$$
\mathrm{PPL}=e^{\mathcal L_{\mathrm{NLL}}}.
$$

困惑度可以理解为模型平均每一步面对的“等效候选数”。交叉熵越低，困惑度越低，模型越确定。

## 4. 互信息：变量之间共享的信息

### 4.1 定义

**互信息**定义为

$$
\begin{aligned}
I(X;Y)
&=\sum_{x,y}p(x,y)
\log\frac{p(x,y)}{p(x)p(y)}\\
&=D_{\mathrm{KL}}\!\left(
p(x,y)\Vert p(x)p(y)
\right).
\end{aligned}
$$

互信息衡量联合分布 $p(x,y)$ 偏离独立分布 $p(x)p(y)$ 的程度。若 $X,Y$ 独立，则

$$
I(X;Y)=0.
$$

反过来，$I(X;Y)=0$ 也意味着 $X,Y$ 独立。

互信息是对称的：

$$
I(X;Y)=I(Y;X).
$$

### 4.2 互信息的等价形式

从定义出发：

$$
\begin{aligned}
I(X;Y)
&=\sum_{x,y}p(x,y)
\log\frac{p(x,y)}{p(x)p(y)}\\
&=\sum_{x,y}p(x,y)
\log\frac{p(x\mid y)}{p(x)}\\
&=\sum_{x,y}p(x,y)\log\frac{1}{p(x)}\\
&\quad-\sum_{x,y}p(x,y)
\log\frac{1}{p(x\mid y)}\\
&=H(X)-H(X\mid Y).
\end{aligned}
$$

同理，

$$
I(X;Y)=H(Y)-H(Y\mid X).
$$

结合链式法则，

$$
\begin{aligned}
I(X;Y)
&=H(X)-H(X\mid Y)\\
&=H(X)+H(Y)-H(X,Y).
\end{aligned}
$$

因此

$$
\boxed{
\begin{aligned}
I(X;Y)
&=H(X)-H(X\mid Y)\\
&=H(Y)-H(Y\mid X)\\
&=H(X)+H(Y)-H(X,Y).
\end{aligned}
}
$$

这三个公式分别对应三种直觉：

- 知道 $Y$ 后，$X$ 的不确定性减少了多少；
- 知道 $X$ 后，$Y$ 的不确定性减少了多少；
- 分别描述 $X,Y$ 时重复计算了多少共享信息。

互信息还满足

$$
0\le I(X;Y)\le \min\{H(X),H(Y)\}.
$$

### 4.3 条件互信息

**条件互信息**定义为

$$
\begin{aligned}
I(X;Y\mid Z)
&=\sum_z p(z)I(X;Y\mid Z=z)\\
&=\sum_{x,y,z}p(x,y,z)\\
&\quad\cdot
\log\frac{p(x,y\mid z)}
{p(x\mid z)p(y\mid z)}.
\end{aligned}
$$

它也可以写成熵的形式：

$$
\begin{aligned}
I(X;Y\mid Z)
&=H(X\mid Z)-H(X\mid Y,Z)\\
&=H(Y\mid Z)-H(Y\mid X,Z).
\end{aligned}
$$

一般情况下，$I(X;Y)$ 和 $I(X;Y\mid Z)$ 没有固定大小关系。条件变量 $Z$ 既可能解释掉相关性，也可能揭示新的依赖关系。

## 5. 链式法则与数据处理

### 5.1 熵的链式法则

由 $p(x,y)=p(x)p(y\mid x)$，

$$
\begin{aligned}
H(X,Y)
&=-\sum_{x,y}p(x,y)\log p(x,y)\\
&=-\sum_{x,y}p(x,y)
\log[p(x)p(y\mid x)]\\
&=H(X)+H(Y\mid X).
\end{aligned}
$$

推广到 $n$ 个变量：

$$
H(X_1,\dots,X_n)
=\sum_{i=1}^n
H(X_i\mid X_1,\dots,X_{i-1}).
$$

### 5.2 互信息的链式法则

互信息也可以逐层展开：

$$
I(X_1,\dots,X_n;Y)
=\sum_{i=1}^n
I(X_i;Y\mid X_1,\dots,X_{i-1}).
$$

证明：

$$
\begin{aligned}
I(X_1,\dots,X_n;Y)
&=H(X_1,\dots,X_n)\\
&\quad-H(X_1,\dots,X_n\mid Y)\\
&=\sum_{i=1}^n
H(X_i\mid X_1,\dots,X_{i-1})\\
&\quad-\sum_{i=1}^n
H(X_i\mid X_1,\dots,X_{i-1},Y)\\
&=\sum_{i=1}^n
I(X_i;Y\mid X_1,\dots,X_{i-1}).
\end{aligned}
$$

### 5.3 KL 散度的链式法则

KL 散度满足

$$
\begin{aligned}
D_{\mathrm{KL}}(p(x,y)\Vert q(x,y))
&=D_{\mathrm{KL}}(p(x)\Vert q(x))\\
&\quad+
D_{\mathrm{KL}}(p(y\mid x)\Vert q(y\mid x)).
\end{aligned}
$$

其中条件 KL 的完整写法是

$$
\begin{aligned}
&D_{\mathrm{KL}}(p(y\mid x)\Vert q(y\mid x))\\
&=\sum_x p(x)\sum_y p(y\mid x)
\log\frac{p(y\mid x)}{q(y\mid x)}.
\end{aligned}
$$

展开证明：

$$
\begin{aligned}
&D_{\mathrm{KL}}(p(x,y)\Vert q(x,y))\\
&=\sum_{x,y}p(x,y)
\log\frac{p(x,y)}{q(x,y)}\\
&=\sum_{x,y}p(x,y)
\log\frac{p(x)p(y\mid x)}
{q(x)q(y\mid x)}\\
&=D_{\mathrm{KL}}(p(x)\Vert q(x))\\
&\quad+
D_{\mathrm{KL}}(p(y\mid x)\Vert q(y\mid x)).
\end{aligned}
$$

### 5.4 Markov 链与数据处理不等式

若

$$
X\to Y\to Z,
$$

则表示在给定 $Y$ 后，$X$ 与 $Z$ 条件独立：

$$
X\perp Z\mid Y.
$$

等价地，

$$
p(x,y,z)=p(x)p(y\mid x)p(z\mid y).
$$

数据处理不等式为

$$
X\to Y\to Z
\quad\Rightarrow\quad
I(X;Y)\ge I(X;Z).
$$

含义是：对信息进行后处理不会凭空增加关于原始变量的信息。若 $Z$ 是由 $Y$ 处理得到的表示，那么 $Z$ 与 $X$ 的互信息不会超过 $Y$ 与 $X$ 的互信息。

证明：

$$
\begin{aligned}
I(X;Y,Z)
&=I(X;Y)+I(X;Z\mid Y)\\
&=I(X;Z)+I(X;Y\mid Z).
\end{aligned}
$$

因为 $X\perp Z\mid Y$，所以 $I(X;Z\mid Y)=0$，于是

$$
I(X;Y)
=I(X;Z)+I(X;Y\mid Z)
\ge I(X;Z).
$$

在表示学习中，这说明一个表示经过变换或降维后，通常只能保留原变量中的一部分信息。若希望表示对目标任务仍然有效，就必须保留与目标相关的那部分信息。

## 6. 公式总览

熵、散度和互信息之间的核心关系可以汇总为：

$$
\begin{aligned}
H(X)
&=-\sum_x p(x)\log p(x),\\[4pt]
H(X,Y)
&=H(X)+H(Y\mid X)\\
&=H(Y)+H(X\mid Y),\\[4pt]
H(Y\mid X)
&=H(X,Y)-H(X)\\
&=H(Y)-I(X;Y),\\[4pt]
I(X;Y)
&=H(X)-H(X\mid Y)\\
&=H(Y)-H(Y\mid X)\\
&=H(X)+H(Y)-H(X,Y)\\
&=D_{\mathrm{KL}}\!\left(
p(x,y)\Vert p(x)p(y)
\right),\\[4pt]
H(p,q)
&=H(p)+D_{\mathrm{KL}}(p\Vert q).
\end{aligned}
$$

记忆方式：

- 熵：一个变量自身的不确定性。
- 联合熵：多个变量合在一起的不确定性。
- 条件熵：已知一部分变量后剩下的不确定性。
- 互信息：一个变量解释另一个变量的不确定性。
- KL 散度：两个分布不一致的程度。
- 交叉熵：用模型分布解释真实数据时的平均负对数概率。
