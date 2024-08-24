"use client";
import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import App from "./App";
import theme from "./theme";
import { setDocumentId } from "./documents/editor/EditorContext";
import { useDocumentId } from "./documents/editor/EditorContext";

const EmailTemplateBuilder: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full h-[50px] text-center mt-1">
        <input
          type="text"
          value={useDocumentId()}
          onChange={(e) => {
            setDocumentId(e.target.value);
          }}
          className="w-[300px] h-[30px] text-xl text-black"
        />
      </div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </div>
  );
};

export default EmailTemplateBuilder;
