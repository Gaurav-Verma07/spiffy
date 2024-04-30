'use client';
import {
  Anchor,
  Avatar,
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Divider,
  Drawer,
  Group,
  HoverCard,
  rem,
  ScrollArea,
  SimpleGrid,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconBook,
  IconChartPie3,
  IconChevronDown,
  IconCode,
  IconCoin,
  IconFingerprint,
  IconNotification,
} from '@tabler/icons-react';
import { usePathname, useRouter } from 'next/navigation';

import classes from './HeroHeader.module.css';

const mockdata = [
  {
    icon: IconCode,
    title: 'Open source',
    description: 'This Pokémon’s cry is very loud and distracting',
  },
  {
    icon: IconCoin,
    title: 'Free for everyone',
    description: 'The fluid of Smeargle’s tail secretions changes',
  },
  {
    icon: IconBook,
    title: 'Documentation',
    description: 'Yanma is capable of seeing 360 degrees without',
  },
  {
    icon: IconFingerprint,
    title: 'Security',
    description: 'The shell’s rounded shape and the grooves on its.',
  },
  {
    icon: IconChartPie3,
    title: 'Analytics',
    description: 'This Pokémon uses its flying ability to quickly chase',
  },
  {
    icon: IconNotification,
    title: 'Notifications',
    description: 'Combusken battles with the intensely hot flames it spews',
  },
];

const HeroHeader = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap='nowrap' align='flex-start'>
        <ThemeIcon size={34} variant='default' radius='md'>
          <item.icon
            style={{ width: rem(22), height: rem(22) }}
            color={theme.colors.blue[6]}
          />
        </ThemeIcon>
        <div>
          <Text size='sm' fw={500}>
            {item.title}
          </Text>
          <Text size='xs' c='dimmed'>
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));
  return (
    <Box
      style={{
        position: pathname === '/dashboard' ? 'fixed' : 'relative',
        background: '#fff',
      }}
    >
      <header className={classes.header}>
        <Group justify='space-between' h='100%'>
          <IconBook
            onClick={() => {
              router.push('/');
            }}
            size={30}
          />

          <Group h='100%' gap={0} visibleFrom='sm'>
            <a href='#' className={classes.link}>
              Home
            </a>
            <HoverCard
              width={600}
              position='bottom'
              radius='md'
              shadow='md'
              withinPortal
            >
              <HoverCard.Target>
                <a href='#' className={classes.link}>
                  <Center inline>
                    <Box component='span' mr={5}>
                      Features
                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={theme.colors.blue[6]}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <Group justify='space-between' px='md'>
                  <Text fw={500}>Features</Text>
                  <Anchor href='#' fz='xs'>
                    View all
                  </Anchor>
                </Group>

                <Divider my='sm' />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group justify='space-between'>
                    <div>
                      <Text fw={500} fz='sm'>
                        <Avatar />
                      </Text>
                      <Text size='xs' c='dimmed'>
                        Their food sources have decreased, and their numbers
                      </Text>
                    </div>
                    <Button variant='default'>
                      <Avatar />
                    </Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <a href='#' className={classes.link}>
              Templates
            </a>
            <a href='#' className={classes.link}>
              Blogs
            </a>
          </Group>

          <Group visibleFrom='sm'>
            {/* <Button variant='default'>Log in</Button> */}
            {/* <Button
              onClick={() => {
                router.push('/auth');
              }}
            > */}
            <Avatar
              size='md'
              src='data:image/jpeg;base64,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'
            />
            {/* </Button> */}
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom='sm'
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size='100%'
        padding='md'
        title='Navigation'
        hiddenFrom='sm'
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx='-md'>
          <Divider my='sm' />

          <a href='#' className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component='span' mr={5}>
                Features
              </Box>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href='#' className={classes.link}>
            Templates
          </a>
          <a href='#' className={classes.link}>
            Blogs
          </a>

          <Divider my='sm' />

          <Group justify='center' grow pb='xl' px='md'>
            {/* <Button variant='default'>Log in</Button> */}
            <Button
              onClick={() => {
                router.push('/auth');
              }}
            >
              <Avatar />
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
};

export default HeroHeader;
