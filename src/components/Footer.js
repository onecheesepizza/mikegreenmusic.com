import React from "react";
import { css } from 'emotion';
import EmailList from './EmailList';
import SocialIcons from './SocialIcons';

//config 
const hoverTransitionTime = ".25s";
const getDate = () => {
    const now = new Date();
    return now.getFullYear();
};

//component
function Footer() {
    return (
        <div className={style}>
            <EmailList/>
            <SocialIcons
            facebook = "http://www.facebook.com/ilikemikegreen"
            youtube = "https://www.youtube.com/channel/UCDIpdzCKQD4FKpzaStgrDLQ"
            instagram = "http://www.instagram.com/ilikemikegreen"
            spotify = "https://open.spotify.com/album/0ozJLCNR71qqdCSTt96W1P"
            applemusic = "https://music.apple.com/us/album/restart/1470174930"
            bandcamp = "https://mikegreen.bandcamp.com/releases"
            />
            <p id="footerText">
            © {getDate()} Mike Green - All Rights Reserved<br/>
            Background Photo by <a href="https://jagstudios.net/" target="_blank" rel="noopener noreferrer">JAGstudios</a><br/>
            site by <a href="https://onecheesepizza.dev" target="_blank" rel="noopener noreferrer">onecheesepizza</a>
            </p>
        </div>
    );
};

//styles
const style = css`
    position: sticky;
    position: -webkit-sticky;
    bottom: 0px;
    margin: 0 auto;
    padding-bottom:1em;
    width:100%;
    z-index:0;
    #footerText {
        margin-top:3em;
        font-size:.7em;
        color: rgba(255, 255, 255, .6);     
        font-weight:400;
    }
    #footerText a {
        color: rgba(255, 255, 255, .8);     
    }
    #footerText a:hover {
        color: rgba(255, 255, 255, 1);
		transition: ${hoverTransitionTime};
    }
`;

export default Footer;