import React from "react";
import Button from "@mui/material/Button";

type LeftPanelLinkProps = {
  linkName: string;
  linkIcon: React.ReactNode;
  onClick?: () => void;
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
};

export default function LeftPanelLink({
  linkName,
  linkIcon,
  onClick,
  color = "primary",
}: LeftPanelLinkProps) {
  return (
    <div className="linkStyle">
      <Button variant="contained" startIcon={linkIcon} onClick={onClick} color={color}>
        {linkName}
      </Button>
    </div>
  );
}
