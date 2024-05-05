import { Box, Button, Divider, Group, Select, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconBrandLinkedin } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { experienceLevel, resumeType } from '@/lib/constants/resumeInfo';
import { addResumeInfo } from '@/lib/store/resumeDataSlice/resumeInfoSlice';
import { ResumeInfoInterface } from '@/lib/utils/interfaces';

const initialValues: ResumeInfoInterface = {
  uid: '',
  resumeName: '',
  jobField: '',
  experienceLevel: '',
};
const ResumeInfo = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const form = useForm({
    initialValues,
    validate: {
      resumeName: (val) => (val.length < 2 ? null : 'resume name is required'),
    },
  });

  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    const uid = uuidv4();
    dispatch(
      addResumeInfo({
        ...form.values,
        uid,
      })
    );
    router.push(`home/${uid}?type=personal`);
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
