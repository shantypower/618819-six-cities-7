import React from 'react';
import {Link} from 'react-router-dom';
import {string} from 'prop-types';
import {AppRoute, LogoSetting} from '../../const';

function Logo({logoType}) {
  return(
    <Link className={LogoSetting[logoType].linkClass} to={AppRoute.ROOT} data-testid="logo-link">
      <img className={LogoSetting[logoType].imageClass} src="img/logo.svg" alt="6 cities logo" width={LogoSetting[logoType].width} height={LogoSetting[logoType].height}/>
    </Link>
  );
}

Logo.propTypes = {
  logoType: string.isRequired,
};

export default Logo;
