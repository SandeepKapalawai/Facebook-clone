import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow.js';

import EmojiFlagsIcon from '@material-ui/icons/LocalHospital';
import LocalHospitalIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibraryOutlined';
import {ExpandMoreOutlined} from '@material-ui/icons';
import { useStateValue } from './StateProvider';



function Sidebar() {
    const [{user},dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName}/>
            <SidebarRow Icon ={LocalHospitalIcon} title="COVI19-InformationCenyter"/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
            <SidebarRow Icon={ChatIcon} title="Chat"/>
            <SidebarRow Icon={StorefrontIcon} title="Store"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace"/>
        </div>
    )
}

export default Sidebar
