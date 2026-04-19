# 知识地图

这里维护主题之间的显式链接关系，用来弥补普通目录树无法表达的交叉依赖。

## 数学到 AI

- [矩阵与线性变换](./foundations/math/linear-algebra/matrices.md) -> [自注意力](./architectures/attention/self-attention.md) -> [Transformer](./llm/transformer/transformer.md)
- [导数与梯度](./foundations/math/calculus/derivatives-gradients.md) -> [反向传播](./foundations/ml/backpropagation.md) -> [预训练目标](./llm/pretraining/objectives.md)
- [信息论基础](./foundations/math/probability/information-theory.md) -> [语言建模](./nlp/basics/language-modeling.md) -> [Tokenizer](./llm/pretraining/tokenizers.md)

## NLP 到 LLM

- [文本预处理](./nlp/basics/text-preprocessing.md) -> [词向量](./nlp/representation/word-embeddings.md) -> [上下文表示](./nlp/representation/contextual-representations.md)
- [RNN 与 LSTM](./nlp/sequence-models/rnn-lstm.md) -> [Seq2Seq](./nlp/sequence-models/seq2seq.md) -> [注意力前夜](./nlp/sequence-models/pre-transformer-attention.md)
- [注意力机制](./architectures/attention/attention-mechanism.md) -> [自注意力](./architectures/attention/self-attention.md) -> [GPT](./llm/transformer/gpt.md)

## LLM 到前沿专题

- [Transformer](./llm/transformer/transformer.md) -> [视觉语言模型](./multimodal/vision-language/vision-language-models.md) -> [多模态对齐](./multimodal/alignment/multimodal-alignment.md)
- [RAG](./llm/rag/retrieval-augmented-generation.md) -> [Agent](./llm/agents/agent-basics.md) -> [感知决策闭环](./embodied-ai/basics/perception-action-loop.md)
- [预训练目标](./llm/pretraining/objectives.md) -> [世界模型基础](./world-models/basics/world-model-basics.md) -> [模型预测控制](./world-models/control/model-predictive-control.md)
