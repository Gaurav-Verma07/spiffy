import { createSlice } from '@reduxjs/toolkit';

import { SkillsInterface } from '@/lib/utils/interfaces';
const initialState: SkillsInterface = [];

export const skillsInfoSlice = createSlice({
  name: 'skillsInfo',
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
