import { TextField } from '@mui/material';

const PlannedAmount = ({onSetRawAmount, rawAmount}: {onSetRawAmount: (amount: string) => void; rawAmount: string}) => {
  const formatCurrency = (value: string) => {
    const number = Number(value.replace(/[^0-9.]/g, ''));
    if (isNaN(number)) return '';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(number / 100);
  };

  return (
    <TextField
  variant="standard"
  value={formatCurrency(rawAmount)}
  onChange={(e) => onSetRawAmount(e.target.value.replace(/\D/g, ''))}
  placeholder="$0.00"
  slotProps={{
    input: {
      inputMode: 'numeric',
      style: { textAlign: 'right' },
    },
  }}
  sx={{
    fontSize: '1.25rem',
    width: '120px',
  }}
/>

  );
};

export default PlannedAmount;
