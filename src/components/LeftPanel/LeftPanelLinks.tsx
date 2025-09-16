import LeftPanelLink from "./LeftPanelLink";

import RequestPageTwoToneIcon from "@mui/icons-material/RequestPageTwoTone";
import TipsAndUpdatesTwoToneIcon from "@mui/icons-material/TipsAndUpdatesTwoTone";
import PollTwoToneIcon from "@mui/icons-material/PollTwoTone";
import AutoGraphTwoToneIcon from "@mui/icons-material/AutoGraphTwoTone";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";

export default function LeftPanelLinks() {
  const handleClearData = () => {
    const ok = window.confirm("Clear all budget data? This cannot be undone.");
    if (!ok) return;
    try {
      localStorage.removeItem('budget-data-v1');
    } finally {
      window.location.reload();
    }
  };
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
      <LeftPanelLink
        linkName={"Clear Data"}
        linkIcon={<DeleteForeverTwoToneIcon />}
        onClick={handleClearData}
        color="error"
      />
    </div>
  );
}
