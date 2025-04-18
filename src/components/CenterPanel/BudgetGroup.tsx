import { useState } from "react";
import "./centerPanelStyle.css";
import AddGroupItem from "./AddGroupItem";
import BudgetGroupItem from "./BudgetGroupItem";
import RemainingOrSpent from "./RemainingOrSpent";

interface GroupItem {
  id: string;
  itemName: string;
}

export default function BudgetGroup({ groupName }: { groupName: string }) {
  const [items, setItems] = useState<GroupItem[]>([]);
  const [calculation, setCalculation] = useState('Remaining');
  
  const handleAddGroupItem = (itemName: string) => {
    const newGroupItem: GroupItem = {
      id: crypto.randomUUID(),
      itemName,
    };
    setItems((prev) => [...prev, newGroupItem]);
  };

  return (
    <div className="budgetGroupParent">
      <div className="budgetGroupHeader">
        <div className="budgetGroupName">{groupName}</div>
        <div>Planned</div>
        <div><RemainingOrSpent onSetCalculation={setCalculation} value={calculation} /></div>
      </div>
      <div>
      <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                {items.map(item => (
                    <li key={item.id}><BudgetGroupItem itemName={item.itemName} calculationState={calculation}/></li>
                ))}
            </ul>
      </div>
      <div>
        <AddGroupItem onAddGroupItem={handleAddGroupItem} />
      </div>
    </div>
  );
}
