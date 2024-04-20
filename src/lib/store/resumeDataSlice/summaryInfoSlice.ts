import { createSlice } from '@reduxjs/toolkit';

import { SummaryInfoInterface } from '@/lib/utils/interfaces';

const initialState: SummaryInfoInterface = {
  summary: '',
};
export const summaryInfoSlice = createSlice({
  name: 'resumeData',
  initialState: { initialState },
  reducers: {
    addSummaryInfo: (state: any, action: { payload: any; type: string }) => {
      console.log(action.payload);
      return state;
    },
  },
});

export const { addSummaryInfo } = summaryInfoSlice.actions;
export default summaryInfoSlice.reducer;
