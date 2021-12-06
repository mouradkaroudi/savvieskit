/**
 * React dependecies 
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * External dependencies
 */
import classnames from 'classnames';

const SideNavMenuItem = ({ className: customClassName, children, ...rest }) => {

    const className = classnames('side-nav__menu_item', customClassName);

    return (
        <li {...rest} className={className}>{children}</li>
    )
}

export default SideNavMenuItem;