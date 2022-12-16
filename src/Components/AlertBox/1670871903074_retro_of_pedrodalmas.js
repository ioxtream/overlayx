
/*
    Notes
      - Do not change or modify this comment block.
      - Do not change name of exported component class (Retro).
     
    File: 1670871903074_retro_of_pedrodalmas.js
    Name: Retro
    Description: alert with retro design
    Author: https://github.com/pedrodalmas
     
    Retro renders a React IOXtream Overlay Component.
*/

import React from "react"
import Styles from "./1670871903074_retro_of_pedrodalmas.module.css"

export default function Retro(props) {
    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
            <div className={Styles.container}>
                <img alt="" className={Styles.ioxtream_text} src="https://ioxtream.io/images/logo/ioxtream-beta.svg"/>
                <div className={Styles.new_donation_container}>
                    <b className={Styles.new_donation_text}>New Donation</b>
                </div>
                <div className={Styles.retro_container}>
                    <div className={Styles.information_container}>
                        <div className={Styles.gif_container}>
                            <img alt="" className={Styles.gif} src={props.donate.animated_gif} />
                        </div>
                        <div className={Styles.donate_info_container}>
                            <div className={Styles.donate_info}>
                                <h3 className={Styles.donate_info_username}>
                                    {props.donate.username}
                                </h3>
                                <div className={Styles.donate_info_text}>
                                    sent you <b className={Styles.donate_info_amount_currency}>{props.donate.amount} {props.donate.currency}</b>
                                </div>
                            </div>
                        </div>
                        <img alt="" className={Styles.iox_io} src="https://user-images.githubusercontent.com/98370909/171199876-b93f7ea9-f7fd-4320-9a44-091c78009c90.gif" />
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
