'use client';
import { Box, Button, Chip, Group } from '@mantine/core';
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconPoint,
  IconReceipt2,
} from '@tabler/icons-react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import classes from './DataInput.module.css';

import { resumeInputType } from '@/lib/enums/resumeDataEnum';

import DisplayInfo from '@/components/DisplayInfo/DisplayInfo';
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
    type: resumeInputType.PERSONAL_INFO,
  },
  {
    index: 1,
    label: 'Summary',
    icon: IconBellRinging,
    component: <SummaryInfo />,
    type: resumeInputType.SUMMARY_INFO,
  },
  {
    index: 2,
    label: 'Education',
    icon: IconReceipt2,
    component: <EducationInfo />,
    type: resumeInputType.EDUCATION_INFO,
  },
  {
    index: 3,
    label: 'Experiences',
    icon: IconReceipt2,
    component: <ExperienceInfo />,
    type: resumeInputType.EXPERIENCE_INFO,
  },
  {
    index: 4,
    label: 'Project',
    icon: IconFingerprint,
    component: <ProjectsInfo />,
    type: resumeInputType.PROJECTS_INFO,
  },
  {
    index: 5,
    label: 'Skills',
    icon: IconKey,
    component: <SkillsInfo />,
    type: resumeInputType.SKILLS_INFO,
  },
];

const DataInput = () => {
  const infoType = useSearchParams()?.get('type');
  const activated = data.filter((el) => el.type === infoType);
  const [active, setActive] = useState(activated[0].label);
  const router = useRouter();

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
                onClick={() => {
                  router.push(`?type=${item.type}`);
                }}
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
        {infoType !== 'personal' && <DisplayInfo />}
        {
          data.filter((item) => item.label === active && item.component)[0]
            .component
        }
      </Box>
    </Box>
  );
};

export default DataInput;
