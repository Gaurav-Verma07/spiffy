import { createSlice } from '@reduxjs/toolkit';

import { ProjectsInterface } from '@/lib/utils/interfaces';

export const projectsInfoSlice = createSlice({
  name: 'projectsInfo',
  initialState: [],
  reducers: {
    addProjectsInfo: (
      state: ProjectsInterface[],
      action: { payload: ProjectsInterface; type: string }
    ) => {
      const newInfo = { ...action.payload };
      state.push(newInfo);
    },
  },
});

export const { addProjectsInfo } = projectsInfoSlice.actions;
export default projectsInfoSlice.reducer;
