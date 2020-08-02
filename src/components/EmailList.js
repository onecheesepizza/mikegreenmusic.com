import React from "react";
import { css } from 'emotion';

export default function EmailList() {
	return (
		<div className={style}>
			<form
				action="https://MikeGreenMusic.us17.list-manage.com/subscribe/post?u=cc5f1628f36c94957cb6e0e45&amp;id=c2854261bd"
				method="post"
				id="mc-embedded-subscribe-form"
				name="mc-embedded-subscribe-form"
				className="validate"
				target="_blank"
				noValidate>
				<h3>Subscribe for email updates</h3>
				<div id="mc_embed_signup_scroll">
					<input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
					<div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
						<input type="text" name="b_cc5f1628f36c94957cb6e0e45_c2854261bd" tabIndex="-1" defaultValue="" />
					</div>
					<input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
				</div>
			</form>
		</div>
	);
};

const style = css`
	background-color: black;
	form {
		padding: 5em 2em;
	}
	input, button {
		text-align:center;
		font-size:1.5em;
		font-family: inherit;
		padding: 0em .4em 0em .4em;
		margin:0;
		height:2em;
		border:2px solid white;
		box-sizing: border-box;
	}
	input {
		text-transform:uppercase;
		border-radius: 0;
		-webkit-appearance: none;
	}
	.button{
		text-transform:uppercase;
		font-weight:300;
		background-color: black;
		color:white;
		border-radius: 0;
		transition: .5s;
		/* height:100%; */
	}
	.button:hover{
		background-color: white;
		color:black;
		border:2px solid white;
	}
	@media only screen and (max-width: 500px) {
		input, button {
			width:100%;
			padding: .4em .25em .4em .25em;
		}
	}
`;