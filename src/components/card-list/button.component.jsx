import React from 'react'

import "./button.component.css";


export const Button = (props) => (

    <button className="button" onClick={ e => e.target.value }  type={props.type}> Submit </button>

);
