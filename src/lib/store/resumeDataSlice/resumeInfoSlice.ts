import { createSlice } from '@reduxjs/toolkit';

import { resumeInputType } from '@/lib/enums/resumeDataEnum';
import { ResumeInfoInterface } from '@/lib/utils/interfaces';

export const resumeInfoSlice = createSlice({
  name: resumeInputType.RESUME_INFO,
  initialState: [],
  reducers: {
    addResumeInfo: (
      state: ResumeInfoInterface[],
      action: { payload: ResumeInfoInterface; type: string }
    ) => {
      const newInfo = { ...action.payload };
      state.unshift(newInfo);
    },
    deleteResumeInfo: (
      state: ResumeInfoInterface[],
      action: { payload: { uid: string }; type: string }
    ) => {
      const index = state.findIndex(
        (info: ResumeInfoInterface) => info.uid === action.payload.uid
      );
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addResumeInfo, deleteResumeInfo } = resumeInfoSlice.actions;
export default resumeInfoSlice.reducer;
