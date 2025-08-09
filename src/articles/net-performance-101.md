---
title: ".NET Performance 101: From Slow to Lightning Fast"
date: "2025-08-08"
tags: ["dotnet", "performance", "backend"]
location: "Rio de Janeiro, Brazil"
---

Performance in .NET is often an afterthought, until the moment your API takes 3 seconds to respond and your users start complaining.  
The good news? .NET has powerful tools and patterns to help you turn a sluggish app into a lightning-fast one.

This is a **practical guide** to improving performance in .NET applications, from profiling to memory optimization and latency reduction.

---

## 1. Measure First, Optimize Later

You can't fix what you can't see. Start by identifying bottlenecks:

- dotnet-counters → Real-time performance monitoring (`dotnet tool install --global dotnet-counters`).
- dotnet-trace → Low-level tracing for CPU usage and allocations.
- Visual Studio Profiler → Great for spotting slow methods, excessive allocations, and blocking calls.
- PerfView → Advanced, free, and used by the .NET team itself.

Tip: Always measure in a realistic environment, production-like data and workloads. Local tests can hide real bottlenecks.

---

## 2. Reduce Memory Allocations

Unnecessary allocations create pressure on the Garbage Collector (GC) and cause pauses that impact latency.

- Use Span<T> and Memory<T> for high-performance data processing without extra copies.
- Reuse objects with ArrayPool<T> or ObjectPool<T> when possible.
- Prefer StringBuilder over string concatenation in loops.
- Avoid LINQ in hot paths, LINQ is elegant but can allocate a lot.
- Use readonly struct for value types that don’t need mutation.

Example: Avoid this:

```csharp
var result = list.Select(x => x.ToUpper()).ToList();
```

Do this instead in performance-critical code:

```csharp
var result = new List<string>(list.Count);
foreach (var item in list)
    result.Add(item.ToUpperInvariant());
```

---

## 3. Minimize Latency in I/O Operations

Most slowness in .NET APIs is due to I/O waits, not CPU work.

- Use async/await properly → Free up threads during waits.
- Batch database operations instead of multiple single calls.
- Cache frequently accessed data (MemoryCache, Redis, etc.).
- Use streaming for large file downloads instead of loading everything into memory.

Example of proper streaming in ASP.NET Core:

```csharp
return File(stream, "application/octet-stream", enableRangeProcessing: true);
```

---

## 4. Optimize Database Access

- Use Dapper or EF Core with tracking disabled when you don’t need change tracking:

```csharp
context.ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
```

- Use compiled queries in EF Core for repeated calls.
- Add indexes in the database for high-selectivity columns.
- Avoid N+1 queries, eager load relationships with .Include() or better, project only what you need.

---

## 5. Tune the Garbage Collector

- For server workloads, use Server GC (<ServerGarbageCollection>true</ServerGarbageCollection> in .csproj).
- For low-latency systems, consider sustained low latency mode:

```csharp
GCSettings.LatencyMode = GCLatencyMode.SustainedLowLatency;
```

---

## 6. Use the Right Data Structures

- Use Dictionary<TKey, TValue> or HashSet<T> for O(1) lookups.
- Use Array or List<T> for sequential access.
- Use Queue<T> or ConcurrentQueue<T> for FIFO scenarios.
- Avoid List.Contains() in large lists, use a HashSet<T> instead.

---

## 7. Leverage Built-in Performance APIs

- System.Buffers.ArrayPool<T> → Reuse arrays to reduce allocations.
- System.IO.Pipelines → High-performance networking.
- ValueTask instead of Task when the result is often synchronous.
- System.Text.Json with source generators for fast serialization.

---

## 8. Continuous Profiling

Performance tuning is never a one-time thing. Integrate profiling into your CI/CD or schedule regular reviews.

---

## Final Thoughts

Performance is a mindset. By measuring, optimizing memory usage, reducing I/O waits, and choosing the right data structures, you can transform your .NET applications from sluggish to lightning-fast.

Remember: Make it work, make it right, then make it fast.
