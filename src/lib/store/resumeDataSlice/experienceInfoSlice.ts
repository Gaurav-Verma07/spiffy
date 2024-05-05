import { createSlice } from '@reduxjs/toolkit';

import { resumeInputType } from '@/lib/enums/resumeDataEnum';
import { ExperienceInterface } from '@/lib/utils/interfaces';

export const experienceInfoSlice = createSlice({
  name: resumeInputType.EXPERIENCE_INFO,
  initialState: [],
  reducers: {
    addExperienceInfo: (
      state: ExperienceInterface[],
      action: { payload: ExperienceInterface; type: string }
    ) => {
      const newInfo = { ...action.payload };
      state.push(newInfo);
    },
    deleteExperienceInfo: (
      state: ExperienceInterface[],
      action: { payload: { uid: string }; type: string }
    ) => {
      const index = state.findIndex(
        (info: ExperienceInterface) => info.uid === action.payload.uid
      );
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addExperienceInfo, deleteExperienceInfo } =
  experienceInfoSlice.actions;
export default experienceInfoSlice.reducer;
