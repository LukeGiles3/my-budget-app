import LeftPanelLink from "./LeftPanelLink";

import RequestPageTwoToneIcon from "@mui/icons-material/RequestPageTwoTone";
import TipsAndUpdatesTwoToneIcon from "@mui/icons-material/TipsAndUpdatesTwoTone";
import PollTwoToneIcon from "@mui/icons-material/PollTwoTone";
import AutoGraphTwoToneIcon from "@mui/icons-material/AutoGraphTwoTone";

export default function LeftPanelLinks() {
  return (
    <div className="leftPanelNavLinkStyling">
      <LeftPanelLink
        linkName={"Budget"}
        linkIcon={<RequestPageTwoToneIcon />}
      />
      <LeftPanelLink
        linkName={"Tips"}
        linkIcon={<TipsAndUpdatesTwoToneIcon />}
      />
      <LeftPanelLink linkName={"Charts"} linkIcon={<PollTwoToneIcon />} />
      <LeftPanelLink linkName={"Roadmap"} linkIcon={<AutoGraphTwoToneIcon />} />
    </div>
  );
}
