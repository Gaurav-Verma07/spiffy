import { combineSlices, configureStore } from '@reduxjs/toolkit';

import educationInfoSlice from '@/lib/store/resumeDataSlice/educationInfoSlice';
import personalInfoSlice from '@/lib/store/resumeDataSlice/personalInfoSlice';
import summaryInfoSlice from '@/lib/store/resumeDataSlice/summaryInfoSlice';

export default configureStore({
  reducer: {
    resumeData: combineSlices({
      personalInfoSlice,
      summaryInfoSlice,
      educationInfoSlice,
    }),
  },
});
