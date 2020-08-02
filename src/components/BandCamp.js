import React, {useState} from "react";
import { css } from 'emotion';
import { useInView } from 'react-intersection-observer'
import 'intersection-observer';

//config
const startScale = .9;
const startBlur = "20px";
const transitionTime = ".5s";

//component
function BandCamp() {
	//state: initial iframe load state
	const [frameLoaded, setFrameLoaded] = useState(false);
	function handleLoad(event){
		event.preventDefault();
		setFrameLoaded(true);
	};
	//viewport visibility state hook for style transition
	const [ref, inView] = useInView({
		threshold: .4, //% inside viewport before inView===true
		triggerOnce: true
	  })

	//JSX
	return (
		<div 
		name="bandCamp" 
		className={style+" "+ (inView&&frameLoaded? loadedStyle : unloadedStyle)}
		ref={ref}
		>
			<h2>
				<a 
				href="https://mikegreen.bandcamp.com/album/restart?action=buy&amp;from=embed" 
				target="_blank" 
				rel="noopener noreferrer"
				>“Restart” Available Now</a>
			</h2>
				<iframe 
				id="bandCampFrame"
				title="Mike Green - Restart (Album Stream)"
				src="https://bandcamp.com/EmbeddedPlayer/album=2547911700/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/"
				onLoad={handleLoad}
				seamless>
					<a 
					href="http://mikegreen.bandcamp.com/album/restart"
					target="_blank" 
					rel="noopener noreferrer"
					>Restart by Mike Green</a>
				</iframe>
		</div>
	)
};

//styles
const loadedStyle = css`
		opacity: 1;
		transform: scale(1);
		filter: blur(0px);
		-webkit-filter: blur(0px);
		transition: ${transitionTime};
`;

const unloadedStyle = css`
		opacity: 0;
		transform: scale(${startScale});
		filter: blur(${startBlur});
		-webkit-filter: blur(${startBlur});
`;

const style = css`
	text-align:center;
	height:100%;
	padding-bottom:5em;
	iframe {
		border: 0; 
		width: 400px; 
		height: 400px;
		margin: 0 auto;
	}
	@media only screen and (max-width: 450px) {
		iframe {
			border: 0; 
			width: 80vw; 
			height: 80vw;
			margin: 0 auto;
		}
	}
`;

export default BandCamp;
