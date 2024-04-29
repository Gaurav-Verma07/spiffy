import { Box, List, rem, Title } from '@mantine/core';
import Image from 'next/image';
import One from 'public/images/one.png';
import Three from 'public/images/three.png';
import Two from 'public/images/two.png';

import classes from './Herobox.module.css';

import ExperienceInfo from '@/components/ExperienceInfo/ExperienceInfo';

const Herobox = () => {
  return (
    <div className={classes.inner}>
      <div className={classes.content}>
        <Title className={classes.title} fw={600}>
          Let <span className='highlight'> Sniffy</span> Craft
          <br /> Your Career Narrative <br /> with
          <span className='highlight1'> AI Precision </span>
        </Title>
        <List
          mt={30}
          spacing='sm'
          size='sm'
          style={{ maxWidth: rem(500) }}
          className={classes.list}
        >
          <List.Item>
            <Image
              style={{ transform: 'rotate(-10deg)' }}
              src={One}
              width={30}
              height={30}
              alt='one'
            />
            <span style={{ fontSize: rem(20) }}>ATS Friendly</span> – Our
            AI-powered engine optimizes your content and formatting to meet ATS
            requirements, increasing your chances of landing an interview.
          </List.Item>
          <List.Item>
            <Image
              style={{ transform: 'rotate(10deg)' }}
              src={Two}
              width={30}
              height={30}
              alt='one'
            />
            <span style={{ fontSize: rem(20) }}>Latex Based</span> – With
            Sniffy, your resume is crafted using LaTeX, a professional
            typesetting system favored for its precision and elegance
          </List.Item>
          <List.Item>
            <Image
              style={{ transform: 'rotate(-20deg)' }}
              src={Three}
              width={30}
              height={30}
              alt='one'
            />
            <span style={{ fontSize: rem(20) }}>Latest Templates</span> –
            Whether you're in a creative field or a traditional industry, Sniffy
            has the perfect template to showcase your skills and experience.
          </List.Item>
        </List>

        {/* <Box mt={30}>
          <Box my={10} style={{ display: 'flex' }}>
            <Image
              // className={classes.img}
              src={One}
              width={40}
              height={40}
              alt='one'
            />
            <Text style={{ fontSize: 25 }} pl={5}>
              {' '}
              ATS friendly
            </Text>
          </Box>
          <Box my={10} style={{ display: 'flex' }}>
            <Image
              // className={classes.img}
              src={Two}
              width={40}
              height={40}
              alt='one'
            />
            <Text style={{ fontSize: 25 }} pl={5}>
              Latex Based
            </Text>
          </Box>
          <Box my={10} style={{ display: 'flex' }}>
            <Image
              // className={classes.img}
              src={Three}
              width={40}
              height={40}
              alt='one'
            />
            <Text style={{ fontSize: 25 }} pl={5}>
              Latest Templates
            </Text>
          </Box>
        </Box> */}
      </div>
      <div>
        <Box
          style={{
            width: rem(500),
            transform: 'rotate(-5deg)',
            // marginTop: rem(-50),
            border: '2px dotted #dee2e6',
            borderRadius: '12px',
            padding: 7,
          }}
        >
          <span className='highlight'>Sniffy</span> not only saves you time but
          also ensures<b> accuracy and consistency </b>. No more worrying about
          outdated formats or missing information. With{' '}
          <span className='highlight'>Sniffy</span>, you can focus on what
          matters – crafting your career story for success.
        </Box>
        <ExperienceInfo />
      </div>
    </div>
  );
};

export default Herobox;
