import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { useGroups } from '../../context/GroupsContext';

export type NewTransactionData = {
  name: string;
  amount: number;
  groupItemId: string;
};

type AddTransactionModalProps = {
  open: boolean;
  onClose: () => void;
  onSave: (tx: NewTransactionData) => void;
};

export default function AddTransactionModal({ open, onClose, onSave }: AddTransactionModalProps) {
  const { groups, items } = useGroups();
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [groupItemId, setGroupItemId] = useState('');

  useEffect(() => {
    if (!open) {
      setName('');
      setAmount('');
      setGroupItemId('');
    }
  }, [open]);

  const handleSave = () => {
    const amt = parseFloat(amount);
    if (!name.trim() || isNaN(amt) || !groupItemId) return;
    onSave({ name: name.trim(), amount: amt, groupItemId });
  };
  
  const groupNameById: Record<string, string> = { income: 'Income', ...Object.fromEntries(groups.map(g => [g.id, g.groupName])) };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Add Transaction</DialogTitle>
      <DialogContent>
        <TextField
          margin="normal"
          label="Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="normal"
          label="Amount"
          type="number"
          fullWidth
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="tx-item-label">Group Item</InputLabel>
          <Select
            labelId="tx-item-label"
            label="Group Item"
            value={groupItemId}
            onChange={(e) => setGroupItemId(e.target.value as string)}
          >
            {items.map((it) => (
              <MenuItem key={it.id} value={it.id}>
                {groupNameById[it.groupId] ?? 'Unknown'} / {it.itemName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} variant="contained">Save</Button>
      </DialogActions>
    </Dialog>
  );
}
