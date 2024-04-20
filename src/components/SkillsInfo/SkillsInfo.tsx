import { Box, Fieldset, Pill, PillsInput, Text } from '@mantine/core';
import { useRef, useState } from 'react';
interface SkillsInterface {
  type: string;
  list: string[];
}

const SkillsInfo = () => {
  const pillref = useRef<HTMLInputElement>(null);
  const [skills, setSkills] = useState<SkillsInterface[]>([
    {
      type: 'Languages',
      list: ['javascript'],
    },
    {
      type: 'Tools',
      list: ['git', 'aws'],
    },
    {
      type: 'Technologies',
      list: ['reactjs', 'nextjs'],
    },
  ]);

  const handleValueRemove = (item: string, type: string) => {
    const updatedSkills = skills.map((data: SkillsInterface) => {
      if (data.type === type) {
        const newdata = data.list.filter((el) => el !== item);
        return { type: type, list: newdata };
      }
      return data;
    });
    setSkills(updatedSkills);
  };

  const pillInputHandler = (
    e: React.KeyboardEvent<HTMLInputElement>,
    type: string
  ) => {
    if (e.key === 'Enter') {
      const value = e.currentTarget.value;
      if (value.trim() !== '') {
        const updatedSkill = skills.map((data: SkillsInterface) => {
          if (data.type === type) {
            return { ...data, list: [...data.list, e.currentTarget.value] };
          }
          return data;
        });
        setSkills(updatedSkill);
        e.currentTarget.value = '';
      }
    }
  };

  return (
    <Box>
      <Text pb={10}>Skills</Text>
      {skills.map((data, index: number) => (
        <Fieldset key={index} style={{ margin: '20px 0' }} legend={data.type}>
          <PillsInput>
            <Pill.Group>
              {data.list.map((el, index: number) => (
                <Pill
                  withRemoveButton
                  onRemove={() => handleValueRemove(el, data.type)}
                  key={index}
                >
                  {el}
                </Pill>
              ))}
              <PillsInput.Field
                placeholder='Enter skills'
                ref={pillref}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                  pillInputHandler(e, data.type)
                }
              />
            </Pill.Group>
          </PillsInput>
        </Fieldset>
      ))}
    </Box>
  );
};
export default SkillsInfo;
