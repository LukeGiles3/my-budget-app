import React, { useMemo, useState } from 'react';
import { Box, List, Divider, Typography } from '@mui/material';
import AddTransactions from './AddTransactions';
import Transaction from './Transaction';
import AddTransactionModal, { NewTransactionData } from './AddTransactionModal';
import { useGroups } from '../../context/GroupsContext';

const Transactions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { groups, items, transactions, addTransaction, deleteTransaction } = useGroups();

  const handleSave = (data: NewTransactionData) => {
    addTransaction({ name: data.name, amount: data.amount, groupItemId: data.groupItemId });
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    deleteTransaction(id);
  };

  const groupMap = useMemo(() => {
    const map: Record<string, string> = { income: 'Income' };
    groups.forEach(g => { map[g.id] = g.groupName; });
    return map;
  }, [groups]);

  const itemMap = useMemo(() => {
    const map: Record<string, { itemName: string; groupId: string }> = {};
    items.forEach(it => { map[it.id] = { itemName: it.itemName, groupId: it.groupId }; });
    return map;
  }, [items]);

  return (
    <div>
      <Box my={2}>
        <AddTransactions onClick={() => setIsModalOpen(true)} />
      </Box>
      <Box>
        {transactions.length === 0 ? (
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            No transactions yet
          </Typography>
        ) : (
          <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent' }}>
            {transactions.map((t, idx) => (
              <React.Fragment key={t.id}>
                <Transaction
                  id={t.id}
                  name={`${t.name} — $${t.amount.toFixed(2)} (${groupMap[itemMap[t.groupItemId]?.groupId || ''] || 'Unknown'} / ${itemMap[t.groupItemId]?.itemName || 'Unknown'})`}
                  onDelete={handleDelete}
                />
                {idx < transactions.length - 1 && <Divider component="li" />}
              </React.Fragment>
            ))}
          </List>
        )}
      </Box>
      <AddTransactionModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
      />
    </div>
  );
}
export default Transactions;
