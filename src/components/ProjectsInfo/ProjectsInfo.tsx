import {
  Box,
  Button,
  Checkbox,
  Fieldset,
  Group,
  rem,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import { MonthPickerInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { IconCalendar } from '@tabler/icons-react';
import { SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { resumeInputType } from '@/lib/enums/resumeDataEnum';
import { addProjectsInfo } from '@/lib/store/resumeDataSlice/projectsInfoSlice';
import { RootState } from '@/lib/store/store';
import { ProjectsInterface } from '@/lib/utils/interfaces';

export const initialData: ProjectsInterface = {
  uid: 0,
  title: '',
  link: '',
  startDate: null,
  endDate: null,
  isCurrentWoring: false,
  description: '',
};

const ProjectsInfo = () => {
  const projectsData = useSelector(
    (state: RootState) => state[resumeInputType.PROJECTS_INFO]
  );

  const form = useForm({
    mode: 'controlled',
    initialValues: initialData,
  });
  const dispatch = useDispatch();

  const submitHandler = (e: SyntheticEvent) => {
    const uid = projectsData.length;
    e.preventDefault();
    const startD = form.values.startDate?.toString();
    const endD = form.values.endDate?.toString();
    dispatch(
      addProjectsInfo({
        ...form.values,
        uid: uid,
        startDate: startD ? startD : null,
        endDate: endD ? endD : null,
      })
    );
    form.reset();
  };

  return (
    <Box flex={1}>
      <Text pb={20}>Projects</Text>
      <form onSubmit={submitHandler}>
        <Box style={{ position: 'relative' }}>
          <Fieldset mb={20}>
            <TextInput
              required
              label='Title'
              placeholder='AI Fashion Recommendation'
              key='title'
              {...form.getInputProps(`title`)}
            />
            <TextInput
              label='Link'
              placeholder='www.resume.ai'
              key='link'
              {...form.getInputProps(`link`)}
              mt='md'
            />
            <Group grow py={20} align='top'>
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
              <Box>
                <MonthPickerInput
                  disabled={form.values.isCurrentWoring ? true : false}
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
                <Checkbox
                  mt='sm'
                  {...form.getInputProps(`isCurrentWoring`)}
                  label='Currently working here'
                />
              </Box>
            </Group>
            <Textarea
              required
              resize='both'
              label='Description'
              key='description'
              minRows={4}
              description='Any details you want to share regarding this project'
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
export default ProjectsInfo;
