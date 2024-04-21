import { combineReducers, configureStore } from '@reduxjs/toolkit';

import educationInfoSlice from '@/lib/store/resumeDataSlice/educationInfoSlice';
import experienceInfoSlice from '@/lib/store/resumeDataSlice/experienceInfoSlice';
import personalInfoSlice from '@/lib/store/resumeDataSlice/personalInfoSlice';
import projectsInfoSlice from '@/lib/store/resumeDataSlice/projectsInfoSlice';
import summaryInfoSlice from '@/lib/store/resumeDataSlice/summaryInfoSlice';

const rootReducer = combineReducers({
  educationInfo: educationInfoSlice,
  summaryInfo: summaryInfoSlice,
  personalInfo: personalInfoSlice,
  experienceInfo: experienceInfoSlice,
  projectsInfo: projectsInfoSlice,
});

export default configureStore({
  reducer: rootReducer,
});
