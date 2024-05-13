import axiosInstance from '@/lib/api/axios';

const waitingListAPI = async (usermail: string) => {
  let message = '';
  axiosInstance
    .post('/waiting/addtolist', { usermail: usermail })
    .then((res: any) => {
      message = res.data.message;
      console.log(res.data.message);
    })
    // .then((response) => {
    //   console.log(response);
    // })
    .catch((e) => {
      console.log('error', e);
      message = 'Some error occured!!!';
    });
  return message;
};

export { waitingListAPI };
