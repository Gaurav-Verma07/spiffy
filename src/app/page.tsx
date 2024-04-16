'use client';

import { ColorSchemeScript } from '@mantine/core';
import FAQs from 'components/FAQs/FAQs';
import Herobox from 'components/Herobox/Herobox';
import HeroHeader from 'components/HeroHeader/HeroHeader';
import WhyUs from 'components/WhyUs/WhyUs';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import * as React from 'react';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

const HomePage = () => {
  const router = useRouter();
  return (
    <main>
      <Head>
        <title>Homepage</title>
        <ColorSchemeScript />
      </Head>
      <section className='bg-white'>
        {/* <HeroHeader /> */}
        <Herobox />
        <WhyUs />
        <FAQs />
      </section>
    </main>
  );
};

export default HomePage;
