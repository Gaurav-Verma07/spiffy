import { createSlice } from '@reduxjs/toolkit';

import { EducationInterface } from '@/lib/utils/interfaces';

const initialState: EducationInterface = {
  educationId: Date.now(),
  school: '',
  degree: '',
  fieldOfStudy: '',
  startDate: '',
  endDate: '',
  cgpa: 5,
  description: '',
};
export const educationInfoSlice = createSlice({
  name: 'resumeData',
  initialState: { initialState },
  reducers: {
    addEducationInfo: (state: any, action: { payload: any; type: string }) => {
      console.log(action.payload);
      return state;
    },
  },
});

export const { addEducationInfo } = educationInfoSlice.actions;
export default educationInfoSlice.reducer;
