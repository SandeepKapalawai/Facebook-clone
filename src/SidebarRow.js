import React from 'react';
import './SidebarRow.css';
import {Avatar,IconButton} from '@material-ui/core';

function SidebarRow({src, Icon,title}) {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon src={src} />}
            <p>{title}</p>
        </div>
    )
}

export default SidebarRow
