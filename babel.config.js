'use strict';

const BABEL_ENV = process.env.BABEL_ENV;
const isBuilding = BABEL_ENV !== undefined && BABEL_ENV !== "cjs";

module.exports = {
  babelrcRoots: [
    ".",
    "packages/*",
  ],
  presets: [
    ["@babel/preset-env", {
      loose: true,
      modules: isBuilding ? false : "cjs"
    }],
    "@babel/preset-react"
  ],
  plugins: [
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-throw-expressions",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-syntax-dynamic-import",
    "dev-expression",
    "transform-react-remove-prop-types",
    ["transform-inline-environment-variables", {
        include: ["COMPAT"]
    }]
  ]
};
