import BudgetGroup from "./BudgetGroup";
import AddGroup from "./AddGroup";
import './centerPanelStyle.css'
import { useGroups } from "../../context/GroupsContext";

export default function BudgetGroups() {
  const { groups, addGroup } = useGroups();

  return (
    <div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li><BudgetGroup groupId="income" groupName="Income" /></li>
        {groups.map(group => (
          <li key={group.id}><BudgetGroup groupId={group.id} groupName={group.groupName} /></li>
        ))}
      </ul>
      <AddGroup onAddGroup={addGroup} />
    </div>
  )
}
