import { useState } from "react";
import BudgetGroup from "./BudgetGroup";
import AddGroup from "./AddGroup";

interface Group {
    id: string;
    groupName: string;
  }

export default function BudgetGroups() {
    const [groups, setGroups] = useState<Group[]>([]);

    const handleAddGroup = (groupName: string) => {
        const newGroup: Group = {
          id: crypto.randomUUID(),
          groupName,
        };
        setGroups((prev) => [...prev, newGroup]);
      };
    

    return (
        <div>
            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                <li style={{marginBottom: '20px'}}><BudgetGroup groupName="Income" /></li>
                {groups.map(group => (
                    <li key={group.id}><BudgetGroup groupName={group.groupName}/></li>
                ))}
            </ul>
            <AddGroup onAddGroup={handleAddGroup} />
        </div>
    )
}