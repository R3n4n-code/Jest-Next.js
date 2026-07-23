import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default tseslint.config(
  {
    ignores: [
      "node_modules",
      ".next",
      "out",
      "dist"
    ],
  },

  {
    files: ["src/**/*.{ts,tsx}"],

    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
    ],

    plugins: {
      "@next/next": nextPlugin,
      react: reactPlugin,
      "react-hooks": reactHooks,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },

    rules: {

      
      "@next/next/no-html-link-for-pages": "off",

      
      "react/react-in-jsx-scope": "off",

      
      ...reactHooks.configs.recommended.rules,


      
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        }
      ],

      
      "semi": ["error", "always"],
      "quotes": [
        "error",
        "double"
      ],

    }
  }
);