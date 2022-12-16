
/*
    Notes
      - Do not change or modify this comment block.
      - Do not change name of exported component class (Glitch).
     
    File: 1670871075617_glitch_of_pedrodalmas.js
    Name: Glitch
    Description: alert with glitch effect
    Author: https://github.com/pedrodalmas
     
    Glitch renders a React IOXtream Overlay Component.
*/

import React from "react"
import Styles from "./1670871075617_glitch_of_pedrodalmas.module.css"

export default function Glitch(props) {
    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,800&display=swap" rel="stylesheet" />
            <div className={Styles.container}>
                <div>
                    <img alt="" className={Styles.ioxtream_beta} src="https://ioxtream.io/images/logo/ioxtream-beta.svg"/>
                    <img alt="" className={Styles.iox_io} src="https://ioxtream.io/images/overlayx/io.png"/>
                </div>
                <div className={Styles.glitch_container}>
                    <div className={Styles.gif_container}>
                        <img alt="" className={Styles.gif} src={props.donate.animated_gif} />
                    </div>
                    <div className={Styles.main_container}>
                        <div className={Styles.main_container_info}>
                            <p>{props.donate.username}</p>
                            <div>
                                enviou <b className={Styles.donate_glitch}>{props.donate.amount} {props.donate.currency}</b>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Styles.message_container}>
                    <p className={Styles.message}>
                        {props.donate.message}
                    </p>
                </div>
            </div>
        </>
    )
}
