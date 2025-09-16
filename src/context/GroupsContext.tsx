import { createContext, useCallback, useContext, useEffect, useMemo, useState, ReactNode } from 'react';

export type Group = { id: string; groupName: string };
export type GroupItem = { id: string; groupId: string; itemName: string; plannedRaw: string; actualRaw: string };
export type Transaction = { id: string; name: string; amount: number; groupItemId: string };

type GroupsContextValue = {
  groups: Group[];
  items: GroupItem[];
  transactions: Transaction[];
  addGroup: (name: string) => void;
  addGroupItem: (groupId: string, name: string) => void;
  setItemPlannedRaw: (itemId: string, raw: string) => void;
  setItemRemainingSpentRaw: (itemId: string, raw: string) => void;
  addTransaction: (tx: Omit<Transaction, 'id'>) => void;
  deleteTransaction: (id: string) => void;
  useGroupItemTotal: (remainingOrSpent: 'Remaining' | 'Spent', itemId: string) => number;
};

const GroupsContext = createContext<GroupsContextValue | undefined>(undefined);

const LS_KEY = 'budget-data-v1';

function loadFromStorage(): { groups: Group[]; items: GroupItem[]; transactions: Transaction[] } {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return { groups: [], items: [], transactions: [] };
    const parsed = JSON.parse(raw);
    return {
      groups: Array.isArray(parsed?.groups) ? parsed.groups : [],
      items: Array.isArray(parsed?.items) ? parsed.items : [],
      transactions: Array.isArray(parsed?.transactions) ? parsed.transactions : [],
    };
  } catch {
    return { groups: [], items: [], transactions: [] };
  }
}

export function GroupsProvider({ children }: { children: ReactNode }) {
  const initial = loadFromStorage();
  const [groups, setGroups] = useState<Group[]>(initial.groups);
  const [items, setItems] = useState<GroupItem[]>(initial.items);
  const [transactions, setTransactions] = useState<Transaction[]>(initial.transactions);

  // Persist on change
  useEffect(() => {
    const payload = JSON.stringify({ groups, items, transactions });
    localStorage.setItem(LS_KEY, payload);
  }, [groups, items, transactions]);

  const addGroup = (name: string) => {
    const newGroup: Group = { id: crypto.randomUUID(), groupName: name };
    setGroups((prev) => [...prev, newGroup]);
  };

  const addGroupItem = (groupId: string, name: string) => {
    const newItem: GroupItem = { id: crypto.randomUUID(), groupId, itemName: name, plannedRaw: '', actualRaw: '' };
    setItems((prev) => [...prev, newItem]);
  };

  const setItemPlannedRaw = (itemId: string, raw: string) => {
    setItems((prev) => prev.map(i => i.id === itemId ? { ...i, plannedRaw: raw } : i));
  };

  const setItemRemainingSpentRaw = (itemId: string, raw: string) => {
    setItems((prev) => prev.map(i => i.id === itemId ? { ...i, actualRaw: raw } : i));
  };

  const addTransaction = (tx: Omit<Transaction, 'id'>) => {
    setTransactions((prev) => [{ id: crypto.randomUUID(), ...tx }, ...prev]);
  };

  const deleteTransaction = (id: string) => {
    setTransactions((prev) => prev.filter(t => t.id !== id));
  };

  const useGroupItemTotal = useCallback((remainingOrSpent: 'Remaining' | 'Spent', itemId: string) => {
    const item = items.find(i => i.id === itemId);
    const plannedRaw = item?.plannedRaw ?? '0';
    const plannedCents = Number.parseInt(plannedRaw, 10);
    const plannedDollars = Number.isNaN(plannedCents) ? 0 : plannedCents / 100;

    const matchingTransactions = transactions.filter(tx => tx.groupItemId === itemId);
    const spent = matchingTransactions.reduce((total, tx) => total + tx.amount, 0);

    if (remainingOrSpent === 'Spent') {
      return spent;
    }

    return plannedDollars - spent;
  }, [items, transactions]);

  const value: GroupsContextValue = useMemo(() => ({
    groups,
    items,
    transactions,
    addGroup,
    addGroupItem,
    setItemPlannedRaw,
    setItemRemainingSpentRaw,
    addTransaction,
    deleteTransaction,
    useGroupItemTotal
  }), [groups, items, transactions, useGroupItemTotal]);

  return (
    <GroupsContext.Provider value={value}>
      {children}
    </GroupsContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useGroups() {
  const ctx = useContext(GroupsContext);
  if (!ctx) {
    throw new Error('useGroups must be used within a GroupsProvider');
  }
  return ctx;
}
