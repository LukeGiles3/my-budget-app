import { IconButton, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

type TransactionProps = {
  id: string;
  name: string;
  onDelete: (id: string) => void;
};

export default function Transaction({ id, name, onDelete }: TransactionProps) {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={() => onDelete(id)}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText primary={name} />
    </ListItem>
  );
}
