import { TextField } from '@mui/material';

const RemainingOrSpentDisplay = ({ amount }: { amount: number }) => {
  const formatCurrency = (value: number) => {
    if (!Number.isFinite(value)) return '';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(value);
  };

  return (
    <TextField
      id="standard-read-only-input"
      variant="standard"
      value={formatCurrency(amount)}
      placeholder="$0.00"
      slotProps={{
        input: {
          readOnly: true,
        },
      }}
      sx={{
        fontSize: '1.25rem',
        width: '120px',
      }}
    />
  );
};

export default RemainingOrSpentDisplay;
