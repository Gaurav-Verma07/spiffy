import { Accordion, Box, Container, Title } from '@mantine/core';

import classes from './FAQs.module.css';

const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';

const data = [
  {
    question: 'Can I edit the generated resume?',
    answer: 'Yes, you can customize the resume template before downloading it.',
    value: 1,
  },
  {
    question: 'Is my data safe?',
    answer:
      'Yes, we take data privacy and security seriously. Your information is encrypted and stored securely.',
    value: 2,
  },
  {
    question: 'Can I use the generated resume for online applications?',
    answer:
      'Yes, the LaTeX format is compatible with most online application systems. However, some systems may require a PDF version.',
    value: 3,
  },
  {
    question: 'Can I download my resume in other formats?',
    answer:
      'Currently, we only support downloading resumes in LaTeX format. However, you can convert it to other formats using online tools or software.',
    value: 4,
  },
  {
    question: 'How much does it cost to use the platform?',
    answer:
      'Our basic resume generation service is free. However, we offer premium features and templates for a subscription fee.',
    value: 5,
  },
];

const FAQs = () => {
  return (
    <Container size='sm' className={classes.wrapper}>
      <Box>
        <Title className={classes.title}>
          Frequently <br /> Asked <br /> Questions
        </Title>
      </Box>
      <Box className={classes.accordion}>
        <Accordion variant='separated'>
          {data.map((el, index: number) => (
            <Accordion.Item
              key={index}
              className={classes.item}
              value={`${el.value}`}
            >
              <Accordion.Control>{el.question}</Accordion.Control>
              <Accordion.Panel>{el.answer}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Box>
    </Container>
  );
};

export default FAQs;
