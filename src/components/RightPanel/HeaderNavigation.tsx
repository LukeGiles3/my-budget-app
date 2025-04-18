import { Tabs, Tab, Box } from '@mui/material';
import { AccountBalance, AttachMoney, Assessment } from '@mui/icons-material';

const HeaderNavigation = ({ onSetActiveTab, activeTab }: { onSetActiveTab: (activeTab: number) => void; activeTab: number}) => {

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs
        value={activeTab}
        onChange={(_, newValue: number) => onSetActiveTab(newValue)}
        centered
        variant="fullWidth"
      >
        <Tab
          icon={<Assessment />}
          label="Summary"
          sx={{
            flexDirection: 'column',
            fontWeight: activeTab === 0 ? 'bold' : 'normal',
            color: activeTab === 0 ? 'primary.main' : 'text.secondary',
          }}
        />
        <Tab
          icon={<AttachMoney />}
          label="Transactions"
          sx={{
            flexDirection: 'column',
            fontWeight: activeTab === 1 ? 'bold' : 'normal',
            color: activeTab === 1 ? 'primary.main' : 'text.secondary',
          }}
        />
        <Tab
          icon={<AccountBalance />}
          label="Accounts"
          sx={{
            flexDirection: 'column',
            fontWeight: activeTab === 2 ? 'bold' : 'normal',
            color: activeTab === 2 ? 'primary.main' : 'text.secondary',
          }}
        />
      </Tabs>
    </Box>
  );
};

export default HeaderNavigation;
