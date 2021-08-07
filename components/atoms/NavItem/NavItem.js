import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './navItem.css'

const NavItem = ({ textLink, isActive }) => {
    return (
        <>
            <li className={ classNames( 'nav-item', {
                'active': isActive
            })}>
                <div className='nav-link'>
                    { textLink }
                </div>
            </li>   
        </>
    )
}

NavItem.propTypes = {
    textLink: PropTypes.string.isRequired,
    isActive: PropTypes.bool
}

NavItem.defaultProps = {
    textLink: 'sample',
    isActive: false
}

export default NavItem
