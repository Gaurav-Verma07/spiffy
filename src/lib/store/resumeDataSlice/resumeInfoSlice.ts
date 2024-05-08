import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchData } from '@/lib/api/personalDataAPI';
import { ResumeInfoInterface } from '@/lib/utils/interfaces';

interface ResumeInfoState {
  data: ResumeInfoInterface[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ResumeInfoState = {
  data: [],
  isLoading: false,
  error: null,
};

const resumeInfoSlice = createSlice({
  name: 'resume_info',
  initialState,
  reducers: {
    addResumeInfo: (state, action: PayloadAction<ResumeInfoInterface>) => {
      state.data.unshift(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchData.fulfilled,
        (state, action: PayloadAction<ResumeInfoInterface[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { addResumeInfo } = resumeInfoSlice.actions;
export default resumeInfoSlice.reducer;
