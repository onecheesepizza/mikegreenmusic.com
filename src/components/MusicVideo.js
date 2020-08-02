import React, {useState} from "react";
import { css } from 'emotion';

//config
const video = {
	url: "https://www.youtube.com/embed/KZd9-eO5I9E",
	title: "How To Love (Music Video)"
}
const startScale = .9;
const startBlur = "20px";
const transitionTime = ".5s";

//component
function MusicVideo() {
	//state: initial iframe load state
	const [frameLoaded, setFrameLoaded] = useState(false);
	function handleLoad(event){
		event.preventDefault();
		setFrameLoaded(true);
	};

	//JSX
	return (
		<div className={style+" "+(frameLoaded ? frameLoadedStyle : frameUnloadedStyle )}>
			<div className='embed-container'>
				<iframe 
				title={video.title}
				src={video.url}
				frameBorder='0' 
				allowFullScreen
				onLoad={handleLoad}
				>
				</iframe>
			</div>
		</div>
	)
};

//styles
const frameLoadedStyle = css`
		opacity: 1;
		transform: scale(1);
		filter: blur(0px);
		-webkit-filter: blur(0px);
		transition: ${transitionTime};
`;

const frameUnloadedStyle = css`
		opacity: 0;
		transform: scale(${startScale});
		filter: blur(${startBlur});
		-webkit-filter: blur(${startBlur});
`;

const style = css`
	padding:2em;
	min-height:100vh;
	min-height: -webkit-fill-available; /* accounts for mobile bottom bar */
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 960px;
	margin: 0 auto;
	.embed-container { 
		position: relative; 
		padding-bottom: 56.25%; 
		height: 0; 
		overflow: hidden; 
		max-width: 100%; 
	} 
	.embed-container iframe { 
		position: absolute; 
		top: 0; 
		left: 0; 
		width: 100%; 
		height: 100%; 
	}
`;

export default MusicVideo;


