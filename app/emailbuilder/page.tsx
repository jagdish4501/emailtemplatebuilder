"use client";
import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import App from "./App";
import theme from "./theme";

const EmailTemplateBuilder: React.FC = () => {
  return (
    <div className="flex flex-col">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </div>
  );
};

export default EmailTemplateBuilder;
