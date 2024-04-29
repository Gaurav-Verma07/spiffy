import { Box, Fieldset, Group, Text, Textarea, TextInput } from '@mantine/core';
import { MonthPickerInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { SyntheticEvent } from 'react';

import classes from './ExperienceInfo.module.css';

export interface ExperienceInterface {
  experienceId: number;
  title: string;
  employmentType: string;
  companyName: string;
  locationName: string;
  startDate: string | null;
  currentWoring: boolean;
  endDate: string | null;
  description: string;
}

export const initialData: ExperienceInterface = {
  experienceId: Date.now(),
  title: '',
  employmentType: '',
  companyName: '',
  locationName: '',
  startDate: null,
  endDate: null,
  currentWoring: false,
  description: '',
};

const ExperienceInfo = () => {
  const form = useForm({
    mode: 'controlled',
    initialValues: { ExperienceFormData: [{ ...initialData }] },
  });

  const addHandler = (index: number) => {
    console.log(initialData);
    form.insertListItem(
      'ExperienceFormData',
      {
        experienceId: Date.now(),
        title: '',
        employmentType: '',
        companyName: '',
        locationName: '',
        startDate: '',
        endDate: '',
        currentWoring: false,
        description: '',
      },
      index
    );
    console.log(form.values);
  };
  const removeHandler = (current: number) => {
    console.log({ current });
    form.removeListItem('ExperienceFormData', current);
  };

  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(form.values);
  };

  const fields = form.getValues().ExperienceFormData.map((item, index) => (
    <Box style={{ position: 'relative' }} key={index}>
      <Fieldset mb={20}>
        <TextInput
          required
          label='Title'
          placeholder='Software Developer'
          key='title'
          {...form.getInputProps(`ExperienceFormData.${index}.title`)}
        />
        <TextInput
          required
          label='Employment type'
          placeholder='Please select'
          key='degree'
          {...form.getInputProps(`ExperienceFormData.${index}.employmentType`)}
          mt='md'
        />
        <TextInput
          required
          label='Company Name'
          placeholder='Google'
          key='field of study'
          {...form.getInputProps(`ExperienceFormData.${index}.companyName`)}
          mt='md'
        />
        <Group grow py={20}>
          <MonthPickerInput
            required
            label='Start date'
            placeholder='Pick date'
            key='start date'
            {...form.getInputProps(`ExperienceFormData.${index}.startDate`)}
          />
          <MonthPickerInput
            required
            label='End date'
            placeholder='Pick date'
            key='end date'
            {...form.getInputProps(`ExperienceFormData.${index}.lastDate`)}
          />
        </Group>
        <Textarea
          label='Description'
          key='description'
          description='Any details you want to share from this degree'
          placeholder='Created admin dashboard usinng nextjs & chartjs. Established ssl connection with server to protect all users'
          {...form.getInputProps(`ExperienceFormData.${index}.description`)}
        />
      </Fieldset>
    </Box>
  ));

  return (
    <Box className={classes.main}>
      <Text pb={10}>Your Experiences</Text>
      <form onSubmit={submitHandler}>{fields}</form>
    </Box>
  );
};
export default ExperienceInfo;
