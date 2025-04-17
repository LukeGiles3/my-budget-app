import { TextField } from '@mui/material';
import { useState } from 'react';

const PlannedAmount = () => {
  const [rawAmount, setRawAmount] = useState('');

  const formatCurrency = (value: string) => {
    const number = Number(value.replace(/[^0-9.]/g, ''));
    if (isNaN(number)) return '';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(number / 100); // divide by 100 because user types digits, not decimal
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // remove all non-digits
    setRawAmount(value);
  };

  return (
    <TextField
  variant="standard"
  value={formatCurrency(rawAmount)}
  onChange={handleChange}
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
