import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/custom-form-hook/react-form-handler.js",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      exports: "named"
    },
    {
      file: "dist/index.es.js",
      format: "es"
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({ babelHelpers: "bundled" })
  ],
  external: ["react"] // Don't bundle React
};