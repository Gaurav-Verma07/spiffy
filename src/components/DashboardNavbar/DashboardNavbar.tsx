import { Center, rem, Stack, Tooltip, UnstyledButton } from '@mantine/core';
import {
  Icon360,
  IconCalendarStats,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconGauge,
  IconHome2,
  IconLogout,
  IconSettings,
  IconSwitchHorizontal,
  IconUser,
} from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import classes from './DashboardNavbar.module.css';

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position='right' transitionProps={{ duration: 0 }}>
      <UnstyledButton
        onClick={onClick}
        className={classes.link}
        data-active={active || undefined}
      >
        <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconGauge, label: 'Dashboard', link: '/dashboard' },
  { icon: IconHome2, label: 'Home', link: '/home' },
  { icon: IconDeviceDesktopAnalytics, label: 'Analytics', link: '' },
  { icon: IconCalendarStats, label: 'Releases', link: '' },
  { icon: IconUser, label: 'Account', link: '' },
  { icon: IconFingerprint, label: 'Security', link: '' },
  { icon: IconSettings, label: 'Settings', link: '' },
];

const DashboardNavbar = () => {
  const [active, setActive] = useState(0);
  const router = useRouter();
  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => {
        setActive(index);
        router.push(link.link);
      }}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <Center>
        <Icon360 type='mark' size={30} />
      </Center>

      <div className={classes.navbarMain}>
        <Stack justify='center' gap={0}>
          {links}
        </Stack>
      </div>

      <Stack justify='center' gap={0}>
        <NavbarLink icon={IconSwitchHorizontal} label='Change account' />
        <NavbarLink icon={IconLogout} label='Logout' />
      </Stack>
    </nav>
  );
};

export default DashboardNavbar;
