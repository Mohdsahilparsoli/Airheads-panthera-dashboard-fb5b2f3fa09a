import React from 'react';
import '../../styles/ProfileItems.scss';

function ProfileItems({name='Default name', Icon}) {
    return (
    <div className="profile-items">
        {/* <span>ICON</span> */}
        {Icon && <Icon className="sidebar-item-icon" fontSize="small" />}
        <span className="sub-profile-item">{name}</span>
    </div>

    )
}

export default ProfileItems