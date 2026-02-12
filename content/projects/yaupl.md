+++
title = "yaupl"
description = "A small interpreted language written in Kotlin"
github = "https://github.com/Ola-jed/yaupl"
draft = false
+++

## Overview

**yaupl** (Yet Another Useless Programming Language) is an interpreted language built with **Kotlin**.

The project is architected as a Gradle multi-module system, containing the core language logic, a CLI runner with REPL
support, and an experimental C++ virtual machine.

### Key Features

- **Hybrid Execution** — Support for both tree-walk interpretation and JVM bytecode compilation (in progress).
- **First-Class Functions** — Supports recursion, anonymous functions (lambdas), and high-order logic.
- **Object-Oriented** — Full class definitions with support for `static` methods.
- **Rich Standard Library** — Built-in support for dynamic `List`, unique `Set`, `Array`, and `File` I/O.
- **Tooling** — Includes a dedicated REPL, an AST visualizer, and a modular project structure.

---

**Repository:** [GitHub](https://github.com/Ola-jed/yaupl)
