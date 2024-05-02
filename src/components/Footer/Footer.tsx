import { ActionIcon, Container, Group, rem } from '@mantine/core';
import {
  IconBook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from '@tabler/icons-react';

import classes from './Footer.module.css';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <IconBook color='white' size={28} />
        <Group
          gap={0}
          className={classes.links}
          justify='flex-end'
          wrap='nowrap'
        >
          <ActionIcon size='lg' color='gray' variant='subtle'>
            <IconBrandTwitter
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size='lg' color='gray' variant='subtle'>
            <IconBrandYoutube
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size='lg' color='gray' variant='subtle'>
            <IconBrandInstagram
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
};

export default Footer;
