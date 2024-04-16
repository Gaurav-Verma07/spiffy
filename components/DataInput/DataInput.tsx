import { Box, Button, Group } from '@mantine/core';
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconReceipt2,
} from '@tabler/icons-react';
import BasicInfo from 'components/BasicInfo/BasicInfo';
import EducationInfo from 'components/EducationInfo/EducationInfo';
import ExperienceInfo from 'components/ExperienceInfo/ExperienceInfo';
import ProjectsInfo from 'components/ProjectsInfo/ProjectsInfo';
import SkillsInfo from 'components/SkillsInfo/SkillsInfo';
import SummaryInfo from 'components/SummaryInfo/SummaryInfo';
import { useState } from 'react';

import classes from './DataInput.module.css';

const data = [
  { index: 0, label: 'Basic Info', icon: IconBellRinging },
  { index: 1, label: 'Summary', icon: IconBellRinging },
  { index: 2, label: 'Education', icon: IconReceipt2 },
  { index: 3, label: 'Experiences', icon: IconReceipt2 },
  { index: 4, label: 'Project', icon: IconFingerprint },
  { index: 5, label: 'Skills', icon: IconKey },
];

const DataInput = () => {
  const [active, setActive] = useState(0);

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.index === active || undefined}
      // href={item.link}
      key={item.index}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.index);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  const prevHandler = () => {
    if (active !== 0) {
      setActive(active - 1);
    }
  };

  const nextHandler = () => {
    if (active !== 5) {
      setActive(active + 1);
    }
  };

  return (
    <Box className={classes.container}>
      <div className={classes.fields}>{links}</div>
      <Box w={600} pt={20} className={classes.mainBox}>
        {active === 0 && <BasicInfo />}
        {active === 1 && <SummaryInfo />}
        {active === 2 && <EducationInfo />}
        {active === 3 && <ExperienceInfo />}
        {active === 4 && <ProjectsInfo />}
        {active === 5 && <SkillsInfo />} {/* <RichEditor /> */}
        <Group pt={15} grow>
          <Button disabled={active === 0} onClick={prevHandler}>
            Previous
          </Button>
          <Button>Save</Button>
          <Button disabled={active === 5} onClick={nextHandler}>
            Next
          </Button>
        </Group>
      </Box>
    </Box>
  );
};

export default DataInput;
