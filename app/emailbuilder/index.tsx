"use client";
import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";

import App from "./App";
import theme from "./theme";

const Emailbuilder = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

export default Emailbuilder;
