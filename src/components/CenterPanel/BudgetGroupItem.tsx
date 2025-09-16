import { useState } from "react";
import "./centerPanelStyle.css";
import PlannedAmountInput from "./PlannedAmountInput";
import RemainingOrSpentDisplay from "./RemainingOrSpentDisplay";
import RemainingOrSpent from "./RemainingOrSpent";
import { useGroups } from "../../context/GroupsContext";

export default function BudgetGroupItem({ itemId, itemName }: { itemId: string; itemName: string }) {
  const { items, setItemPlannedRaw, useGroupItemTotal } = useGroups();
  const item = items.find(i => i.id === itemId);

  const plannedRaw = item?.plannedRaw ?? "";
  const [calculation, setCalculation] = useState<"Remaining" | "Spent">("Remaining");
  const calculatedAmount = useGroupItemTotal(calculation, itemId);

  return (
    <div className="budgetGroupItemParent">
      <div className="budgetGroupItemName">
        {itemName}
      </div>
      <div className="budgetGroupItemPlanned">
        <PlannedAmountInput onSetRawAmount={(v) => setItemPlannedRaw(itemId, v)} rawAmount={plannedRaw} />
      </div>
      <div className="budgetGroupItemFilter">
        <RemainingOrSpent value={calculation} onSetCalculation={(mode) => setCalculation(mode as "Remaining" | "Spent")} />
      </div>
      <div className="budgetGroupItemFilter">
        <RemainingOrSpentDisplay amount={calculatedAmount} />
      </div>
    </div>
  );
}
