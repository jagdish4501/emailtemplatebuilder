import React from "react";
import SaveIcon from "@mui/icons-material/Save";
import { IconButton, Tooltip } from "@mui/material";
import {
  useDocument,
  useDocumentId,
} from "../../../documents/editor/EditorContext";

export default function SaveJson() {
  const doc = useDocument();
  const id = useDocumentId();
  const saveToLocalStorage = () => {
    localStorage.setItem(id, JSON.stringify(doc, null, "  "));
    alert("JSON data saved to localStorage with key: " + id);
  };

  return (
    <Tooltip title="Save JSON to localStorage">
      <IconButton onClick={saveToLocalStorage}>
        <SaveIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  );
}
