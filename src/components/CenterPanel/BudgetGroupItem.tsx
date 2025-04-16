import "./centerPanelStyle.css";

export default function BudgetGroupItem({ itemName }: { itemName: string }) {
  return (
    <div className="budgetGroupItemParent">
      <div>
        {itemName}
      </div>
    </div>
  );
}