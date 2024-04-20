import { createSlice } from '@reduxjs/toolkit';

import { PersonalInfoInterface } from '@/lib/utils/interfaces';

const initialState: PersonalInfoInterface = {
  name: '',
  email: '',
  number: '',
  country: '',
  linkedin: '',
  github: '',
  twitter: '',
  portfolio: '',
};
export const personalInfoSlice = createSlice({
  name: 'resumeData',
  initialState: { initialState },
  reducers: {
    addPersonalInfo: (state: any, action: { payload: any; type: string }) => {
      console.log(action.payload);
      return state;
    },
  },
});

export const { addPersonalInfo } = personalInfoSlice.actions;
export default personalInfoSlice.reducer;
