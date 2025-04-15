import LeftPanelLinks from "./LeftPanelLinks";
import LeftPanelNavIcon from "./LeftPanelNavIcon";
import LeftPanelProfileLink from "./LeftPanelProfileLink";
import "./leftPanelStyle.css";

export default function LeftPanel() {
  return (
    <div className="leftPanelStyle">
      <LeftPanelNavIcon />
      <LeftPanelLinks />
      <LeftPanelProfileLink />
    </div>
  );
}
