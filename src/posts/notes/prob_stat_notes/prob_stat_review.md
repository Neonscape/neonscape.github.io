---
article: true
author: Neonscape
date: 2025-01-03
image: /assets/imgs/202412/202412_6.jpg
cover: /assets/imgs/202412/202412_5.png   
category:
  - notes
tag:
  - Probability & Statistics
---

# 概率论 复习

## 一 样本空间

- 样本空间：实验所有可能结果的集合
  - 其中，每个结果都是样本空间中的一个样本 / 基本事件
  - 样本空间中的任何一个子集都是一个事件。

## 二 $\sigma$-代数

给定一个集合$X$，若其 **子集族** $\mathcal{F}$满足以下条件，则称其为$X$上的$\sigma$代数：

- 包含全集：$X \in \mathcal{F}$。 注意：全集作为一个 **元素** 包含在其中。
- 对补集运算封闭；
- 对可数个集合的并运算封闭。

关键性质：

- 包含空集
- 对于可数集合的交运算也封闭。
- 对于差集运算也封闭。

## 三 条件概率

### 定义

$$
Pr(A | B) = \frac{Pr(A \cap B)}{Pr(B)}
$$

### 链式法则

$$
Pr\left(\bigcap_{i = 1}^{n}A_i\right) = \prod_{i = 1}^{n}Pr(A_i | \cap_{j < i} A_j)
$$

形式化来说，可写成：

$$
Pr\left(A_1 \cap A_2 \cap \dots \cap A_n\right) = Pr(A_1) \cdot Pr(A_2 | A_1) \cdot Pr(A_3 | A_1 \cap A_2) \cdot \dots \cdot Pr(A_n | A_1 \cap A_2 \cap \dots \cap A_{n - 1}).
$$

### 全概率公式

$$
P(A) = \sum_{i = 1}^{n} P(A | B_i) P(B_i) = \sum_{i =1}^{n}Pr(A \cap B_i)
$$

将某个事件的概率划分为几个互斥事件下的条件概率之和。

### 贝叶斯公式

$$
\begin{aligned}
  Pr(B | A) &= \frac{Pr(B)Pr(A | B)}{Pr(A)}
\end{aligned}
$$

$$
\begin{aligned}
  Pr(B_i | A) &= \frac{Pr(B_i)Pr(A | B_i)}{\sum_{j = 1}^{n}Pr(B_j)Pr(A | B_j)}
\end{aligned}
$$


## 四 独立性

若$A$和$B$相互独立，则：

$$
Pr(A \cap B) = Pr(A)Pr(B)
$$

若有一组事件$J = \set{A_1, A_2, \dots, A_n}$满足如下等式：

$$
\begin{aligned}
Pr\left(\bigcap_{i \in J}A_i\right) = \prod_{i \in J}Pr(A_i)
\end{aligned}
$$

则称这一组事件为**相互独立**。

若有一组事件$J = \set{A_1, A_2, \dots, A_n}$，它的 **任意有限子集$J$** 满足以下式子：

$$
\begin{aligned}
\forall i, j, i \neq j, \quad Pr\left(A_i \cap A_j\right) = Pr(A_i)Pr(A_j)
\end{aligned}
$$

则称这一组事件为**两两独立**。

互相独立的事件必定两两独立，两两独立的事件不一定互相独立。

## 五 离散和连续随机变量

### 累积分布函数

累积分布函数（Cumulative Distribution Function，CDF）用于描述一个随机变量X取小于或等于某个值的概率。数学表达形式为：

$$
F(x) = Pr(X \leq x)
$$

其中，$F(x)$是累积分布函数，$X$是随机变量，$x$是任意实数。

有如下性质：

- $\lim_{x \to -\infty}F(x) = 0, \lim_{x \to +\infty}F(x) = 1$
- 单调递增

如果某个CDF能够被表示为某函数从负无穷到x的积分，则称该随机变量为**连续随机变量**；其概率密度函数为CDF的导数。

### 概率质量函数

概率质量函数（Probability Mass Function，PMF）用于描述离散随机变量取某个值的概率。数学表达形式为：

$$
p(x) = Pr(X = x)
$$

其中，$p(x)$是概率质量函数，$X$是离散随机变量，$x$是随机变量可能的取值。

有如下性质：

- $p(x) \geq 0$
- $\sum_{x} p(x) = 1$

### 不同的概率分布

- 古典概型（离散均匀分布）
- 伯努利分布（抛硬币）
- 二项分布（一系列伯努利试验中成功的数量）
- 几何分布（第一次成功时的实验数）
  - 期望$\frac{1}{p}$, 方差$\frac{1-p}{p^2}$
  - 无记忆性：$Pr(X > s + t | X > s) = Pr(X > t)$
  - 唯一离散无记忆分布
- 负二项分布（达到指定次数成功时的失败数）
  - 期望$r\frac{1 - p}{p}$, 方差$r\frac{1-p}{p^2}$
  - pmf: $p(x) = \binom{x + r - 1}{r - 1}p^r(1 - p)^x = (-1)^k\binom{-r}{k}(1-p)^k p^{r}$
  - 期望可以被记为是多个几何分布随机变量期望之和
- 超几何分布（从有限样本中不放回的抽取一定数量，其中正面样本的数量）
  - pmf: $p(X = x) = \frac{\binom{N}{x}\binom{M}{n - x}}{\binom{N}{n}}$
- 泊松分布（在固定时间 / 空间内，某事件发生次数的离散分布）
  - pmf: $p(X = x) = \frac{\lambda^x e^{-\lambda}}{x!}$
  - 期望：$\lambda$， 方差$\lambdasss$
  - 泊松随机变量的和也满足泊松分布
-azscss 多项分布：有多种结果的二项分布

### LOTUS定理

$$
E[g(X)] = \int_{-\infty}^{\infty} g(x)f(x)dx
$$

$$
E[g(X)] = \sum_{x} g(x)p(x)
$$

无需知道函数的分布便能求出函数的期望。

### 期望的线性性

$$
\begin{align}
  \mathbb{E}[aX + b] &= a\mathbb{E}[X] + b\\
  \mathbb{E}[X + Y] &= \mathbb{E}[X] + \mathbb{E}[Y]
\end{align}
$$

### 全期望定理

$$
\begin{align}
  \mathbb{E}[X] &= \mathbb{E}[\mathbb{E}[X | Y]]\\
  \mathbb{E}[X] &= \sum_{y} \mathbb{E}[X | Y = y] \cdot Pr(Y = y)
\end{align}
$$

## 六 正态分布及相关不等式

### 马尔可夫不等式

假设$X$是 **非负随机变量**。

$$
Pr(X \geq a) \leq \frac{\mathbb{E}[X^k]}{a^k}
$$

变式：逆马尔可夫不等式

$$
Pr(X \leq a) = \frac{u - \mathbb{E}[X]}{u - a}
$$

$(X \leq u)$

推广：

$$
Pr(f(X) \geq a) \leq \frac{\mathbb{E}[f(X)]}{a}
$$

### 切比雪夫不等式：用于一阶矩

假设$X$是 **任意随机变量**。

$$
Pr(|X - \mathbb{E}[X]| \geq a) \leq \frac{Var[X]}{a^2}
$$

## 七 方差、协方差

$$
Var[X] = \mathbb{E}[(X - \mathbb{E}[X])^2]
$$

$$
Var[X] = \mathbb{E}[X^2] - (\mathbb{E}[X])^2
$$

方差是二次中心矩；因此有

- $Var[X + a] = Var[X]$
- $Var[aX] = a^2Var[X]$
- $Var[X + Y] = Var[X] + Var[Y] + 2Cov[X, Y]$
  - $Cov[X, Y] = \mathbb{E}[(X - \mathbb{E}[X])(Y - \mathbb{E}[Y])] = \mathbb{E}[XY] - \mathbb{E}[X]\mathbb{E}[Y]$.

有柯西不等式的期望形式：

$$
\mathbb{E}[XY]^2 \leq \mathbb{E}[X^2]\mathbb{E}[Y^2]
$$

定义相关系数$\rho(X, Y) = \frac{Cov(X, Y)}{\sqrt{Var[X]Var[Y]}}$，其取值范围为$[-1, 1]$。

## 八 k阶矩（及不等式）

定义$\mathbb{E}[X] = \mu$. 对于任意$C > 1, k \in \Z \geq 1$, 有

$$
Pr\left(|X - \mu| \geq C \cdot \mathbb{E}\left[|X - \mu|^k\right]^{\frac{1}{k}}\right) \leq \frac{1}{C^k}
$$

### 大偏差边界

$X \tilde{} N(\mu, \sigma^2), a > 0$, 有

$$
\begin{aligned}
Pr(|X - \mu| \geq a\sigma) &\leq 2e^{-\frac{a^2}{2}}\\
\end{aligned}
$$

### Chernoff Bound

$X_1, X_2, \dots, X_n \in \set{1, 2}, X = \sum_{i = 1}^{n}X_i$, 有

$$
\begin{aligned}
Pr(X \geq (1 + \delta)\mu) \leq \left(\frac{e^{\delta}}{(1 + \delta)^{(1 + \delta)}}\right)^{\mu}, (\delta > 0)\\
Pr(X \leq (1 - \delta)\mu) \leq \left(\frac{e^{-\delta}}{(1 - \delta)^{(1 - \delta)}}\right)^{\mu}, (1 > \delta > 0)\\
\end{aligned}
$$

### Chernoff-Hoeffding Bound

$X_1, X_2, \dots, X_n \in \set{0, 1}$, $S_n = \sum_{i = 1}^{n}X_i$, 对于任意$t > 0$, 有

$$
\begin{aligned}
  Pr\left(\left|S_n - \mathbb{E}[S_n]\right| \geq t\right) \leq 2\exp\left(-\frac{2t^2}{n}\right)
\end{aligned}
$$

扩展：

$X_1, X_2, \dots, X_n, X_i \in [a_i, b_i]$, $S_n = \sum_{i = 1}^{n}X_i$, 对于任意$t > 0$, 有

$$
\begin{aligned}
  Pr\left(\left|S_n - \mathbb{E}[S_n]\right| \geq t\right) \leq 2\exp\left(-\frac{2t^2}{\sum_{i = 1}^{n}(b_i - a_i)^2}\right)
\end{aligned}
$$

### McDarmaid's Inequality

$X_1, X_2, \dots, X_n$为独立随机变量，$X_i \in \mathcal{X}_i$.

若$f = \mathcal{X_1} \times \mathcal{X_2} \times \dots \times \mathcal{X_n}$满足

$$
\begin{aligned}
  \forall i, \quad \sup_{x_1 \in \mathcal{X_1}, \dots, x_n \in \mathcal{X_n}} \left|f(x_1, \dots, x_n) - f(x_1, \dots, x_{i - 1}, x_i', x_{i + 1}, \dots, x_n)\right| \leq c_i
\end{aligned}
$$

（任意更改一个参数的选择后差别不超过$c_i$）

则对于任意$t > 0$, 有

$$
\begin{aligned}
  Pr\left(\left|f(X_1, \dots, X_n) - \mathbb{E}[f(X_1, \dots, X_n)]\right| \geq t\right) \leq 2\exp\left(-\frac{2t^2}{\sum_{i = 1}^{n}c_i^2}\right)
\end{aligned}
$$
