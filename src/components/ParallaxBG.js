import React, {useState, useEffect} from "react";
import { css } from 'emotion';

//config
const transitionDelay = 250; //ms
const transitionTime = "1.5s";
const bgImage = process.env.PUBLIC_URL+"/images/mike-green-jag-studio-pic.jpg";
//disable Parallax with incompatible browsers
const disableParallax = /Firefox|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false;

//component
function ParallaxBG({scrollPosition}) {
	//state: bg image transition
	const [blurBG, setBlurBG] = useState(true);
	useEffect(() => {
		const timer = setTimeout(() => {
			setBlurBG(false);
		}, transitionDelay);
		return () => clearTimeout(timer);
	}, []);

	//JSX
	return (
		<div 
		//disable Parallax with incompatible browsers
		style={disableParallax?  {background: "none"} : {backgroundPositionY: -scrollPosition * .4}}
		// bg load blur
		className={style+" "+ (blurBG ? blurBGOn : blurBGOff )}
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

const style = css`
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

export default ParallaxBG;
