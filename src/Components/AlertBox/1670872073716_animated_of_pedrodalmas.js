
/*
    Notes
      - Do not change or modify this comment block.
      - Do not change name of exported component class (Animated).
     
    File: 1670872073716_animated_of_pedrodalmas.js
    Name: Animated
    Description: a full animated alert with IOXtream main colors
    Author: https://github.com/pedrodalmas
     
    Animated renders a React IOXtream Overlay Component.
*/

import React from "react"
import Styles from "./1670872073716_animated_of_pedrodalmas.module.css"

export default function Animated(props) {
    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,800&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap" rel="stylesheet" />
            <div className={Styles.container}>
                <div>
                    <img alt="" className={Styles.iox_io} src="https://user-images.githubusercontent.com/98370909/171199876-b93f7ea9-f7fd-4320-9a44-091c78009c90.gif"></img>
                </div>
                <div className={Styles.new_donation_container}>
                    <p className={Styles.new_donation_first}>NEW DONATION</p>
                    <p className={Styles.new_donation_second}>NEW DONATION</p>
                    <p className={Styles.new_donation_third}>NEW DONATION</p>
                </div>
                <div className={Styles.main_container}>
                    <div className={Styles.gif_container}>
                        <img alt="" className={Styles.gif} src={props.donate.animated_gif} />
                    </div>
                    <div className={Styles.donate_info_container}>
                        <div className={Styles.donate_info}>
                            <p className={Styles.highlight_text}>{props.donate.username}</p>
                            sent you <b className={Styles.highlight_text}> {props.donate.amount} {props.donate.currency}</b>
                        </div>
                    </div>
                </div>
                <div className={Styles.lower_container}>
                    <div className={Styles.donate_message}>
                        {props.donate.message}
                    </div>
                    <div>
                        <img alt="" className={Styles.iox_ioxtream} src="https://ioxtream.io/images/logo/ioxtream-beta.svg"/>
                    </div>
                </div>
            </div>
        </>
    )
}
