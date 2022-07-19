import {SPAServerState} from '@micra/react-router';
import React from 'react';
import {App} from '../App';

export function Document() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Micra React DOM App</title>
      </head>
      <body>
        <App />
        <script type="module" src="/index.web.ts"></script>
        <SPAServerState />
      </body>
    </html>
  );
}
