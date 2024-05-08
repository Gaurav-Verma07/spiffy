import { createAsyncThunk } from '@reduxjs/toolkit';

import { ResumeInfoInterface } from '@/lib/utils/interfaces';

import { baseURL } from '@/constant/env';

export const fetchData = createAsyncThunk<ResumeInfoInterface[], string>(
  'resume_info/fetchData',
  async (user_id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`${baseURL}/resume/getAll`, {
        method: 'POST',
        body: JSON.stringify({ user_id }),
        headers: { 'Content-type': 'application/json' },
      });
      const responseData = await response.json();
      const transformedData: ResumeInfoInterface[] = responseData.map(
        (item: any) => ({
          uid: item.uid,
          resumeName: item.resume_name,
          jobField: item.field || '',
          experienceLevel: item.experience || '',
        })
      );
      return transformedData;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'An error occurred');
    }
  }
);
