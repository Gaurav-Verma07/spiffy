import {
  Box,
  Button,
  Checkbox,
  Fieldset,
  Group,
  Select,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import { MonthPickerInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';

import { addExperienceInfo } from '@/lib/store/resumeDataSlice/experienceInfoSlice';
import { ExperienceInterface } from '@/lib/utils/interfaces';

export const initialData: ExperienceInterface = {
  experienceId: 0,
  title: '',
  employmentType: '',
  companyName: '',
  locationName: '',
  startDate: null,
  endDate: null,
  isCurrentWoring: false,
  description: '',
};

const ExperienceInfo = () => {
  const form = useForm({
    mode: 'controlled',
    initialValues: initialData,
  });
  const dispatch = useDispatch();

  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    const startD = form.values.startDate?.toString();
    const endD = form.values.endDate?.toString();
    const experienceId = new Date().getTime();
    dispatch(
      addExperienceInfo({
        ...form.values,
        experienceId: experienceId,
        startDate: startD ? startD : null,
        endDate: endD ? endD : null,
      })
    );
  };

  return (
    <Box>
      <Text pb={20}>Your Experiences</Text>
      <form onSubmit={submitHandler}>
        <Box style={{ position: 'relative' }}>
          <Fieldset mb={20}>
            <TextInput
              required
              label='Title'
              placeholder='Software Developer'
              key='title'
              {...form.getInputProps(`title`)}
            />
            <Select
              required
              label='Employment type'
              placeholder='Please select'
              mt='md'
              data={['Intern', 'Freelancer', 'Full time', 'Part time']}
              {...form.getInputProps(`employmentType`)}
            />
            <TextInput
              required
              label='Company Name'
              placeholder='Google'
              key='field of study'
              {...form.getInputProps(`companyName`)}
              mt='md'
            />
            <Group grow py={20} align='top'>
              <MonthPickerInput
                required
                label='Start date'
                placeholder='Pick date'
                key='start date'
                {...form.getInputProps(`startDate`)}
              />
              <Box>
                <MonthPickerInput
                  required
                  disabled={form.values.isCurrentWoring ? true : false}
                  label='End date'
                  placeholder='Pick date'
                  key='end date'
                  {...form.getInputProps(`endDate`)}
                />
                <Checkbox
                  mt='sm'
                  {...form.getInputProps(`isCurrentWoring`)}
                  label='Currently working here'
                />
              </Box>
            </Group>
            <Textarea
              resize='both'
              label='Description'
              key='description'
              description='Any details you want to share from this degree'
              placeholder='Created admin dashboard usinng nextjs & chartjs. Established ssl connection with server to protect all users'
              {...form.getInputProps(`description`)}
            />
          </Fieldset>
        </Box>
        <Button type='submit'>Save</Button>
      </form>
    </Box>
  );
};
export default ExperienceInfo;
