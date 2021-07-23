import React from 'react';
import {Link} from 'react-router-dom';
import {string} from 'prop-types';
import {Routes, LogoSettings} from '../../const';

function Logo({logoType}) {
  return(
    <Link className={LogoSettings[logoType].linkClass} to={Routes.ROOT} data-testid="logo-link">
      <img className={LogoSettings[logoType].imageClass} src="img/logo.svg" alt="6 cities logo" width={LogoSettings[logoType].width} height={LogoSettings[logoType].height}/>
    </Link>
  );
}

Logo.propTypes = {
  logoType: string.isRequired,
};

export default Logo;
