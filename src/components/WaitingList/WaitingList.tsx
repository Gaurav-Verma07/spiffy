import { Box, rem, TextInput } from '@mantine/core';
import { SyntheticEvent } from 'react';

import classes from './WaitingList.module.css';
const WaitingList = () => {
  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <Box
      className={classes.main}
      style={{
        position: 'fixed',
        bottom: rem(50),
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      <form style={{ display: 'flex' }} onSubmit={submitHandler}>
        <TextInput
          placeholder='We will notify you via email'
          classNames={{
            input: classes.input,
            description: classes.description,
          }}
          type='email'
        />
        <button className={classes.button}>Join waiting list</button>
      </form>
    </Box>
  );
};

export default WaitingList;
