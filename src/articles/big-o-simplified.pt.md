---
title: "Big O Simplificado"
date: "2025-08-08"
tags: ["technology", "big-o"]
location: "Rio de Janeiro, Brasil"
---

Um dos tópicos mais intimidantes para iniciantes em engenharia de software é a Notação Big O. Parece algo abstrato, matemático e difícil de entender. Mas, na verdade, é uma das ferramentas mais poderosas para escrever códigos melhores, mais rápidos e escaláveis.

Este artigo não é um mergulho profundo em ciência da computação. Em vez disso, é uma explicação simples e prática de Big O que você pode aplicar imediatamente no seu dia a dia de programação.

## O que é a Notação Big O?

Big O descreve **como a performance do seu código escala** conforme o tamanho da entrada aumenta. Não mede tempo em segundos, mas sim **quão rápido cresce o número de operações**.

Imagine que você está procurando um nome em uma lista:

- Se você olha cada item até encontrar o nome, isso é `O(n)`.
- Se a lista está ordenada e você divide ao meio a cada vez (busca binária), isso é `O(log n)`.
- Se você tem um hash map e acessa o item diretamente, isso é `O(1)`.

## As Complexidades Mais Comuns

Aqui está uma lista simplificada das complexidades Big O que você mais vai encontrar:

- `O(1)` – Tempo constante. O mais rápido possível. Não importa o tamanho da entrada, a velocidade é sempre a mesma.
- `O(log n)` – Tempo logarítmico. A entrada dobra, as operações aumentam devagar.
- `O(n)` – Tempo linear. Cada item exige um passo. Laços simples.
- `O(n log n)` – Tempo log-linear. Algoritmos de ordenação mais rápidos (como merge sort).
- `O(n^2)` – Tempo quadrático. Laços aninhados. Fica lento muito rápido.
- `O(2^n)` – Tempo exponencial. Normalmente recursão fora de controle.

## Exemplos do Mundo Real

- Procurar um nome em uma lista de contatos: `O(n)`
- Buscar em um array ordenado usando busca binária: `O(log n)`
- Usar um dicionário/hash map para obter um valor: `O(1)`
- Bubble sort: `O(n^2)` – ruim para grandes volumes de dados
- Merge sort ou quicksort: `O(n log n)` – eficiente e prático

## Por Que Big O Importa?

Big O te ajuda a:

- Decidir **qual algoritmo usar**.
- Entender **por que seu código está lento**.
- Explicar **trade-offs para colegas**.

É a diferença entre um app que trava sob carga e outro que escala sem esforço.

## Uma Abordagem Prática para Debug

Quando seu código está lento, pergunte:

- Qual é o tamanho da entrada?
- Tenho laços aninhados? Por quê?
- Posso usar um hash map ou set?
- Estou ordenando mais do que preciso?

Muitas vezes, uma única mudança (por exemplo, de `Array.includes` para `Set.has`) melhora drasticamente a performance.

## Considerações Finais

Você não precisa decorar fórmulas.

Só lembre: Big O te dá uma forma de **pensar sobre performance**. Se você consegue reconhecer padrões como `O(1)`, `O(n)` e `O(n^2)`, já está à frente.

Não é sobre ser perfeito: é sobre estar atento.

Na próxima vez que escrever um laço, pergunte a si mesmo: *“Isso é o melhor que posso fazer?”*