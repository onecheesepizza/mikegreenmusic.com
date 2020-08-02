import React, {useState, useEffect} from "react";
import { css } from 'emotion';

//config
const transitionDelay = 250; //ms
const transitionTime = "1.5s";
const bgImage = process.env.PUBLIC_URL+"/images/mike-green-jag-studio-pic.jpg";
//enable parallax only for Chrome
const enableParallax = /Chrome/i.test(navigator.userAgent) ? true : false;

//component
function ParallaxBG({scrollPosition}) {
	//state: bg image transition
	const [componentLoaded, setComponentLoaded] = useState(false);
	useEffect(() => {
		//handle transition delay
		const timer = setTimeout(() => {
			setComponentLoaded(true);
		}, transitionDelay);
		return () => clearTimeout(timer);
	}, []);

	//JSX
	return (
		<div 
		// parallax scroll tracking (if enabled)
		style={enableParallax ? {backgroundPositionY: -scrollPosition * .4} : null}
		// bg load blur, parallax styles (if enabled)
		className={(componentLoaded ? blurBGOff : blurBGOn )+" "+(enableParallax ? parallaxStyle : fallbackStyle)}
		/>
	)
};

//styles
const blurBGOn = css`
	filter: blur(20px);
	-webkit-filter: blur(20px);
`;

const blurBGOff = css`
	filter: blur(0px);
	-webkit-filter: blur(0px);
`;

const parallaxStyle = css`
	position:absolute;
	top:0;
	left:0;
	width:100%;
	height:100%;
	z-index:-1;
	transition: opacity, filter ${transitionTime};
	background: url(${bgImage}) no-repeat center center fixed; 
	background-color:black;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
`;

const fallbackStyle = css`
	position:absolute;
	top:0;
	left:0;
	width:100%;
	height:100%;
	z-index:-1;
	background:none;
`;

export default ParallaxBG;
