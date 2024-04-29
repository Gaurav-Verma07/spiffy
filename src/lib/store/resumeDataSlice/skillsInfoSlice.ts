import { createSlice } from '@reduxjs/toolkit';

import { resumeInputType } from '@/lib/enums/resumeDataEnum';
import { SkillsInterface } from '@/lib/utils/interfaces';
const initialState: SkillsInterface = [];

export const skillsInfoSlice = createSlice({
  name: resumeInputType.SKILLS_INFO,
  initialState: initialState,
  reducers: {
    addSkillsInfo: (
      state: SkillsInterface,
      action: { payload: SkillsInterface; type: string }
    ) => {
      return action.payload;
    },
  },
});

export const { addSkillsInfo } = skillsInfoSlice.actions;
export default skillsInfoSlice.reducer;
