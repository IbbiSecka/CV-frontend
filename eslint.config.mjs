import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off", // Change error to warning
      "react/no-unescaped-entities": "off", // Disable this rule completely
      '@next/next/no-page-custom-font': 'off',
      "@typescript-eslint/no-explicit-any": "off", 
    },
  },
];

export default eslintConfig;
