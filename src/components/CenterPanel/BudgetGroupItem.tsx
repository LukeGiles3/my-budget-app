import { useState } from "react";
import "./centerPanelStyle.css";
import PlannedAmount from "./PlannedAmount";

export default function BudgetGroupItem({ itemName, calculationState }: { itemName: string, calculationState: string}) {
  const [rawAmount, setRawAmount] = useState('')

  return (
    <div className="budgetGroupItemParent">
      <div className="budgetGroupItemName">
        {itemName}
      </div>
      <div className="budgetGroupItemPlanned">
        <PlannedAmount onSetRawAmount={setRawAmount} rawAmount={rawAmount}/>
      </div>
      <div className="budgetGroupItemFilter">
        {calculationState === 'Remaining' ? (
          <div>remaining</div>
        ) : (
          <div>spent</div>
        )}
      </div>
    </div>
  );
}