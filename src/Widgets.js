import React from 'react';
import './Widgets.css';

function Widgets() {
    return (
        <div className="widgets">
            <iframe src="http://www.facebook.com/plugins/page.php?href=https://www.facebook.com/serveneedy&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="100%" 
            style ={{border:"none",overflow : "hidden"}} scrolling="no" frameBorder="1" allowTransparency={true} allow="encrypted-media"/>
        </div>
    )
}

export default Widgets;
