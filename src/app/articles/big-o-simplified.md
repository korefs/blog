---
title: "Big O Simplified"
date: "2025-08-08"
tags: ["technology", "big-o"]
location: "Rio de Janeiro, Brazil"
---

One of the most intimidating topics in software engineering for beginners is Big O Notation. It sounds abstract, mathematical, and hard to grasp. But it’s actually one of the most powerful tools you can use to write better, faster, and more scalable code.

This article is not a deep dive into computer science. Instead, it’s a simple and practical explanation of Big O that you can apply right away in your daily coding.

## What is Big O Notation?

Big O describes **how the performance of your code scales** as the size of your input increases. It doesn’t measure time in seconds, it measures **how fast the number of operations grows**.

Imagine you are searching for a name in a list:

- If you look at every item until you find the name, that’s `O(n)`.
- If the list is sorted and you split it in half each time (binary search), that’s `O(log n)`.
- If you have a hash map and access the item directly, that’s `O(1)`.

## The Most Common Complexities

Here’s a simplified list of Big O complexities you’ll encounter most often:

- `O(1)` – Constant time. Fastest possible. No matter the input size, it's always the same speed.
- `O(log n)` – Logarithmic time. Input doubles, operations increase slowly.
- `O(n)` – Linear time. Each item takes one step. Simple loops.
- `O(n log n)` – Log-linear time. Fastest sorting algorithms (like merge sort).
- `O(n^2)` – Quadratic time. Nested loops. Gets slow really fast.
- `O(2^n)` – Exponential time. Usually recursion gone wild.

## Real-World Examples

- Searching a name in a contact list: `O(n)`
- Searching in a sorted array using binary search: `O(log n)`
- Using a dictionary/hash map to get a value: `O(1)`
- Bubble sort: `O(n^2)` - not great for large datasets
- Merge sort or quicksort: `O(n log n)` - efficient and practical

## Why Does Big O Matter?

Big O helps you:

- Decide **which algorithm to use**.
- Understand **why your code is slow**.
- Explain **tradeoffs to teammates**.

It’s the difference between an app that crashes under load and one that scales effortlessly.

## A Practical Debugging Approach

When your code is slow, ask:

- What’s the input size?
- Do I have nested loops? Why?
- Can I use a hash map or set?
- Am I sorting more than necessary?

Often, a single change (e.g. `Array.includes` to a `Set.has`) improves performance drastically.

## Final Thoughts

You don’t need to memorize formulas.

Just remember: Big O gives you a way to **think about performance**. If you can recognize patterns like `O(1)`, `O(n)`, and `O(n^2)`, you’re already ahead.

This is not about being perfect: it's about being aware.

Next time you write a loop, ask yourself: *“Is this the best I can do?”*