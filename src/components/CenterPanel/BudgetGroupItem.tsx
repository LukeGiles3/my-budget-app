import "./centerPanelStyle.css";
import PlannedAmount from "./PlannedAmount";

export default function BudgetGroupItem({ itemName }: { itemName: string }) {
  return (
    <div className="budgetGroupItemParent">
      <div className="budgetGroupItemName">
        {itemName}
      </div>
      <div className="budgetGroupItemPlanned">
        <PlannedAmount />
      </div>
      <div className="budgetGroupItemFilter">
        amount
      </div>
    </div>
  );
}