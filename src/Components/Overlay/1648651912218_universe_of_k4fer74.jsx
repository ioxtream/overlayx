
/*
    Notes
      - Do not change or modify this comment block.
      - Do not change name of exported component class (Universe).
     
    File: 1648651912218_universe_of_k4fer74.jsx
    Name: Universe
    Description: Themed with universe colors
    Author: https://github.com/k4fer74
     
    Universe renders a React IOXtream Overlay Component.
*/

import { Component } from "react"
import * as Styles from "./1648651912218_universe_of_k4fer74.module.css"

export class Universe extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={Styles.box}>
                <img alt="" src={this.props.streamerDonate.animatedGIF} height={100} />
                <h2><span className={Styles.highlight}>{this.props.streamerDonate.giver_username}</span> sent {this.props.streamerDonate.amount} {this.props.streamerDonate.currency}</h2>
                <h3>{this.props.streamerDonate.giver_message}</h3>
            </div>
        )
    }
}
