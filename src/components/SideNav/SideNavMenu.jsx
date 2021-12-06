/**
 * React dependecies 
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal dependecies
 */
import SideNavItem from './SideNavItem';
import SideNavIcon from './SideNavIcon';
import SideNavLinkText from './SideNavLinkText';

const SideNavMenu = ({
    className: customClassName,
    children,
    renderIcon,
    title,
    ...rest }) => {

    const className = classnames('side-nav__menu')

    return (
        <li className={className}>
            <button
                type="button"
            >
                <SideNavLinkText>{title}</SideNavLinkText>
                <SideNavIcon>
                    {renderIcon}
                </SideNavIcon>
            </button>

            <ul className="side-nav__menu__items">
                {children}
            </ul>

        </li>
    )

};

export default SideNavMenu