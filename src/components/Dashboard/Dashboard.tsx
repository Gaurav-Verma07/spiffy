import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import DashboardNavbar from '@/components/DashboardNavbar/DashboardNavbar';
import DataInput from '@/components/DataInput/DataInput';
import HeroHeader from '@/components/HeroHeader/HeroHeader';

const Dashboard = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      // header={{ height: { base: 60, md: 70, lg: 80 } }}
      navbar={{
        width: { base: 80, md: 80, lg: 80 },
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding='md'
    >
      <AppShell.Header>
        <HeroHeader />
      </AppShell.Header>
      <AppShell.Navbar>
        <DashboardNavbar />
      </AppShell.Navbar>
      <AppShell.Main pt={20}>
        <DataInput />
      </AppShell.Main>
    </AppShell>
  );
};

export default Dashboard;
