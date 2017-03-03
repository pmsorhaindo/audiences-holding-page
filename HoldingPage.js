import React from 'react';
import { Login } from 'bw-axiom';

export default function HoldingPage() {
  const backgroundImage = 'something.jpg';
  const style = { backgroundImage: `url(${backgroundImage})` };
  return (
    <Base stye={style}>
      <div>
        <LogoTab color="grey" height="7.75rem" />
      </div>
    </Base>
  );
};
