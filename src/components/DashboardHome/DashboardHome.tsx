'use client';
import { Box } from '@mantine/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchData } from '@/lib/api/personalDataAPI';
import { AppDispatch, RootState } from '@/lib/store/store';

import NewResume from '@/components/DashboardHome/NewResume';

const DashboardHome = () => {
  const dispatch: AppDispatch = useDispatch();
  const resumeData = useSelector((state: RootState) => state.resume_info);
  useEffect(() => {
    const user_id = '';
    if (resumeData.data.length === 0) dispatch(fetchData(user_id));
  }, []);

  return (
    <Box>
      <NewResume />
    </Box>
  );
};
export default DashboardHome;
