import { createSlice } from '@reduxjs/toolkit';

import { EducationInterface } from '@/lib/utils/interfaces';

export const educationInfoSlice = createSlice({
  name: 'educationInfo',
  initialState: [],
  reducers: {
    addEducationInfo: (
      state: EducationInterface[],
      action: { payload: EducationInterface; type: string }
    ) => {
      const newInfo = { ...action.payload };
      state.push(newInfo);
    },
  },
});

export const { addEducationInfo } = educationInfoSlice.actions;
export default educationInfoSlice.reducer;
