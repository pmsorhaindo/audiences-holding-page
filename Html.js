import React, { PropTypes } from 'react';
import { renderToString } from 'react-dom/server';

export default function Html(props) {
  const title = 'Audiences';
  const { children } = props;

  return (
    <html lang="en-us">
      <head>
        <meta charSet="utf-8"/>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <title>{ title }</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700" rel="stylesheet" />
      </head>
      <body>
        { children }
      </body>
    </html>
  );
}

Html.propTypes = {
  children: PropTypes.any,
  component: PropTypes.object,
  store: PropTypes.object,
};

