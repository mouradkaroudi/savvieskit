/**
 * React dependecies 
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * External dependencies
 */
import classnames from 'classnames';

const SideNavIcon = ({ className: customClassName, children, ...rest }) => {

    const className = classnames('side-nav__icon', customClassName);

    return (
        <div {...rest} className={className}>
            {children}
        </div>
    )

};

SideNavIcon.propTypes = {
    /**
     * Provide a single icon as the child to `SideNavIcon` to render in the
     * container
     */
    children: PropTypes.node.isRequired,

    /**
     * Provide an optional class to be applied to the containing node
     */
    className: PropTypes.string
};

export default SideNavIcon;