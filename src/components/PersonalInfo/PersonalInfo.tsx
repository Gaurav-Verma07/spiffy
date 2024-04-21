import { Box, Button, Fieldset, Group, Input, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import Image from 'next/image';
import { SyntheticEvent, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { addPersonalInfo } from '@/lib/store/resumeDataSlice/personalInfoSlice';
import store from '@/lib/store/store';
import { PersonalInfoInterface } from '@/lib/utils/interfaces';

import Github from './github.png';
import Linkedin from './linkedin.png';
import Portfolio from './portfolio.png';
import Twitter from './twitter.png';

const initialValues: PersonalInfoInterface = {
  name: '',
  email: '',
  number: '',
  country: '',
  linkedin: '',
  github: '',
  twitter: '',
  portfolio: '',
};

const PersonalInfo = () => {
  const dispatch = useDispatch();
  const newRef = useRef<any>(null);
  const form = useForm({
    initialValues,
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      name: (val) => (val.length > 2 ? null : 'Name should be 3 letter long'),
    },
  });
  console.log(store.getState());
  // const isChanging = useRouteChange(form.isDirty());

  const saveHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    if (form.isValid()) {
      dispatch(
        addPersonalInfo({
          ...form.values,
        })
      );
    }
  };

  // useEffect(() => {
  //   const handleRouteChange = (url: string) => {
  //     if (form.isDirty()) {
  //       router.events.emit('routeChangeError');
  //       console.log('route change detected');
  //       router.replace(router.asPath, undefined, { shallow: true });
  //     }
  //   };

  //   router.events.on('routeChangeStart', handleRouteChange);

  //   return () => {
  //     router.events.off('routeChangeStart', handleRouteChange);
  //   };
  // }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  });

  console.log(form.isDirty());

  const handleOutsideClick = (e: any) => {
    // console.log('outside');
    if (newRef.current && !newRef.current.contains(e.target as Node)) {
      if (
        e.target instanceof HTMLButtonElement ||
        e.target instanceof HTMLAnchorElement
      ) {
        console.log('clicked  a button');
      }
    }
  };

  return (
    <Box ref={newRef}>
      <form onSubmit={saveHandler}>
        <Group grow gap='xl'>
          <Fieldset
            // style={{ alignSelf: 'stretch' }}
            mb={20}
            legend='Personal information'
          >
            <TextInput
              required
              label='Your name'
              {...form.getInputProps('name')}
              placeholder='Your name'
            />
            <TextInput
              required
              label='Email'
              {...form.getInputProps('email')}
              placeholder='Email'
              mt='md'
            />
            <TextInput
              label='Phone Number'
              type='number'
              {...form.getInputProps('number')}
              placeholder='+911'
              mt='md'
            />
            <TextInput
              label='Country of Origin'
              {...form.getInputProps('country')}
              placeholder='Country'
              mt='md'
            />
          </Fieldset>
          <Fieldset legend='Social links'>
            <Input
              my={20}
              height={30}
              {...form.getInputProps('linkedin')}
              placeholder='Linkedin'
              leftSection={
                // <IconBrandLinkedin color='#00abfb' />
                <Image src={Linkedin} alt='linkedin' width={20} height={20} />
              }
            />
            <Input
              my={20}
              height={30}
              placeholder='Github'
              {...form.getInputProps('github')}
              leftSection={
                // <IconBrandLinkedin color='#00abfb' />
                <Image src={Github} alt='Github' width={20} height={20} />
              }
            />
            <Input
              my={20}
              height={30}
              {...form.getInputProps('twitter')}
              placeholder='Twitter'
              leftSection={
                // <IconBrandLinkedin color='#00abfb' />
                <Image src={Twitter} alt='Twitter' width={20} height={20} />
              }
            />
            <Input
              my={20}
              height={30}
              placeholder='Portfolio'
              {...form.getInputProps('portfolio')}
              leftSection={
                // <IconBrandLinkedin color='#00abfb' />
                <Image src={Portfolio} alt='Portfolio' width={20} height={20} />
              }
            />
          </Fieldset>
        </Group>
        <Button type='submit'>Save</Button>
      </form>
    </Box>
  );
};

export default PersonalInfo;
