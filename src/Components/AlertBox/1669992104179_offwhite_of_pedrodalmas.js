
/*
    Notes
      - Do not change or modify this comment block.
      - Do not change name of exported component class (OffWhite).
     
    File: 1669992104179_offwhite_of_pedrodalmas.js
    Name: OffWhite
    Description: A minimalist alert with custom gif
    Author: https://github.com/pedrodalmas
     
    OffWhite renders a React IOXtream Overlay Component.
*/

import React from "react"
import Styles from "./1669992104179_offwhite_of_pedrodalmas.module.css"

export default function OffWhite(props) {
    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,800&display=swap" rel="stylesheet" />
            <div className={Styles.container}>
                <div>
                    <img alt="" className={Styles.iox_io} src="https://user-images.githubusercontent.com/98370909/171199876-b93f7ea9-f7fd-4320-9a44-091c78009c90.gif"></img>
                </div>
                <div className={Styles.offwhite_container}>
                    <div className={Styles.background_text}>
                        DONATE
                    </div>
                    <div className={Styles.gif_container}>
                        <img alt="" className={Styles.gif} src={props.donate.animated_gif} />
                    </div>
                    <div className={Styles.donate_info_container}>
                        <div className={Styles.donate_info_nickname}>
                            <p>{props.donate.username}</p>
                        </div>
                        <div className={Styles.donate_info_amount_currency}>
                            enviou <b>{props.donate.amount} {props.donate.currency}</b>
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
