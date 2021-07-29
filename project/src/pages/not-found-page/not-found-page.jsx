import React from 'react';
import {Link} from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="notfound">
      <div className="notfound__container">
        <h1>404 Page not found!</h1>
        <Link to="/">Return to the main page</Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
