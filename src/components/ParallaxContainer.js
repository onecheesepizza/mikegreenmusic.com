import React from "react";
import { css } from 'emotion';

//config
const bgImage = process.env.PUBLIC_URL+"/images/mike-green-jag-studio-pic.jpg";
//enable parallax only for Chrome
const enableParallax = /Chrome/i.test(navigator.userAgent) ? true : false;

//component
function ParallaxContainer(props) {
    return (
        <div 
        //provide fallback BG if parallax is not enabled
        className={style+" "+(enableParallax ? null: fallbackBackground)}
        >
        {props.children}    
        </div>
    );
};

//styles
const style=css`
    height:100%;
    position:relative;
    width:100vw;
    padding:0;
    margin:0;
    z-index: 2;
    color:white;
    background-color:black;
`;

//static BG if parallax is disabled
const fallbackBackground=css`
	background: url(${bgImage}) no-repeat center center; 
	background-color:black;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
`;

export default ParallaxContainer;
