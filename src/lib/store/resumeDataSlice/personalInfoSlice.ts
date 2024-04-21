import { createSlice } from '@reduxjs/toolkit';

import { PersonalInfoInterface } from '@/lib/utils/interfaces';

const initialState: PersonalInfoInterface = {
  name: '',
  email: '',
  number: null,
  country: null,
  linkedin: null,
  github: null,
  twitter: null,
  portfolio: null,
};
export const personalInfoSlice = createSlice({
  name: 'personalInfo',
  initialState: {},
  reducers: {
    addPersonalInfo: (state: any, action: { payload: any; type: string }) => {
      // console.log(action.payload);
      return { ...state, ...action.payload };
    },
  },
});

export const { addPersonalInfo } = personalInfoSlice.actions;
export default personalInfoSlice.reducer;
