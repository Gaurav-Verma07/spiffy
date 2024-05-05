import { Box, Button, Divider, Group, Select, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconBrandLinkedin } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { SyntheticEvent } from 'react';

import { experienceLevel, resumeType } from '@/lib/constants/resumeInfo';

const ResumeInfo = () => {
  const router = useRouter();

  const form = useForm({
    initialValues: {
      resumeName: '',
      jobField: '',
      experienceLevel: '',
    },
    validate: {
      resumeName: (val) => (val.length < 2 ? null : 'resume name is required'),
    },
  });

  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    const resumeID = '239u420u34';
    router.push(`home/${resumeID}?type=personal`);
  };

  return (
    <Box my={20}>
      <form onSubmit={submitHandler}>
        <TextInput
          my={20}
          required
          label='Resume name'
          {...form.getInputProps('resumeName')}
        />
        <Select
          my={20}
          label='Job Field'
          placeholder='Pick here'
          data={resumeType}
          {...form.getInputProps('jobField')}
          searchable
        />
        <Select
          my={20}
          label='Experience Level'
          {...form.getInputProps('experienceLevel')}
          placeholder='Pick here'
          data={experienceLevel}
          searchable
        />
        <Button variant='transparent' ml={0} pl={0} color='grey'>
          Import from{'  '}
          <IconBrandLinkedin color='blue' />
        </Button>
        <Divider my={10} />
        <Group grow my={20}>
          {/* <Button variant='outline' color='red'>
            Cancel
          </Button> */}
          <Button type='submit' disabled={form.isValid()} variant=''>
            Continue
          </Button>
        </Group>
      </form>
    </Box>
  );
};

export default ResumeInfo;
