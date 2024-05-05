import { createSlice } from '@reduxjs/toolkit';

import { resumeInputType } from '@/lib/enums/resumeDataEnum';
import { ProjectsInterface } from '@/lib/utils/interfaces';

export const projectsInfoSlice = createSlice({
  name: resumeInputType.PROJECTS_INFO,
  initialState: [],
  reducers: {
    addProjectsInfo: (
      state: ProjectsInterface[],
      action: { payload: ProjectsInterface; type: string }
    ) => {
      const newInfo = { ...action.payload };
      state.push(newInfo);
    },
    deleteProjectsInfo: (
      state: ProjectsInterface[],
      action: { payload: { uid: string }; type: string }
    ) => {
      const index = state.findIndex(
        (info: ProjectsInterface) => info.uid === action.payload.uid
      );
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addProjectsInfo, deleteProjectsInfo } =
  projectsInfoSlice.actions;
export default projectsInfoSlice.reducer;
