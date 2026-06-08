import { spawn } from "node:child_process";
import { resolve } from "node:path";

const wasmDir = resolve(
  process.cwd(),
  "node_modules",
  "@next",
  "swc-wasm-nodejs",
);

const child = spawn("next", ["dev"], {
  cwd: process.cwd(),
  env: {
    ...process.env,
    NEXT_TEST_WASM_DIR: wasmDir,
    // Disable Turbopack – use stable webpack (Turbopack panics on certain TS patterns)
    NEXT_EXPERIMENTAL_TURBOPACK: "0",
  },
  shell: true,
  stdio: "inherit",
});

child.on("exit", (code, signal) => {
  process.exit(code ?? (signal ? 1 : 0));
});
