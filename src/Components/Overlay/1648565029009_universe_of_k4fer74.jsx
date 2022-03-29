/*
    Notes
      - Do not change or modify this comment block.
      - Do not change name of exported function (Universe).

    File: 1648565029009_universe_of_k4fer74.jsx
    Name: Universe
    Description: An universe themed overlay for who loves the Creation
    Author: https://github.com/k4fer74

    Universe renders a React IOXtream Overlay Component.
*/

import { Component } from "react"

export class Universe extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <img src={this.props.streamerDonate.animatedGIF} height={100} />
                <h3>{this.props.streamerDonate.giver_username} sent {this.props.streamerDonate.amount}{this.props.streamerDonate.currency}</h3>
                <h2>{this.props.streamerDonate.giver_message}</h2>
            </div>
        );
    }
}
