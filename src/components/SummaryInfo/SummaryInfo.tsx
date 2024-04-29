import { Box, Button, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import { SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';

import classes from './SummaryInfo.module.css';

import { addSummaryInfo } from '@/lib/store/resumeDataSlice/summaryInfoSlice';

const SummaryInfo = () => {
  const dispatch = useDispatch();
  const form = useForm({
    // mode: 'uncontrolled',
    initialValues: { summary: '' },
    validate: {
      summary: (val) => (val === '' ? 'Please fill summary to save' : null),
    },
  });
  const sumbitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    if (form.values.summary !== '') {
      dispatch(
        addSummaryInfo({
          summary: form.values.summary,
        })
      );
    }
    form.reset();
  };
  console.log(form.errors);
  return (
    <Box flex={1}>
      <form>
        <Textarea
          classNames={{ input: classes.input }}
          resize='vertical'
          minRows={20}
          maxRows={40}
          // label='Input label'
          description='Write a short information about you or generate from AI'
          placeholder='Input placeholder'
          {...form.getInputProps('summary')}
          // error='Please fill summary'
        />
        <Button
          disabled={form.values.summary === ''}
          type='submit'
          onClick={sumbitHandler}
          my={10}
        >
          Save
        </Button>
      </form>
    </Box>
  );
};

export default SummaryInfo;
