'use client';
import {
  Anchor,
  Button,
  Checkbox,
  Divider,
  Group,
  Paper,
  PaperProps,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { upperFirst, useToggle } from '@mantine/hooks';
import { useRouter } from 'next/navigation';
import { SyntheticEvent } from 'react';

import classes from './Authentication.module.css';

import GoogleButton from '@/components/Authentication/GoogleButton';

const Authentication = (props: PaperProps) => {
  const [type, toggle] = useToggle(['login', 'register']);
  const router = useRouter();
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) =>
        val.length <= 6
          ? 'Password should include at least 6 characters'
          : null,
    },
  });

  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    if (form.isValid()) {
      router.push('/home');
    }
  };

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Paper radius='md' p='xl' {...props}>
          <Text size='lg' fw={500}>
            Welcome to Mantine, {type} with
          </Text>

          <Group grow mb='md' mt='md'>
            <GoogleButton radius='xl'>Google</GoogleButton>
            {/* <TwitterButton radius="xl">Twitter</TwitterButton> */}
          </Group>

          <Divider
            label='Or continue with email'
            labelPosition='center'
            my='lg'
          />

          <form onSubmit={submitHandler}>
            <Stack>
              {/* {type === 'register' && (
                <TextInput
                  label='Name'
                  placeholder='Your name'
                  value={form.values.name}
                  onChange={(event) =>
                    form.setFieldValue('name', event.currentTarget.value)
                  }
                  radius='md'
                />
              )} */}

              <TextInput
                required
                label='Email'
                placeholder='hello@mantine.dev'
                value={form.values.email}
                onChange={(event) =>
                  form.setFieldValue('email', event.currentTarget.value)
                }
                error={form.errors.email && 'Invalid email'}
                radius='md'
              />

              <PasswordInput
                required
                label='Password'
                placeholder='Your password'
                value={form.values.password}
                onChange={(event) =>
                  form.setFieldValue('password', event.currentTarget.value)
                }
                error={
                  form.errors.password &&
                  'Password should include at least 6 characters'
                }
                radius='md'
              />

              {type === 'register' && (
                <Checkbox
                  label='I accept terms and conditions'
                  checked={form.values.terms}
                  onChange={(event) =>
                    form.setFieldValue('terms', event.currentTarget.checked)
                  }
                />
              )}
            </Stack>

            <Group justify='space-between' mt='xl'>
              <Anchor
                component='button'
                type='button'
                c='dimmed'
                onClick={() => toggle()}
                size='xs'
              >
                {type === 'register'
                  ? 'Already have an account? Login'
                  : "Don't have an account? Register"}
              </Anchor>
              <Button type='submit' radius='xl'>
                {upperFirst(type)}
              </Button>
            </Group>
          </form>
        </Paper>{' '}
      </Paper>
    </div>
  );
};

export default Authentication;
