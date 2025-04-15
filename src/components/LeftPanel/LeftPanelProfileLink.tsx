import LeftPanelLink from "./LeftPanelLink";

import AccountBoxTwoToneIcon from "@mui/icons-material/AccountBoxTwoTone";

export default function LeftPanelProfileLink() {
  return (
    <div className="leftPanelProfileStyle">
      <LeftPanelLink
        linkName={"Profile"}
        linkIcon={<AccountBoxTwoToneIcon />}
      />
    </div>
  );
}
