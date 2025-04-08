"use client";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function GradientCircularProgress(props: {
  size?: number;
  stopColor?: string[];
}) {
  const { size = 20, stopColor = ["#e01cd5", "#1CB5E0"] } = props;
  return (
    <React.Fragment>
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={stopColor[0]} />
            <stop offset="100%" stopColor={stopColor[1]} />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress
        size={size}
        sx={{ "svg circle": { stroke: "url(#my_gradient)" } }}
      />
    </React.Fragment>
  );
}
