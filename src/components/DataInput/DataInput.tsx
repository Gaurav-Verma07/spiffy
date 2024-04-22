import { Box, Button, Chip, Group } from '@mantine/core';
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconPoint,
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
  {
    index: 0,
    label: 'Personal Info',
    icon: IconBellRinging,
    component: <PersonalInfo />,
  },
  {
    index: 1,
    label: 'Summary',
    icon: IconBellRinging,
    component: <SummaryInfo />,
  },
  {
    index: 2,
    label: 'Education',
    icon: IconReceipt2,
    component: <EducationInfo />,
  },
  {
    index: 3,
    label: 'Experiences',
    icon: IconReceipt2,
    component: <ExperienceInfo />,
  },
  {
    index: 4,
    label: 'Project',
    icon: IconFingerprint,
    component: <ProjectsInfo />,
  },
  { index: 5, label: 'Skills', icon: IconKey, component: <SkillsInfo /> },
];

const DataInput = () => {
  const [active, setActive] = useState(data[0].label);

  return (
    <Box className={classes.container}>
      <div className={classes.fields}>
        <Chip.Group multiple={false} value={active} onChange={setActive}>
          <Group>
            {data.map((item) => (
              <Chip
                icon={<IconPoint />}
                className={classes.link}
                value={item.label}
                key={item.index}
              >
                <span>{item.label}</span>
              </Chip>
            ))}
            <Button style={{}}>Submit</Button>
          </Group>
        </Chip.Group>
      </div>
      <Box w={600} pt={20} className={classes.mainBox}>
        {
          data.filter((item) => item.label === active && item.component)[0]
            .component
        }
      </Box>
    </Box>
  );
};

export default DataInput;
