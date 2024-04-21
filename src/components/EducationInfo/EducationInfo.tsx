import {
  Box,
  Button,
  Fieldset,
  Group,
  NumberInput,
  rem,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import { MonthPickerInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { IconCalendar } from '@tabler/icons-react';
import { SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';

import { addEducationInfo } from '@/lib/store/resumeDataSlice/educationInfoSlice';
import { EducationInterface } from '@/lib/utils/interfaces';

export const initialData: EducationInterface = {
  educationId: Date.now(),
  school: '',
  degree: '',
  fieldOfStudy: '',
  startDate: null,
  endDate: null,
  cgpa: 0.0,
  description: '',
};

const EducationInfo = () => {
  const form = useForm({
    mode: 'controlled',
    initialValues: { ...initialData },
  });
  const dispatch = useDispatch();

  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    const educationId = Date.now();
    const startD = form.values.startDate?.toString();
    const endD = form.values.endDate?.toString();
    dispatch(
      addEducationInfo({
        ...form.values,
        educationId: educationId,
        startDate: startD,
        endDate: endD,
      })
    );
  };

  return (
    <Box>
      <Text pb={20}>Educational information</Text>
      <form onSubmit={submitHandler}>
        <Fieldset mb={20}>
          <TextInput
            required
            label='School'
            placeholder='Ex. Babu Banarsi University'
            key='school'
            {...form.getInputProps(`school`)}
          />
          <TextInput
            required
            label='Degree'
            placeholder="Ex. Bachelor's"
            key='degree'
            {...form.getInputProps(`degree`)}
            mt='md'
          />
          <TextInput
            label='Field of Study'
            placeholder='Ex. Business'
            key='field of study'
            {...form.getInputProps(`fieldOfStudy`)}
            mt='md'
          />
          <Group grow>
            <MonthPickerInput
              valueFormat='YYYY MMM'
              leftSection={
                <IconCalendar
                  style={{ width: rem(18), height: rem(18) }}
                  stroke={1.5}
                />
              }
              label='Start date'
              placeholder='Pick date'
              key='start date'
              {...form.getInputProps(`startDate`)}
            />
            <MonthPickerInput
              valueFormat='YYYY MMM'
              leftSection={
                <IconCalendar
                  style={{ width: rem(18), height: rem(18) }}
                  stroke={1.5}
                />
              }
              label='End date'
              placeholder='Pick date'
              key='end date'
              {...form.getInputProps(`endDate`)}
            />
          </Group>
          <NumberInput
            label='CGPA'
            description='Enter your latest CGPA obtained'
            placeholder='0.0'
            key='cgpa'
            {...form.getInputProps(`cgpa`)}
            min={1.0}
            max={10.0}
          />
          <Textarea
            resize='both'
            label='Description'
            key='description'
            description='Any details you want to share from this degree'
            placeholder='Topped the class by Rank 1, was head boy in high school'
            {...form.getInputProps(`description`)}
          />
        </Fieldset>
        <Button type='submit'>Save</Button>
      </form>
    </Box>
  );
};
export default EducationInfo;
