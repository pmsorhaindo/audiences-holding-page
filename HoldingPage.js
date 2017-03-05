import React from 'react';
import { Base, Heading, LogoTab, Weak } from 'bw-axiom';

if (__INCLUDE_CSS__) {
    require('./HoldingPage.scss');
}

export default function HoldingPage(props)  {
  const { application, backgroundImage, theme } = props;
  const style = { backgroundImage: `url(${backgroundImage})`, backgroundColor: "black" };

  return (
    <Base className="au-holding-page" style={ style } theme={ theme }>
      <LogoTab color="grey" height={ "7.75rem" }/>
      <Heading space="small" style="display">{ application }<Weak>/ Audiences is currently down for Maintenance</Weak></Heading>
    </Base>
  );
};
