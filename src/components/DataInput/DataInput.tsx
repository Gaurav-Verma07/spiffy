import { Box, Button, Group } from '@mantine/core';
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconReceipt2,
} from '@tabler/icons-react';
import { useState } from 'react';

import classes from './DataInput.module.css';

import EducationInfo from '@/components/EducationInfo/EducationInfo';
import ExperienceInfo from '@/components/ExperienceInfo/ExperienceInfo';
import PersonalInfo from '@/components/PersonalInfo/PersonalInfo';
import ProjectsInfo from '@/components/ProjectsInfo/ProjectsInfo';
import SkillsInfo from '@/components/SkillsInfo/SkillsInfo';
import SummaryInfo from '@/components/SummaryInfo/SummaryInfo';

const data = [
  { index: 0, label: 'Personal Info', icon: IconBellRinging },
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

  return (
    <Box className={classes.container}>
      <div className={classes.fields}>
        {links}
        <Button style={{ width: '100%' }}>Submit</Button>
      </div>
      <Box w={600} pt={20} className={classes.mainBox}>
        {active === 0 && <PersonalInfo />}
        {active === 1 && <SummaryInfo />}
        {active === 2 && <EducationInfo />}
        {active === 3 && <ExperienceInfo />}
        {active === 4 && <ProjectsInfo />}
        {active === 5 && <SkillsInfo />} {/* <RichEditor /> */}
        <Group pt={15} grow>
          <Button>Save</Button>
        </Group>
      </Box>
    </Box>
  );
};

export default DataInput;
