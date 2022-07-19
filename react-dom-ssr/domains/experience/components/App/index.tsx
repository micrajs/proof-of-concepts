import {Routes} from '@micra/react-router';
import React, {useCallback} from 'react';

export function App() {
  const navigate = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      const history = use('history');
      const href = e.currentTarget.getAttribute('href');

      if (href && history.location.pathname !== href) {
        history.push(href);
      }
    },
    [],
  );

  return (
    <>
      <nav style={{display: 'flex', alignItems: 'center'}}>
        <h1>Micra React DOM App</h1>
        <div style={{marginLeft: '16px'}}>
          Content is SSR. Try navigating between the links to see loading
          states:
        </div>
        <menu style={{display: 'flex', listStyle: 'none'}}>
          <li style={{margin: '0 16px'}}>
            <a href="/" onClick={navigate}>
              Home
            </a>
          </li>
          <li style={{margin: '0 16px'}}>
            <a href="/about" onClick={navigate}>
              About
            </a>
          </li>
        </menu>
      </nav>
      <div style={{padding: 16, border: '1px solid black'}}>
        <Routes />
      </div>
    </>
  );
}
