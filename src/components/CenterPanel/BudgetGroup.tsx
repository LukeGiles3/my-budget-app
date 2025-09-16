import { useState, useMemo } from "react";
import "./centerPanelStyle.css";
import AddGroupItem from "./AddGroupItem";
import BudgetGroupItem from "./BudgetGroupItem";
import RemainingOrSpent from "./RemainingOrSpent";
import { useGroups } from "../../context/GroupsContext";

export default function BudgetGroup({ groupId, groupName }: { groupId: string, groupName: string }) {
  const [calculation, setCalculation] = useState('Remaining');
  const { items, addGroupItem } = useGroups();

  const groupItems = useMemo(() => items.filter(i => i.groupId === groupId), [items, groupId]);

  return (
    <div className="budgetGroupParent">
      <div className="budgetGroupHeader">
        <div className="budgetGroupName">{groupName}</div>
        <div>Planned</div>
        <div><RemainingOrSpent onSetCalculation={setCalculation} value={calculation} /></div>
      </div>
      <div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {groupItems.map(item => (
            <li key={item.id}>
              <BudgetGroupItem itemId={item.id} itemName={item.itemName} calculationState={calculation} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <AddGroupItem onAddGroupItem={(name) => addGroupItem(groupId, name)} />
      </div>
    </div>
  );
}
