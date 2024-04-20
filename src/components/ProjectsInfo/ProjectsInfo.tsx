import { Box, Fieldset, Group, Text, Textarea, TextInput } from '@mantine/core';
import { MonthPickerInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { IconCircleMinus, IconCirclePlus } from '@tabler/icons-react';
import { SyntheticEvent } from 'react';

export interface ProjectsInterface {
  projectId: number;
  title: string;
  link: string;
  startDate: string;
  endDate: string;
  currentWoring: boolean;
  description: string;
}

export const initialData: ProjectsInterface = {
  projectId: Date.now(),
  title: '',
  link: '',
  startDate: '',
  endDate: '',
  currentWoring: false,
  description: '',
};

const ProjectsInfo = () => {
  const form = useForm({
    mode: 'controlled',
    initialValues: { ExperienceFormData: [{ ...initialData }] },
  });

  const addHandler = (index: number) => {
    console.log(initialData);
    form.insertListItem(
      'ExperienceFormData',
      {
        projectId: Date.now(),
        title: '',
        link: '',
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
        {form.values.ExperienceFormData.length !== 1 && (
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
          label='Title'
          placeholder='AI Fashion Recommendation'
          key='title'
          {...form.getInputProps(`ExperienceFormData.${index}.title`)}
        />
        <TextInput
          required
          label='Link'
          placeholder='www.resume.ai'
          key='degree'
          {...form.getInputProps(`ExperienceFormData.${index}.employmentType`)}
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
          resize='both'
          label='Description'
          key='description'
          minRows={4}
          description='Any details you want to share regarding this project'
          placeholder='Created admin dashboard usinng nextjs & chartjs. Established ssl connection with server to protect all users'
          {...form.getInputProps(`ExperienceFormData.${index}.description`)}
        />
      </Fieldset>
    </Box>
  ));

  return (
    <Box>
      <Text pb={20}>Projects</Text>
      <form onSubmit={submitHandler}>{fields}</form>
    </Box>
  );
};
export default ProjectsInfo;
