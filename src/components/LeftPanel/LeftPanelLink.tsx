import React from "react";
import Button from "@mui/material/Button";

type LeftPanelLinkProps = {
  linkName: string;
  linkIcon: React.ReactNode;
};

export default function LeftPanelLink({
  linkName,
  linkIcon,
}: LeftPanelLinkProps) {
  return (
    <div className="linkStyle">
      <Button variant="contained" startIcon={linkIcon}>
        {linkName}
      </Button>
    </div>
  );
}
