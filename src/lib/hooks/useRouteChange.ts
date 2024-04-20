import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const useRouteChange = (isDirty: boolean, type?: string) => {
  const router = useRouter();

  const [isChanging, setIsChanging] = useState<boolean>(false);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (isDirty) {
        router.events.emit('routeChangeError');
        setIsChanging(true);
        console.log('route change detected');
        router.replace(router.asPath, undefined, { shallow: true });
      }
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router, isDirty]);
  return isChanging;
};
