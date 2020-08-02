import React from "react";
import { css } from 'emotion';
import SocialIcons from './SocialIcons';

//component
function Header() {
    return (
        <header className={style}>
            <SocialIcons
            facebook = "http://www.facebook.com/ilikemikegreen"
            youtube = "https://www.youtube.com/channel/UCDIpdzCKQD4FKpzaStgrDLQ"
            instagram = "http://www.instagram.com/ilikemikegreen"
            spotify = "https://open.spotify.com/album/0ozJLCNR71qqdCSTt96W1P"
            applemusic = "https://music.apple.com/us/album/restart/1470174930"
            bandcamp = "https://mikegreen.bandcamp.com/releases"
           />
        </header>
    );
};

//styles - SocialIcons header context
const style=css`
    z-index:2;
    position:absolute;
    right:0;
    padding:1em;
    p {
        text-align:right;
        margin-right:1.25em;
    }
    @media only screen and (max-width: 800px) {
        left:0;
        p {
            text-align:center;
        }
	}
`;

export default Header;
