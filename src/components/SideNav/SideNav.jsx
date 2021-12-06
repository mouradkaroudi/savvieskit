/**
 * React dependecies 
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * External dependencies
 */
import classnames from 'classnames';

const SideNav = ({
    isExpanded,
    children
}) => {

    const className = classnames('side-nav', {
        'side-nav--expanded': isExpanded
    });

    return (
        <nav className={className}>
            {children}
        </nav>
    );
};

export default SideNav;