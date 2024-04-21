import { combineReducers, configureStore } from '@reduxjs/toolkit';

import educationInfoSlice from '@/lib/store/resumeDataSlice/educationInfoSlice';
import personalInfoSlice from '@/lib/store/resumeDataSlice/personalInfoSlice';
import summaryInfoSlice from '@/lib/store/resumeDataSlice/summaryInfoSlice';

const rootReducer = combineReducers({
  educationInfo: educationInfoSlice,
  summaryInfo: summaryInfoSlice,
  personalInfo: personalInfoSlice,
});

export default configureStore({
  reducer: rootReducer,
});
