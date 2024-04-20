import { Box, Button, Textarea } from '@mantine/core';
import { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

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
    <Box>
      <Textarea
        resize='both'
        minRows={10}
        label='Input label'
        description='Input description'
        placeholder='Input placeholder'
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
      <Button onClick={sumbitHandler}>Save</Button>
    </Box>
  );
};

export default SummaryInfo;
