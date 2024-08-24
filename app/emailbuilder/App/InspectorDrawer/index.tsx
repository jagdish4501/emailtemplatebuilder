import React from "react";

import { Box, Drawer, Hidden, Tab, Tabs } from "@mui/material";

import {
  setSidebarTab,
  useInspectorDrawerOpen,
  useSelectedSidebarTab,
} from "../../documents/editor/EditorContext";

import ConfigurationPanel from "./ConfigurationPanel";
import StylesPanel from "./StylesPanel";
import { Block } from "@mui/icons-material";

export const INSPECTOR_DRAWER_WIDTH = 320;

export default function InspectorDrawer() {
  const selectedSidebarTab = useSelectedSidebarTab();
  const inspectorDrawerOpen = useInspectorDrawerOpen();

  const renderCurrentSidebarPanel = () => {
    switch (selectedSidebarTab) {
      case "block-configuration":
        return <ConfigurationPanel />;
      case "styles":
        return <StylesPanel />;
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        right: 0,
        width: inspectorDrawerOpen ? INSPECTOR_DRAWER_WIDTH : 0,
      }}
    >
      <Box
        sx={{
          width: INSPECTOR_DRAWER_WIDTH,
          height: 49,
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Box px={2}>
          <Tabs
            value={selectedSidebarTab}
            onChange={(_, v) => setSidebarTab(v)}
          >
            <Tab value="styles" label="Styles" />
            <Tab value="block-configuration" label="Inspect" />
          </Tabs>
        </Box>
      </Box>
      <Box
        sx={{
          width: INSPECTOR_DRAWER_WIDTH,
          height: "calc(100% - 49px)",
          overflow: "auto",
        }}
      >
        {renderCurrentSidebarPanel()}
      </Box>
    </Box>
  );
}
