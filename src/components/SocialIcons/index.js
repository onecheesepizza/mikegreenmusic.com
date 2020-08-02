import React, {useState, useEffect} from "react";
import { css } from 'emotion';
import SVG from 'react-inlinesvg';

//config
const startScale = .9;
const startBlur = "20px";
const loadTransitionTime = "1s";
const hoverTransitionTime = ".25s";

//component
function SocialIcons(props) {
	//props should match svg file names in ./icons
	//create array of property / value pairs for icon urls passed as props to component
	const selectedIcons = Object.entries(props);

	//state: initial load transition
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		//run once on component mount
		setLoaded(true);
	}, [])

	//state: text of hover icon
	const [iconHover, setIconHover] = useState(false);
	const [hoverText, setHoverText] = useState(null);
	function iconHoverHandler(event){
		//get text from title tag inside SVG
		const hoverText = event.currentTarget.getElementsByTagName("title")[0].textContent.slice(0, -5);
		setHoverText(hoverText);
		setIconHover(true);
	};
	function iconHoverOffHandler(event){
		setIconHover(false);
	};
	
	//JSX
	return (
		<div className={style+" "+ (loaded ? loadedStyle : unloadedStyle)} >
			{/* icons */}
			<ul >
				{selectedIcons.map(icon =>(
				<li key={icon[0]}>
					<a	href={icon[1]} 
						target="_blank"
						rel="noopener noreferrer">
						<SVG 
							id={icon[0]} 
							src={require(`./icons/${icon[0]}.svg`)}
							// hover event handlers
							onMouseEnter={iconHoverHandler}
							onMouseLeave={iconHoverOffHandler}
						/>
					</a>
				</li>
				))}
			</ul>
			{/* hover text */}
			<p className={hoverTextStyle+" "+ (iconHover ? hoverTextOn : hoverTextOff)}>
				{hoverText ? hoverText: "Social Media"} 
				{/* placeholder text won't be seen: it reserves dom layout space so elements don't jump when hoverText is first set by a hover event */}
			</p>
		</div>
	);
};

//styles
const loadedStyle = css`
		opacity: 1;
		transform: scale(1);
		filter: blur(0px);
		-webkit-filter: blur(0px);
		transition: ${loadTransitionTime};
`;

const unloadedStyle = css`
		opacity: 0;
		transform: scale(${startScale});
		filter: blur(${startBlur});
		-webkit-filter: blur(${startBlur});
`;

const style = css`
	transition: ${loadTransitionTime};
	li, a{
		position:relative;
		display:inline-block;
		padding:0;
		margin:0;
	}
	SVG {
		fill:white;
        width:2em;
		margin: .10em .75em .75em .75em;
		opacity:.75;
		transition: ${hoverTransitionTime};
	}
	SVG:hover {
		opacity:1;
		transition: ${hoverTransitionTime};
	}
`;

const hoverTextStyle = css`
	position:relative;
	padding: 0;
	margin: 0;
	color: rgba(255, 255, 255, 1);     
	font-size:.9em;
	letter-spacing: .2em
	font-weight:400;
	transition: ${hoverTransitionTime};
`;
const hoverTextOn = css`
	opacity:1;
`;
const hoverTextOff = css`
	opacity:0;
`;

export default SocialIcons;

