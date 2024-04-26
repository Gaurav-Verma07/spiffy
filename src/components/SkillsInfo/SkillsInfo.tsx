import { Box, Chip, Fieldset, Group, TagsInput, Text } from '@mantine/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addSkillsInfo } from '@/lib/store/resumeDataSlice/skillsInfoSlice';
import { SkillsInterface } from '@/lib/utils/interfaces';

// const defaultVal: string[] = ['reactjs', 'typescript'];

const samples = [
  'typescript',
  'java',
  'aws',
  'reactjs',
  'jwt',
  'angular',
  'flutter',
  'ml',
  'tensorflow',
  'python',
  'javascript',
  'docker',
  'kubernetes',
  'nodejs',
  'expressjs',
  'mongodb',
  'sql',
  'html',
  'css',
  'sass',
  'bootstrap',
  'jquery',
  'vuejs',
  'redux',
  'webpack',
  'babel',
  'git',
  'github',
  'gitlab',
  'bitbucket',
  'jira',
  'confluence',
  'slack',
  'zoom',
  'teams',
  'aws lambda',
  'aws ec2',
  'aws s3',
  'aws rds',
  'aws dynamodb',
  'aws ecs',
  'aws cloudformation',
  'azure',
  'google cloud',
  'firebase',
  'jenkins',
  'ansible',
  'terraform',
  'puppet',
  'chef',
];

const SkillsInfo = () => {
  const [skills, setSkills] = useState<SkillsInterface>([]);
  const [value, setValue] = useState<string[]>([]);
  const dispatch = useDispatch();

  const changeHandler = (val: string[]) => {
    if (val.length > skills.length) {
      const newVal = val[val.length - 1];
      if (!value.includes(newVal)) {
        setValue((prev) => [...prev, newVal]);
      }
    }
    dispatch(addSkillsInfo(val));
    setSkills(val);
  };

  const selectValueHandler = (val: string[]) => {
    const newValue = val.filter((el) => !skills.includes(el));
    dispatch(addSkillsInfo([...skills, ...newValue]));
    setValue(val);
    setSkills([...skills, ...newValue]);
  };

  const removeHandler = (val: string) => {
    if (value.includes(val)) {
      setValue((prev) => prev.filter((el) => el !== val));
      const newSkills = skills.filter((el) => el !== val);
      setSkills(newSkills);
      dispatch(addSkillsInfo(newSkills));
    }
  };

  const chipHandler = (isChecked: boolean, val: string) => {
    if (!isChecked) {
      const newSkills = skills.filter((el: string) => el !== val);
      setSkills(newSkills);
      dispatch(addSkillsInfo(newSkills));
    }
  };

  const clearHandler = () => {
    setSkills([]);
    setValue([]);
    dispatch(addSkillsInfo([]));
  };

  return (
    <Box flex={1}>
      <Text pb={10}>Skills</Text>
      <Fieldset style={{ margin: '20px 0' }} legend='Skills'>
        <TagsInput
          allowDuplicates={false}
          onChange={(val) => {
            changeHandler(val);
          }}
          placeholder='Enter or select skills'
          onRemove={(val: string) => removeHandler(val)}
          value={skills}
          clearable
          onClear={clearHandler}
        />
        <Chip.Group
          multiple
          value={value}
          onChange={(val) => selectValueHandler(val)}
        >
          <Group justify='left' gap={6} mt='xl'>
            {samples.map((el: string, index: number) => (
              <Chip
                onChange={(val: boolean) => chipHandler(val, el)}
                variant='light'
                value={el}
                my={1}
                key={index}
              >
                {el}
              </Chip>
            ))}
          </Group>
        </Chip.Group>{' '}
      </Fieldset>
    </Box>
  );
};
export default SkillsInfo;
