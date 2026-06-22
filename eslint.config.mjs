import { FlatCompat } from "@eslint/eslintrc"
import { createRequire } from "node:module"
import { dirname } from "node:path"

const require = createRequire(import.meta.url)
const nextConfigDirectory = dirname(require.resolve("eslint-config-next/package.json"))
const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  resolvePluginsRelativeTo: nextConfigDirectory,
})

export default [
  { ignores: [".next/**", ".next-build/**", ".next-production/**", "dist/**", "node_modules/**", "src/**", "test-results/**"] },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["app/layout.tsx"],
    rules: { "@next/next/no-page-custom-font": "off" },
  },
]
