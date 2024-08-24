import { TEditorConfiguration } from "../../documents/editor/core";

function getAllLocalStorageData(): Record<string, string | null> {
  const data: Record<string, string | null> = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key !== null) {
      const value = localStorage.getItem(key);
      if (value) data[key] = JSON.parse(value);
    }
  }
  return data;
}

const data = getAllLocalStorageData();

const EMPTY_EMAIL_MESSAGE: TEditorConfiguration = {
  root: {
    type: "EmailLayout",
    data: {
      backdropColor: "#F5F5F5",
      canvasColor: "#FFFFFF",
      textColor: "#262626",
      fontFamily: "MODERN_SANS",
      childrenIds: [],
    },
  },
};

export default EMPTY_EMAIL_MESSAGE;
