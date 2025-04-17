import React, { useState } from 'react';
import { Button, TextField, Box, Stack } from '@mui/material';

interface AddGroupItemProps {
  onAddGroupItem: (name: string) => void;
}

const AddGroupItem: React.FC<AddGroupItemProps> = ({ onAddGroupItem }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (name.trim()) {
      onAddGroupItem(name.trim());
      setName('');
      setIsAdding(false);
    }
  };

  const handleCancel = () => {
    setName('');
    setIsAdding(false);
  };

  return (
    <Box my={2}>
      {isAdding ? (
        <Stack direction="row" spacing={2} alignItems="center" margin={'30px'}>
          <TextField
            size="small"
            autoFocus
            label="Item name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button variant="contained" onClick={handleSubmit}>
            Save
          </Button>
          <Button variant="text" onClick={handleCancel}>
            Cancel
          </Button>
        </Stack>
      ) : (
        <Button
          variant="outlined"
          onClick={() => setIsAdding(true)}
          sx={{
            borderRadius: '24px',
            textTransform: 'none',
            color: '#1a73e8',
            borderColor: '#1a73e8',
            borderStyle: 'dashed',
            backgroundColor: 'white',
            width: '1200px',
            padding: '20px',
            margin: '30px',
            justifyContent: 'flex-start',
            textAlign: 'left',
            '&:hover': {
              backgroundColor: '#e8f0fe',
              borderColor: '#1a73e8',
            },
            fontWeight: 500,
            px: 2,
            py: 1,
            boxShadow: 'none',
          }}
        >
          + ADD ITEM
        </Button>
      )}
    </Box>
  );
};

export default AddGroupItem;