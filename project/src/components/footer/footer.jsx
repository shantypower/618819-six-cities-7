import React from 'react';
import Logo from '../logo/logo';
import {LogoType} from '../../const';

function Footer() {
  return (
    <footer className="footer container" data-testid="footer">
      <Logo logoType={LogoType.FOOTER}/>
    </footer>
  );
}

export default Footer;
