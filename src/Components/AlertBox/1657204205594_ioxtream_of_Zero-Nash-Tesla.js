
/*
    Notes
      - Do not change or modify this comment block.
      - Do not change name of exported component class (IOXtream).

    File: 1657204205594_ioxtream_of_Zero-Nash-Tesla.js
    Name: IOXtream
    Description: Overlay With IOXtream logo
    Author: https://github.com/Zero-Nash-Tesla

    IOXtream renders a React IOXtream Overlay Component.
*/

import React from "react"
import Styles from "./1657204205594_ioxtream_of_Zero-Nash-Tesla.module.css"

export default function IOXtream(props) {
    return (
        <div className={Styles.container}>
          <div className={Styles.box}>
              <img alt="" className={Styles.img} src={props.donate.animated_gif} height={100} />
              <div>
                <h2><span className={Styles.highlight}>{props.donate.username}</span> sent {props.donate.amount}</h2>
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
