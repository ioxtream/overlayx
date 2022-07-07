
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
      <div className={Styles.container}>
        <div className={Styles.box}>
            <img alt="" className={Styles.img} src={props.donate.animated_gif} height={100} />
            <div>
              <h2><span className={Styles.highlight}>{props.donate.username}</span> sent {props.donate.amount} {props.donate.currency}</h2>
              <h3>{props.donate.message}</h3>
            </div>
            <div className={Styles.io}>
                <img alt="" className={Styles.img} src="https://user-images.githubusercontent.com/98370909/171199876-b93f7ea9-f7fd-4320-9a44-091c78009c90.gif" width="100%"/>
            </div>
            <div className={Styles.logo}>
              <img alt="" src="https://ioxtream.io/images/logo/ioxtream-beta.svg"/>
            </div>
        </div>
      </div>
    )
}
