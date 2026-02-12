+++
title = "FluentPaginator"
description = "A lightweight C# library for seamless IQueryable and IEnumerable pagination"
github = "https://github.com/Ola-jed/FluentPaginator"
draft = false
+++

## Overview

**FluentPaginator** is a streamlined .NET library designed to simplify pagination logic for data collections. By providing intuitive extension methods for `IQueryable` and `IEnumerable`, it allows developers to implement robust pagination with minimal boilerplate code.

The library is ideal for projects using **Entity Framework Core** or in-memory data structures where consistent, readable, and performant data fetching is required.

### Key Features

* **Fluent API** — Chainable extension methods that make pagination code clean and expressive.
* **Generic support** — Works seamlessly with both `IQueryable<T>` for database queries and `IEnumerable<T>` for local collections.
* **Automatic metadata** — Returns comprehensive page info including `HasNext`, `Total`, and `PageSize` automatically.
* **Flexible ordering** — Built-in support for ascending and descending pagination based on custom selectors.

---

**Repository:** [GitHub](https://github.com/Ola-jed/FluentPaginator)
