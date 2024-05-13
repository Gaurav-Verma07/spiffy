import { Box, rem, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { SyntheticEvent } from 'react';

import classes from './WaitingList.module.css';

import axiosInstance from '@/lib/api/axios';
const WaitingList = () => {
  const form = useForm({
    initialValues: {
      usermail: '',
    },
    validate: {
      usermail: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
    },
  });

  const submitHandler = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (form.isValid()) {
      const usermail = form.values.usermail;
      try {
        axiosInstance
          .post('/waiting/addtolist', { usermail })
          .then((res: any) => {
            const message = res.data.message;
            console.log(message);
            notifications.show({ message: message });
          });
        // const message = await waitingListAPI(form.values.usermail);
      } catch (e) {
        notifications.show({ message: 'some error occured' });
      }
    }
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
          {...form.getInputProps('usermail')}
          type='email'
        />
        <button className={classes.button}>Join waiting list</button>
      </form>
    </Box>
  );
};

export default WaitingList;
