import { Box, Textarea } from '@mantine/core';
import { useState } from 'react';

const SummaryInfo = () => {
  const [value, setValue] = useState('');
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
    </Box>
  );
};

export default SummaryInfo;
