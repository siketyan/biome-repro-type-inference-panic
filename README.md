# biome-repro-type-inference-panic

## Reproduce Steps

1. Build Biome at https://github.com/biomejs/biome/commit/8e77d655baa152e43a26f555508a92622c09277b
2. Run `biome check` in this repository
3. Panic! 💥

```
Biome encountered an unexpected error

This is a bug in Biome, not an error in your code, and we would appreciate it if you could report it to https://github.com/biomejs/biome/issues/ along with the following information to help us fixing the issue.

When opening the issue, please provide a minimal reproduction, or identify and share the file/code that triggers it. Without a way to reproduce the error, the error can't be fixed:

Source Location: crates/biome_module_graph/src/js_module_info/ad_hoc_scope_resolver.rs:196:23
Thread Name: biome::workspace_worker_7
Message: index out of bounds: the len is 2 but the index is 2

/Users/[REDACTED]/biome-repro-type-inference-panic/src/bar.ts internalError/panic  INTERNAL  ━━━━━━━━━━

  ✖ processing panicked: index out of bounds: the len is 2 but the index is 2
  
  ⚠ This diagnostic was derived from an internal Biome error. Potential bug, please report it if necessary.
  

Checked 3 files in 4ms. No fixes applied.
```
