import React, { useState, useEffect } from 'react';
//components
import Header from './components/Header';
import ParallaxContainer from './components/ParallaxContainer';
import ParallaxBG from './components/ParallaxBG';
import MusicVideo from './components/MusicVideo';
import ArrowBounce from './components/ArrowBounce';
import BandCamp from './components/BandCamp';
import Footer from './components/Footer';
//styles
import { injectGlobal } from 'emotion'; //css-in-js
import 'normalize.css'; //css reset
import 'animate.css/source/animate.css'; //css animations

//app component
function App() {
	//state: scroll position for parallax background
	const [scrollTop, setScrollTop] = useState(0);
	const onScroll = (event) => {
		setScrollTop(event.target.scrollingElement.scrollTop);
	}
	useEffect(() => {
		window.addEventListener('scroll', onScroll);
	}, []);

	//JSX
	return (
		<div className="App">
			<ParallaxContainer>
				<ParallaxBG 
					scrollPosition={scrollTop}/>
				<Header/>
				<MusicVideo/>
				<ArrowBounce 
					scrollTo="bandCamp" 
					hidden={scrollTop>0 ? true : false}/>
				<BandCamp/>
			</ParallaxContainer>
			<Footer/>
		</div>
	);
};

//global styles
injectGlobal`
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&display=swap');
	html {
		background-color: black;
	}
	body {
		text-align: center;
		font-family: 'Montserrat', sans-serif;
		font-weight:100;
		color:white;
		width:100vw;
	}
	html, body, div, ul, li {
		margin:0;
		padding:0;
		text-transform: uppercase;
	}
	h1, h2, h3 {
		font-size:2em;
		font-weight:100;
		letter-spacing: .25em;
	}
	p{
		letter-spacing:.1em;
	}
	h3 {
		font-size:1.25em
	}
	a {
		text-decoration: none;
		color: white;
	}
	input[type=submit], button[type=submit] {
		text-transform: uppercase;
		font-weight:100;
	}
	button {
		font-weight:inherit;
	}
	li {
		list-style: none;
	}
	::selection {
		background: white;
		color:black;
	}
	::-moz-selection {
		background: white;
		color:black;
	}
`;

//dev tag
console.log(`
Developed by Brian Moore 🍕
https://onecheesepizza.dev
https://github.com/onecheesepizza
`);

export default App;
