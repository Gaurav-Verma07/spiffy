import { createSlice } from '@reduxjs/toolkit';

import { ExperienceInterface } from '@/lib/utils/interfaces';

export const experienceInfoSlice = createSlice({
  name: 'experienceInfo',
  initialState: [],
  reducers: {
    addExperienceInfo: (
      state: ExperienceInterface[],
      action: { payload: ExperienceInterface; type: string }
    ) => {
      const newInfo = { ...action.payload };
      state.push(newInfo);
    },
  },
});

export const { addExperienceInfo } = experienceInfoSlice.actions;
export default experienceInfoSlice.reducer;
