import { Box, List, rem, Title } from '@mantine/core';
import Image from 'next/image';
import diamond1 from 'public/images/diamond1.png';
import One from 'public/images/one.png';
import Three from 'public/images/three.png';
import Two from 'public/images/two.png';

import classes from './Herobox.module.css';

import ExperienceInfo from '@/components/ExperienceInfo/ExperienceInfo';

const Herobox = () => {
  return (
    <div className={classes.inner}>
      <div className={classes.diamond1}>
        <Image src={diamond1} alt='diamond 1' width={50} height={50} />
      </div>
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
