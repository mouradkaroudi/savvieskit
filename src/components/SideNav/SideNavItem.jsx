/**
 * React dependecies 
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * External dependencies
 */
import classnames from 'classnames';

const SideNavItem = ({ 
    className: customClassName,
    children, 
    isActive,
    ...rest }) => {

    const className = classnames(
        'side-nav__item', 
        customClassName,{
            'side-nav__item--active': isActive
        });

    return (
        <li {...rest} className={className}>{children}</li>
    )
}

SideNavItem.propTypes = {
    /**
     * Provide a single icon as the child to `SideNavIcon` to render in the
     * container
     */
    children: PropTypes.node.isRequired,

    /**
     * Provide an optional class to be applied to the containing node
     */
    className: PropTypes.string,

    isActive: PropTypes.bool
}

export default SideNavItem