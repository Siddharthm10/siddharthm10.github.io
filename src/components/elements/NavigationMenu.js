// @flow
import React from 'react';
import type { Node } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../constants/routes';

const menuListStyle = {
  margin: 0,
  padding: 0,
};

const NavigationMenu = (): Node => {
  return (
    <ul style={menuListStyle}>
      <li>
        <Link to={routes.home}>Home</Link>
      </li>
      <li>
        <Link to={routes.about}>About Me</Link>
      </li>
      <li>
        <Link to={routes.projects}>Projects</Link>
      </li>
      <li>
        <Link to={routes.blog}>Blog</Link>
      </li>
    </ul>
  );
};

export default NavigationMenu;
