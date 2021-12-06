/**
 * React dependecies 
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * External dependencies
 */
import classnames from 'classnames';

const SideNavList = ({ children, ...rest }) => {

    const className = classnames('side-nav__list')

    return(
        <ul className={className} {...rest}>
            {children}
        </ul>
    );

};

export default SideNavList;