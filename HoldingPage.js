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
      <Base className="au-holding-page__content">
        <Heading space="small" style="display" textColor="light">{ application }<Weak>/ is currently unavailable.</Weak></Heading>
      </Base>
    </Base>
  );
};
