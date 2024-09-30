import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ["src/**/*.{js,ts,jsx,tsx}"],
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": 'off',
      "@typescript-eslint/no-explicit-any":'off'
    },
    languageOptions: {
      globals: globals.browser,
    },
  },
];
