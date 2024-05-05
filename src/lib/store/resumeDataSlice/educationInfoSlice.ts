import { createSlice } from '@reduxjs/toolkit';

import { resumeInputType } from '@/lib/enums/resumeDataEnum';
import { EducationInterface } from '@/lib/utils/interfaces';

export const educationInfoSlice = createSlice({
  name: resumeInputType.EDUCATION_INFO,
  initialState: [],
  reducers: {
    addEducationInfo: (
      state: EducationInterface[],
      action: { payload: EducationInterface; type: string }
    ) => {
      const newInfo = { ...action.payload };
      state.push(newInfo);
    },
    deleteEducationInfo: (
      state: EducationInterface[],
      action: { payload: { uid: string }; type: string }
    ) => {
      const index = state.findIndex(
        (info: EducationInterface) => info.uid === action.payload.uid
      );
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addEducationInfo, deleteEducationInfo } =
  educationInfoSlice.actions;
export default educationInfoSlice.reducer;
