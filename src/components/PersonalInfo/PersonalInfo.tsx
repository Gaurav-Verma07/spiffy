import { Box, Button, Fieldset, Group, Input, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import Image from 'next/image';
import { SyntheticEvent, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { addPersonalInfo } from '@/lib/store/resumeDataSlice/personalInfoSlice';
import { PersonalInfoInterface } from '@/lib/utils/interfaces';

import Github from './github.png';
import Linkedin from './linkedin.png';
import Portfolio from './portfolio.png';
import Twitter from './twitter.png';

const initialValues: PersonalInfoInterface = {
  uid: Date.now(),
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

  const saveHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    const uid = Date.now();
    if (form.isValid()) {
      dispatch(
        addPersonalInfo({
          ...form.values,
          uid: uid,
        })
      );
    } else {
      console.log('form is not valid');
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  });

  const handleOutsideClick = (e: any) => {
    if (newRef.current && !newRef.current.contains(e.target as Node)) {
      if (
        e.target instanceof HTMLButtonElement ||
        e.target instanceof HTMLAnchorElement
      ) {
        console.log('outside');
      }
    }
  };

  return (
    <Box ref={newRef} flex={1}>
      <form onSubmit={saveHandler}>
        <Group grow gap='xl' align='top'>
          <Fieldset
            style={{ alignSelf: 'stretch' }}
            // mb={20}
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
          <Fieldset legend='Social links' style={{ alignSelf: 'stretch' }}>
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
