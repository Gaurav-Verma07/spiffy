import { Box, Paper } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';

import ShowDraggableData from '@/components/DisplayInfo/ShowDraggableData.tsx';

const DisplayInfo = () => {
  return (
    <Box style={{ width: '25%' }} mr={20} mt={17}>
      <Paper withBorder p={10}>
        <IconInfoCircle size={30} color='#777' />
        <br />A summary is important in a resume because it provides a concise
        overview of your qualifications and highlights why you are a strong
        candidate for the position.
      </Paper>
      <ShowDraggableData />
    </Box>
  );
};

export default DisplayInfo;
