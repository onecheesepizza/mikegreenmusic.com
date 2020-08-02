import React from "react";
import { css } from 'emotion';

function ParallaxContainer(props) {
    return (
        <div className={style}>
        {props.children}    
        </div>
    );
};

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

export default ParallaxContainer;
