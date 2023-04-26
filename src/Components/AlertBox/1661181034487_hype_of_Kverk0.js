
/*
    Notes
      - Do not change or modify this comment block.
      - Do not change name of exported component class (Hype).

    File: 1661181034487_hype_of_Kverk0.js
    Name: Hype
    Description: Animated alert from IOXtream
    Author: https://github.com/Kverk0

    Hype renders a React IOXtream Overlay Component.
*/

import React from "react"
import Styles from "./1661181034487_hype_of_Kverk0.module.css"

export default function Hype(props) {
    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,800&display=swap" rel="stylesheet" />
            <div className={Styles.iox_container}>
                <div className={Styles.iox_container_title_bg}>
                </div>
                <div className={Styles.iox_container_title_black}>
                </div>
                <div className={Styles.iox_container_title}>
                    <p>
                        <i>
                            New donation!
                        </i>
                    </p>
                </div>
                <div className={Styles.iox_container_data_wrapper}>
                    <div className={Styles.iox_container_data}>
                        <h2>{props.donate.username}</h2>
                        <h3>{props.donate.amount}</h3>
                    </div>
                    <img alt="" className={Styles.iox_io} src="https://ioxtream.io/images/overlayx/io.png"/>
                    <img alt="" className={Styles.iox_star} src="https://ioxtream.io/images/overlayx/star.png"/>
                    <img alt="" className={Styles.iox_hype} src="https://ioxtream.io/images/overlayx/we_dont_need_hype.png"/>
                </div>
                <h4 className={Styles.iox_message}>{props.donate.message}</h4>
            </div>
        </>
    )
}
