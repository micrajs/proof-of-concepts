import {wait} from '@/utilities/wait';
import {Outlet} from '@micra/react-router';
import {json} from '@micra/request-handler/utilities';
import React from 'react';
export interface HomePageProps {
  data: {
    from: string;
  };
}

export const handler = async function HomePageHandler() {
  await wait(1000); // simulate async data fetching
  return json<HomePageProps>({data: {from: 'somewhere'}});
};

export const View = function HomePage(props: HomePageProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <h1>Home: {JSON.stringify(props)}</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <main style={{width: '100%'}}>
          <Outlet name="home.main" />
        </main>
        <aside style={{width: '300px'}}>
          <Outlet name="home.aside" />
        </aside>
      </div>
    </div>
  );
};
