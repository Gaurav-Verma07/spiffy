import { configureStore } from '@reduxjs/toolkit';
import personalInfoSlice from '@/lib/store/resumeDataSlice/personalInfoSlice';

export default configureStore({
  reducer: {
    resumeData: personalInfoSlice,
  },
});
