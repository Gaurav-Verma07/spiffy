import {
  Box,
  Fieldset,
  Group,
  NumberInput,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import { MonthPickerInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { IconCircleMinus, IconCirclePlus } from '@tabler/icons-react';
import { SyntheticEvent } from 'react';

export interface EducationInterface {
  educationId: number;
  school: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  cgpa: number;
  description: string;
}

export const initialData: EducationInterface = {
  educationId: Date.now(),
  school: '',
  degree: '',
  fieldOfStudy: '',
  startDate: '',
  endDate: '',
  cgpa: 0.0,
  description: '',
};

const EducationInfo = () => {
  const form = useForm({
    mode: 'controlled',
    initialValues: { educationFormData: [{ ...initialData }] },
  });

  const addHandler = (index: number) => {
    const educationId = Date.now();
    console.log(initialData);
    form.insertListItem(
      'educationFormData',
      {
        educationId: Date.now(),
        school: '',
        degree: '',
        fieldOfStudy: '',
        startDate: '',
        endDate: '',
        cgpa: 0.0,
        description: '',
      },
      index
    );
    console.log(form.values);
  };
  const removeHandler = (current: number) => {
    console.log({ current });
    form.removeListItem('educationFormData', current);
  };

  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(form.values);
  };

  const fields = form.getValues().educationFormData.map((item, index) => (
    <Box style={{ position: 'relative' }} key={index}>
      <Box
        style={{
          position: 'absolute',
          right: '-50px',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <IconCirclePlus
          stroke={1}
          color='#777'
          size={40}
          onClick={() => {
            addHandler(index);
          }}
        />
        {form.values.educationFormData.length !== 1 && (
          <IconCircleMinus
            onClick={() => {
              removeHandler(index);
            }}
            stroke={1}
            color='#777'
            size={40}
          />
        )}
      </Box>
      <Fieldset mb={20}>
        <TextInput
          required
          label='School'
          placeholder='Ex. Babu Banarsi University'
          key='school'
          {...form.getInputProps(`educationFormData.${index}.school`)}
        />
        <TextInput
          required
          label='Degree'
          placeholder="Ex. Bachelor's"
          key='degree'
          {...form.getInputProps(`educationFormData.${index}.degree`)}
          mt='md'
        />
        <TextInput
          required
          label='Field of Study'
          placeholder='Ex. Business'
          key='field of study'
          {...form.getInputProps(`educationFormData.${index}.fieldOfStudy`)}
          mt='md'
        />
        <Group grow>
          <MonthPickerInput
            required
            label='Start date'
            placeholder='Pick date'
            key='start date'
            {...form.getInputProps(`educationFormData.${index}.startDate`)}
          />
          <MonthPickerInput
            required
            label='End date'
            placeholder='Pick date'
            key='end date'
            {...form.getInputProps(`educationFormData.${index}.lastDate`)}
          />
        </Group>
        <NumberInput
          label='CGPA'
          description='Enter your latest CGPA obtained'
          placeholder='0.0'
          key='cgpa'
          {...form.getInputProps(`educationFormData.${index}.cgpa`)}
          min={1.0}
          max={10.0}
        />
        <Textarea
          resize='both'
          label='Description'
          key='description'
          description='Any details you want to share from this degree'
          placeholder='Topped the class by Rank 1, was head boy in high school'
          {...form.getInputProps(`educationFormData.${index}.description`)}
        />
      </Fieldset>
    </Box>
  ));

  return (
    <Box>
      <Text pb={20}>Educational information</Text>
      <form onSubmit={submitHandler}>{fields}</form>
    </Box>
  );
};
export default EducationInfo;
