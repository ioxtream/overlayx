
/*
    Notes
      - Do not change or modify this comment block.
      - Do not change name of exported component class (RGB).
     
    File: 1670871789836_rgb_of_pedrodalmas.js
    Name: RGB
    Description: alert with a rgb border effect
    Author: https://github.com/pedrodalmas
     
    RGB renders a React IOXtream Overlay Component.
*/

import React from "react"
import Styles from "./1670871789836_rgb_of_pedrodalmas.module.css"

export default function RGB(props) {
    return (
        <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href={"https://fonts.googleapis.com/css2?family=Poppins&display=swap"} rel="stylesheet" />
        <div className={Styles.container}>
            <div className={Styles.new_donation_container}>
                <b className={Styles.new_donation}>New Donation</b>
            </div>
            <div className={Styles.rgb_container}>
                <div className={Styles.gif_container}>
                    <img alt="" className={Styles.gif} src={props.donate.animated_gif} />
                </div>
                <div className={Styles.donate_info_container}>
                    <h3 className={Styles.username}>{props.donate.username}</h3>
                    <div className={Styles.donate_text}>
                        sent you <b className={Styles.amount_currency}>{props.donate.amount} {props.donate.currency}</b>
                    </div>
                <div>
                    <img alt="" className={Styles.ioxtream_text} src="https://ioxtream.io/images/logo/ioxtream-beta.svg"/>
                </div>
                </div>
                <div className={Styles.io_container}>
                    <img alt="" className={Styles.io} src="https://user-images.githubusercontent.com/98370909/171199876-b93f7ea9-f7fd-4320-9a44-091c78009c90.gif"></img>
                </div>
            </div>
            <div className={Styles.donate_message_container}>
                <p className={Styles.donate_message}>
                    {props.donate.message}
                </p>
            </div>
        </div>
    </>
    )
}
