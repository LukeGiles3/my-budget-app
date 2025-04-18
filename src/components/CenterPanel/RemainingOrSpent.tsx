import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const RemainingOrSpent = ( {onSetCalculation, value}: {onSetCalculation: (calculation: string) => void; value: string } ) => {

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={(e) => onSetCalculation(e.target.value)}
        >
          <MenuItem value={'Remaining'}>Remaining</MenuItem>
          <MenuItem value={'Spent'}>Spent</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default RemainingOrSpent
