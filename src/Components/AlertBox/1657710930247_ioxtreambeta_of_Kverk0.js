
/*
    Notes
      - Do not change or modify this comment block.
      - Do not change name of exported component class (IOXtreamBeta).
     
    File: 1657710930247_ioxtreambeta_of_Kverk0.js
    Name: IOXtreamBeta
    Description: IOXtream theme with transparency
    Author: https://github.com/Kverk0
     
    IOXtreamBeta renders a React IOXtream Overlay Component.
*/

import React from "react"
import Styles from "./1657710930247_ioxtreambeta_of_Kverk0.module.css"

export default function IOXtreamBeta(props) {
    return (
        <>
        <div className={Styles.container}>
            <div className={Styles.donate_data}>
                <div className={Styles.GIF_container} style={{backgroundImage: `url(${props.donate.animated_gif})`}}></div>
                <div className={Styles.informations}>
                    <h2>
                        {props.donate.username}
                    </h2>
                    <span>
                        sent you <b>{props.donate.amount}</b>
                    </span>
                </div>
            </div>
            <h3>{props.donate.message}</h3>
            <div className={Styles.logo}>
                <img alt="" src="https://ioxtream.io/images/logo/ioxtream-beta.svg"/>
            </div>
            <img alt="" className={Styles.IO} src="https://user-images.githubusercontent.com/98370909/171199876-b93f7ea9-f7fd-4320-9a44-091c78009c90.gif" width="100%"/>
        </div>
        </>
    )
}
