import { Box, Typography } from "@mui/material";
import React from "react";

type LayoutType = {
  title: string;
  children: React.ReactNode;
};

const Layout = ({ children, title }: LayoutType) => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h3">{title}</Typography>
      {children}
    </Box>
  );
};

export default Layout;
