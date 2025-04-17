import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

export default function RemainingOrSpent() {
  const [calculation, setCalculation] = useState('Remaining');

  const handleChange = (event: SelectChangeEvent) => {
    setCalculation(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={calculation}
          onChange={handleChange}
        >
          <MenuItem value={'Remaining'}>Remaining</MenuItem>
          <MenuItem value={'Spent'}>Spent</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
