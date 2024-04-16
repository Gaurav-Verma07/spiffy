import { Box, Fieldset, Input, TextInput } from '@mantine/core';
import Image from 'next/image';

import Github from './github.png';
import Linkedin from './linkedin.png';
import Portfolio from './portfolio.png';
import Twitter from './twitter.png';
const BasicInfo = () => {
  return (
    <Box>
      Basic Info
      <Fieldset mb={20} legend='Personal information'>
        <TextInput required label='Your name' placeholder='Your name' />
        <TextInput required label='Email' placeholder='Email' mt='md' />
        <TextInput
          label='Phone Number'
          type='number'
          placeholder='Email'
          mt='md'
        />
        <TextInput
          required
          label='Country of Origin'
          placeholder='Country'
          mt='md'
        />
      </Fieldset>
      <Fieldset legend='Social links'>
        <Input
          my={20}
          required
          height={30}
          placeholder='Linkedin'
          leftSection={
            // <IconBrandLinkedin color='#00abfb' />
            <Image src={Linkedin} alt='linkedin' width={20} height={20} />
          }
        />
        <Input
          my={20}
          height={30}
          placeholder='Github'
          leftSection={
            // <IconBrandLinkedin color='#00abfb' />
            <Image src={Github} alt='Github' width={20} height={20} />
          }
        />
        <Input
          my={20}
          height={30}
          placeholder='Twitter'
          leftSection={
            // <IconBrandLinkedin color='#00abfb' />
            <Image src={Twitter} alt='Twitter' width={20} height={20} />
          }
        />
        <Input
          my={20}
          height={30}
          placeholder='Portfolio'
          leftSection={
            // <IconBrandLinkedin color='#00abfb' />
            <Image src={Portfolio} alt='Portfolio' width={20} height={20} />
          }
        />
      </Fieldset>
    </Box>
  );
};

export default BasicInfo;
