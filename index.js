import React from 'react';
import { renderToString } from 'react-dom/server';
import Html from './Html';
import HoldingPage from './HoldingPage';

export default function render() {
  return renderToString(
    <Html>
      <HoldingPage />
    </Html>
  );
};
