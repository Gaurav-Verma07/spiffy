import { Box, Button, Group, Text } from '@mantine/core';
import { useSearchParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

import { resumeInputType } from '@/lib/enums/resumeDataEnum';
import { deleteEducationInfo } from '@/lib/store/resumeDataSlice/educationInfoSlice';
import { deleteExperienceInfo } from '@/lib/store/resumeDataSlice/experienceInfoSlice';
import { deleteProjectsInfo } from '@/lib/store/resumeDataSlice/projectsInfoSlice';
import { RootState } from '@/lib/store/store';

const ShowDraggableData = () => {
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const formType: string = searchParams?.get('type') || '';

  //We'll only show data on experience, education and projects for now
  const selectedData: any = useSelector((state: RootState) => {
    if (formType === resumeInputType.EXPERIENCE_INFO)
      return state[resumeInputType.EXPERIENCE_INFO];

    if (formType === resumeInputType.EDUCATION_INFO)
      return state[resumeInputType.EDUCATION_INFO];

    if (formType === resumeInputType.PROJECTS_INFO)
      return state[resumeInputType.PROJECTS_INFO];
  });

  if (
    formType === resumeInputType.SUMMARY_INFO ||
    formType === resumeInputType.SKILLS_INFO
  )
    return <></>;

  const deleteHandler = (uid: string) => {
    if (formType === resumeInputType.EDUCATION_INFO)
      dispatch(deleteEducationInfo({ uid }));
    if (formType === resumeInputType.EXPERIENCE_INFO)
      dispatch(deleteExperienceInfo({ uid }));
    if (formType === resumeInputType.PROJECTS_INFO)
      dispatch(deleteProjectsInfo({ uid }));
  };

  return (
    <Box my={10}>
      {selectedData.map((el: any, index: number) => {
        return (
          <Box
            style={{
              backgroundColor: '#dddada',
              borderRadius: 10,
            }}
            my={10}
            p={10}
            key={index}
          >
            <Text>{el.title}</Text>
            <Group>
              <Button>Edit</Button>
              <Button color='red' onClick={() => deleteHandler(el.uid)}>
                Delete
              </Button>
            </Group>
          </Box>
        );
      })}
    </Box>
  );
};

export default ShowDraggableData;
