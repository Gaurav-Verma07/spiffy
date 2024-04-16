import {
  Box,
  Button,
  Fieldset,
  Group,
  NumberInput,
  TextInput,
  Textarea,
} from '@mantine/core';
import { MonthPickerInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import {
  IconCheck,
  IconCircleCheck,
  IconCircleMinus,
  IconCirclePlus,
} from '@tabler/icons-react';
import {
  EducationInterface,
  initialData,
} from 'components/EducationInfo/EducationInfo';
import { SyntheticEvent, useState } from 'react';

const EducationForm = ({
  current,
  currInd,
  addHandler,
  addData,
  removeHandler,
}: {
  currInd: number;
  current: number;
  addHandler: (current: number) => void;
  removeHandler: (current: number) => void;
  addData: (data: { educationId: number } & EducationInterface) => void;
}) => {
  const [educationData, setEducationdata] =
    useState<EducationInterface>(initialData);

  const form = useForm({
    mode: 'controlled',
    initialValues: {
      ...initialData,
    },

    validate: {
      school: (value) =>
        value.length < 2 ? ' name must have at least 2 letters' : null,
      degree: (value) =>
        value.length < 2 ? ' degree must have at least 2 letters' : null,
      fieldOfStudy: (value) =>
        value.length < 2 ? ' field must have at least 2 letters' : null,
      // startDate: (value)=>(value.length<2? ' name must have at least 2 letters': null),
      // endDate: (value)=>(value.length<2? ' name must have at least 2 letters': null),
    },
  });

  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    // console.log('values', form.values);
    addData({ ...form.values, educationId: current });
  };

  console.log('check', form.isValid());
  return (
    <Box style={{ position: 'relative' }}>
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
            addHandler(current);
          }}
        />
        {currInd !== 0 && (
          <IconCircleMinus
            onClick={() => {
              removeHandler(current);
            }}
            stroke={1}
            color='#777'
            size={40}
          />
        )}
        {/* <IconCheck stroke={1} color='#777' size={40} /> */}
      </Box>
      <form onSubmit={submitHandler}>
        <Fieldset mb={20}>
          <TextInput
            required
            label='School'
            placeholder='Ex. Babu Banarsi University'
            key='school'
            {...form.getInputProps('school')}
          />
          <TextInput
            required
            label='Degree'
            placeholder="Ex. Bachelor's"
            key='degree'
            {...form.getInputProps('degree')}
            mt='md'
          />
          <TextInput
            required
            label='Field of Study'
            placeholder='Ex. Business'
            key='field of study'
            {...form.getInputProps('fieldOfStudy')}
            mt='md'
          />
          <Group grow>
            <MonthPickerInput
              required
              label='Start date'
              placeholder='Pick date'
              key='start date'
              {...form.getInputProps('startDate')}
            />
            <MonthPickerInput
              required
              label='End date'
              placeholder='Pick date'
              key='end date'
              {...form.getInputProps('lastDate')}
            />
          </Group>
          <NumberInput
            label='CGPA'
            description='Enter your latest CGPA obtained'
            placeholder='0.0'
            key='cgpa'
            {...form.getInputProps('cgpa')}
            min={1.0}
            max={10.0}
          />
          <Textarea
            resize='both'
            label='Description'
            key='description'
            description='Any details you want to share from this degree'
            placeholder='Topped the class by Rank 1, was head boy in high school'
            {...form.getInputProps('description')}
          />
          <Button disabled={!form.isValid()} type='submit' w='100%' my={10}>
            Save
          </Button>
        </Fieldset>
      </form>
    </Box>
  );
};

export default EducationForm;
