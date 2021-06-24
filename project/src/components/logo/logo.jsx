import React from 'react';
import {Link} from 'react-router-dom';
import {object} from 'prop-types';

function Logo({logoSettings}) {
  return(
    <Link className={logoSettings.linkClass} to="/">
      <img className={logoSettings.imageClass} src="img/logo.svg" alt="6 cities logo" width={logoSettings.width} height={logoSettings.height}/>
    </Link>
  );
}

Logo.propTypes = {
  logoSettings: object.isRequired,
};

export default Logo;
