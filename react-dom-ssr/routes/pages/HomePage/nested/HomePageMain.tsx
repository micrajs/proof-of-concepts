import {wait} from '@/utilities/wait';
import {useRouteContext} from '@micra/react-router';
import {json} from '@micra/request-handler/utilities';
import React from 'react';

export interface HomePageMainProps {
  nested: {
    route: string;
  };
}

export const handler = async function HomePageHandler() {
  await wait(1500); // simulate async data fetching
  return json<HomePageMainProps>({nested: {route: 'value'}});
};

export const Loading = function HomePageMainLoading({}: HomePageMainProps) {
  return <>Loading content...</>;
};

export const View = function HomePageMain({}: HomePageMainProps) {
  const {data} = useRouteContext();
  return (
    <>
      <h2>Home page's main section</h2>
      <p>
        This is a nested route with a nested route handler that can fetch data
        required by this section. This section also has a dedicated loading
        state!
      </p>
      <p>Content fetched was: {JSON.stringify(data)}</p>
    </>
  );
};
