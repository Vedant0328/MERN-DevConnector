import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      style={{ width: '200px', marginLeft: '350px', display: 'bolck' }}
      alt='Loading...'
    />
  </Fragment>
);

export default Spinner;
