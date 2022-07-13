
/*
    Notes
      - Do not change or modify this comment block.
      - Do not change name of exported component class (Neon).
     
    File: 1657663500199_neon_of_Vicasoo.js
    Name: Neon
    Description: Neon with Animated IO
    Author: https://github.com/Vicasoo
     
    Neon renders a React IOXtream Overlay Component.
*/

import React from "react"
import Styles from "./1657663500199_neon_of_Vicasoo.module.css"

export default function Neon(props) {

    return (
        <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href={"https://fonts.googleapis.com/css2?family=Poppins&display=swap"} rel="stylesheet" />
        <div className={Styles.container}>
            <div className={Styles.donate_data}>
                <div className={Styles.GIF} style={{backgroundImage: `url(${props.donate.animated_gif})`}}></div>
                <div className={Styles.informations}>
                    <h2 className={Styles.highlight}>
                        {props.donate.username}
                    </h2>
                    <span>
                        sent you <b>{props.donate.amount} {props.donate.currency}</b>
                    </span>
                </div>
            </div>
            <h3 className={Styles.message}>
                {props.donate.message}
            </h3>
            <div className={Styles.logo}>
                <img alt="" src="https://ioxtream.io/images/logo/ioxtream-beta.svg"/>
            </div>
            <img alt="" className={Styles.IO} src="https://user-images.githubusercontent.com/98370909/171199876-b93f7ea9-f7fd-4320-9a44-091c78009c90.gif" width="100%"/>
        </div>
        </>
    )
}
