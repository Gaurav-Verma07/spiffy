import { Box, Divider, Text, Title } from '@mantine/core';
import Image from 'next/image';
import aifriendly from 'public/images/aifriendly.png';
import ats from 'public/images/ats.png';
import customize from 'public/images/customize.png';
import easytouse from 'public/images/easytouse.png';

import classes from './WhyUs.module.css';

const data = [
  {
    heading: 'AI-Powered',
    content:
      'Our platform utilizes cutting-edge AI technology to create professional resumes quickly and efficiently.',
    img: aifriendly,
  },
  {
    heading: 'Latex Based',
    content:
      ' With our service, you can rest assured that your resume will not only look professional but also be easily parsed by ATS, increasing your chances of landing interviews.',
    img: aifriendly,
  },

  {
    heading: 'ATS-Friendly',
    content:
      'We understand the importance of Applicant Tracking Systems (ATS) and ensure that our resumes are optimized to pass through these systems.',
    img: ats,
  },
  {
    heading: 'Customize Options',
    content:
      'With a wide range of templates and customization options, users can create a resume that reflects their unique style and personality.',
    img: customize,
  },
  {
    heading: 'Easy to Use',
    content:
      'Our platform is designed to be user-friendly, making it easy for anyone to create a professional resume without any technical knowledge.',
    img: easytouse,
  },
];

const WhyUs = () => {
  return (
    <Box className={classes.main}>
      <Divider
        classNames={{ label: classes.label }}
        my='xs'
        label='Why Us?'
        variant='dashed'
        labelPosition='center'
      />
      {data.map((_el, index: number) => (
        <Box key={index} className={classes.box}>
          <div className='left' style={{ order: index % 2 == 0 ? 1 : 0 }}>
            {' '}
            <Image src={_el.img} alt='image' width={250} height={250} />
          </div>
          <div
            className={classes.right}
            style={{ order: index % 2 == 0 ? 0 : 1 }}
          >
            <Title variant='h1' py={20} size={30}>
              <span
                className={`${index % 2 == 0 ? 'highlight1' : 'highlight'}`}
              >
                {_el.heading}
              </span>
            </Title>
            <Text c='grey'>{_el.content}</Text>
          </div>
        </Box>
      ))}
    </Box>
  );
};

export default WhyUs;
