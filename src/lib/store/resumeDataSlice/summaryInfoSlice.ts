import { createSlice } from '@reduxjs/toolkit';

import { SummaryInfoInterface } from '@/lib/utils/interfaces';

const initialState: SummaryInfoInterface = {
  uid: Date.now(),
  summary: '',
};
export const summaryInfoSlice = createSlice({
  name: 'summaryInfo',
  initialState: {},
  reducers: {
    addSummaryInfo: (state: any, action: { payload: any; type: string }) => {
      console.log(action.payload);
      return { ...state, ...action.payload };
    },
    clearSummaryInfo: (state) => {
      return { ...state, summary: '' };
    },
  },
});

export const { addSummaryInfo, clearSummaryInfo } = summaryInfoSlice.actions;
export default summaryInfoSlice.reducer;
