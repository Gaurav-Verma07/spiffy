import { createSlice } from '@reduxjs/toolkit';

import { resumeInputType } from '@/lib/enums/resumeDataEnum';
import { PersonalInfoInterface } from '@/lib/utils/interfaces';

const initialState: PersonalInfoInterface = {
  uid: '',
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
  name: resumeInputType.PERSONAL_INFO,
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
