
/*
    Notes
      - Do not change or modify this comment block.
      - Do not change name of exported component class (Universe).
     
    File: 1648651912218_universe_of_k4fer74.js
    Name: Universe
    Description: Themed with universe colors
    Author: https://github.com/k4fer74
     
    Universe renders a React IOXtream AlertBox Component.
*/

import React from "react"
import Styles from "./1648651912218_universe_of_k4fer74.module.css"

export default function Universe(props) {
    return (
        <div className={Styles.box}>
            <img alt="" src={props.donate.animated_gif} height={100} />
            <h2><span className={Styles.highlight}>{props.donate.username}</span> sent {props.donate.amount} {props.donate.currency}</h2>
            <h3>{props.donate.message}</h3>
        </div>
    )
}
