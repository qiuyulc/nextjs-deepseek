import { CSSProperties } from "react";
export const theme: Record<
  "light" | "dark" | "system",
  { [key: string]: CSSProperties }
> = {
  dark: {
    hljs: {
      display: "block",
      overflowX: "auto",
      padding: "0.5em",
      color: "#abb2bf",
      background: "#282c34",
    },
    "hljs-comment": {
      color: "#5c6370",
      fontStyle: "italic",
    },
    "hljs-quote": {
      color: "#5c6370",
      fontStyle: "italic",
    },
    "hljs-doctag": {
      color: "#c678dd",
    },
    "hljs-keyword": {
      color: "#c678dd",
    },
    "hljs-formula": {
      color: "#c678dd",
    },
    "hljs-section": {
      color: "#e06c75",
    },
    "hljs-name": {
      color: "#e06c75",
    },
    "hljs-selector-tag": {
      color: "#e06c75",
    },
    "hljs-deletion": {
      color: "#e06c75",
    },
    "hljs-subst": {
      color: "#e06c75",
    },
    "hljs-literal": {
      color: "#56b6c2",
    },
    "hljs-string": {
      color: "#98c379",
    },
    "hljs-regexp": {
      color: "#98c379",
    },
    "hljs-addition": {
      color: "#98c379",
    },
    "hljs-attribute": {
      color: "#98c379",
    },
    "hljs-meta-string": {
      color: "#98c379",
    },
    "hljs-built_in": {
      color: "#e6c07b",
    },
    "hljs-class .hljs-title": {
      color: "#e6c07b",
    },
    "hljs-attr": {
      color: "#d19a66",
    },
    "hljs-variable": {
      color: "#d19a66",
    },
    "hljs-template-variable": {
      color: "#d19a66",
    },
    "hljs-type": {
      color: "#d19a66",
    },
    "hljs-selector-class": {
      color: "#d19a66",
    },
    "hljs-selector-attr": {
      color: "#d19a66",
    },
    "hljs-selector-pseudo": {
      color: "#d19a66",
    },
    "hljs-number": {
      color: "#d19a66",
    },
    "hljs-symbol": {
      color: "#61aeee",
    },
    "hljs-bullet": {
      color: "#61aeee",
    },
    "hljs-link": {
      color: "#61aeee",
      textDecoration: "underline",
    },
    "hljs-meta": {
      color: "#61aeee",
    },
    "hljs-selector-id": {
      color: "#61aeee",
    },
    "hljs-title": {
      color: "#61aeee",
    },
    "hljs-emphasis": {
      fontStyle: "italic",
    },
    "hljs-strong": {
      fontWeight: "bold",
    },
  },
  light: {
    hljs: {
      display: "block",
      overflowX: "auto",
      padding: "0.5em",
      color: "#383a42",
      background: "#fafafa",
    },
    "hljs-comment": {
      color: "#a0a1a7",
      fontStyle: "italic",
    },
    "hljs-quote": {
      color: "#a0a1a7",
      fontStyle: "italic",
    },
    "hljs-doctag": {
      color: "#a626a4",
    },
    "hljs-keyword": {
      color: "#a626a4",
    },
    "hljs-formula": {
      color: "#a626a4",
    },
    "hljs-section": {
      color: "#e45649",
    },
    "hljs-name": {
      color: "#e45649",
    },
    "hljs-selector-tag": {
      color: "#e45649",
    },
    "hljs-deletion": {
      color: "#e45649",
    },
    "hljs-subst": {
      color: "#e45649",
    },
    "hljs-literal": {
      color: "#0184bb",
    },
    "hljs-string": {
      color: "#50a14f",
    },
    "hljs-regexp": {
      color: "#50a14f",
    },
    "hljs-addition": {
      color: "#50a14f",
    },
    "hljs-attribute": {
      color: "#50a14f",
    },
    "hljs-meta-string": {
      color: "#50a14f",
    },
    "hljs-built_in": {
      color: "#c18401",
    },
    "hljs-class .hljs-title": {
      color: "#c18401",
    },
    "hljs-attr": {
      color: "#986801",
    },
    "hljs-variable": {
      color: "#986801",
    },
    "hljs-template-variable": {
      color: "#986801",
    },
    "hljs-type": {
      color: "#986801",
    },
    "hljs-selector-class": {
      color: "#986801",
    },
    "hljs-selector-attr": {
      color: "#986801",
    },
    "hljs-selector-pseudo": {
      color: "#986801",
    },
    "hljs-number": {
      color: "#986801",
    },
    "hljs-symbol": {
      color: "#4078f2",
    },
    "hljs-bullet": {
      color: "#4078f2",
    },
    "hljs-link": {
      color: "#4078f2",
      textDecoration: "underline",
    },
    "hljs-meta": {
      color: "#4078f2",
    },
    "hljs-selector-id": {
      color: "#4078f2",
    },
    "hljs-title": {
      color: "#4078f2",
    },
    "hljs-emphasis": {
      fontStyle: "italic",
    },
    "hljs-strong": {
      fontWeight: "bold",
    },
  },
  system: {},
};
