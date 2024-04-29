'use client';
import { ColorSchemeScript } from '@mantine/core';
import Head from 'next/head';
import * as React from 'react';

import store from '@/lib/store/store';

import FAQs from '@/components/FAQs/FAQs';
import Herobox from '@/components/Herobox/Herobox';
import HeroHeader from '@/components/HeroHeader/HeroHeader';
import WaitingList from '@/components/WaitingList/WaitingList';
import WhyUs from '@/components/WhyUs/WhyUs';
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
  console.log(store.getState());

  return (
    <main>
      <Head>
        <title>Homepage</title>
        <ColorSchemeScript />
      </Head>
      <section className='bg-white'>
        <HeroHeader />
        <WaitingList />
        <Herobox />
        <WhyUs />
        <FAQs />
      </section>
    </main>
  );
};

export default HomePage;
