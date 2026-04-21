# Math Foundation for AI

> Before studying the math section in depth, this overview is strongly recommended.

## What This Section Covers

- Linear Algebra
- Calculus
- Probability and Statistics
- Information Theory

## Recommended Resources

- [Math Resources](./resources)

## Core Idea

This section is model-driven rather than textbook-driven. Instead of listing isolated math topics, we ask two practical questions:

1. What math tools are required by each part of an AI model?
2. Where exactly does each math concept appear in model design, training, and analysis?

## A Generic AI Model System

We use a unified training pipeline:

```text
Data
-> Representation
-> Parameterized Function
-> Prediction Distribution
-> Loss
-> Gradient
-> Optimization
-> Trained Model
```

Mathematical tools map to pipeline stages:

- Linear algebra and tensors for representation and transformations
- Calculus and matrix calculus for gradients and backpropagation
- Probability for uncertainty modeling
- Information theory and statistics for objectives and evaluation
- Optimization and numerical methods for stable training

## Suggested Reading Path

1. [Linear Algebra](/math/linear-algebra/)
2. [Calculus](/math/calculus/)
3. [Probability & Statistics](/math/probability-statistics/)
4. [Information Theory](/math/information-theory/)
