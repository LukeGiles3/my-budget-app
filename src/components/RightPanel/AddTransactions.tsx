import { Button } from '@mui/material';

type AddTransactionsProps = {
  onClick: () => void;
};

export default function AddTransactions({ onClick }: AddTransactionsProps) {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      sx={{
        borderRadius: '24px',
        textTransform: 'none',
        color: '#1a73e8',
        borderColor: '#1a73e8',
        borderStyle: 'dashed',
        backgroundColor: 'white',
        width: '80%',
        padding: '20px',
        marginTop: '30px',
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
      + Add Transaction
    </Button>
  );
}

