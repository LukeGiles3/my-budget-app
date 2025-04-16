import "./centerPanelStyle.css";
import BudgetGroupItem from "./BudgetGroupItem";

export default function BudgetGroup({ groupName }: { groupName: string }) {
  return (
    <div className="budgetGroupParent">
      <div className="budgetGroupHeader">
        <div className="budgetGroupName">{groupName}</div>
        <div>Planned</div>
        <div>Remaining</div>
      </div>
      <div>
        <BudgetGroupItem itemName="test"/>
      </div>
    </div>
  );
}
