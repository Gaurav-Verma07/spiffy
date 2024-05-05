import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { resumeInputType } from '@/lib/enums/resumeDataEnum';
import educationInfoSlice from '@/lib/store/resumeDataSlice/educationInfoSlice';
import experienceInfoSlice from '@/lib/store/resumeDataSlice/experienceInfoSlice';
import personalInfoSlice from '@/lib/store/resumeDataSlice/personalInfoSlice';
import projectsInfoSlice from '@/lib/store/resumeDataSlice/projectsInfoSlice';
import resumeInfoSlice from '@/lib/store/resumeDataSlice/resumeInfoSlice';
import skillsInfoSlice from '@/lib/store/resumeDataSlice/skillsInfoSlice';
import summaryInfoSlice from '@/lib/store/resumeDataSlice/summaryInfoSlice';

const rootReducer = combineReducers({
  [resumeInputType.EDUCATION_INFO]: educationInfoSlice,
  [resumeInputType.SUMMARY_INFO]: summaryInfoSlice,
  [resumeInputType.PERSONAL_INFO]: personalInfoSlice,
  [resumeInputType.EXPERIENCE_INFO]: experienceInfoSlice,
  [resumeInputType.PROJECTS_INFO]: projectsInfoSlice,
  [resumeInputType.SKILLS_INFO]: skillsInfoSlice,
  [resumeInputType.RESUME_INFO]: resumeInfoSlice,
});

export default configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
