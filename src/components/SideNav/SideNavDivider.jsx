/**
 * React dependecies 
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * External dependencies
 */
import classnames from 'classnames';

const SideNavDivider = ({ className, ...rest }) => {

    const classNames = classnames(`side-nav__divider`, className);

    return (
        <hr {...rest} className={classNames} />
    )

}

SideNavDivider.propTypes = {
    /**
     * Provide an optional class to be applied to the containing node
     */
    className: PropTypes.string,
};

export default SideNavDivider