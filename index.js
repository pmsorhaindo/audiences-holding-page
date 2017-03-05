import React from 'react';
import { render } from 'react-dom';
import HoldingPage from './HoldingPage';

render(
  <HoldingPage
    application="Audiences"
    backgroundImage="https://s3-eu-west-1.amazonaws.com/brandwatch.audiences.client.resources/audieces-login-image.jpg"
    theme="dark"/>,
  document.getElementById('react-root')
);
