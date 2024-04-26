import { Box, Button, Textarea } from '@mantine/core';
import { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import classes from './SummaryInfo.module.css';

import { addSummaryInfo } from '@/lib/store/resumeDataSlice/summaryInfoSlice';

const SummaryInfo = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const sumbitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    if (value !== '') {
      dispatch(
        addSummaryInfo({
          summary: value,
        })
      );
    }
  };

  return (
    <Box flex={1}>
      <Textarea
        classNames={{ input: classes.input }}
        resize='vertical'
        minRows={20}
        maxRows={40}
        // label='Input label'
        description='Write a short information about you or generate from AI'
        placeholder='Input placeholder'
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
      <Button onClick={sumbitHandler} my={10}>
        Save
      </Button>
    </Box>
  );
};

export default SummaryInfo;
