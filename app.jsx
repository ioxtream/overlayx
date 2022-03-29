import { Component } from "react";
import { Universe } from "./src/Components/Overlay/1648565029009_universe_of_k4fer74";

export class App extends Component {
    state = {
        startedSimulation: false,
        streamerDonate: {},
    }
    constructor(props) {
        super(props);
    }
    simulateInAction() {
        if (this.state.startedSimulation === true) {
            this.setState({
                startedSimulation: false,
                streamerDonate: {},
            })
        } else {
            this.setState({
                startedSimulation: true,
                streamerDonate: {
                    giver_username: "Elon74",
                    giver_message: "Thanks for sharing with us your knowledge!",
                    currency: "SAT",
                    amount: "10000",
                    animatedGIF: "https://i.pinimg.com/originals/d6/6b/9c/d66b9cd46e19093e06e3edabdf21e1da.gif",
                }
            })
        }
    }
    render() {
        return <div>{this.state.startedSimulation ? <Universe streamerDonate={this.state.streamerDonate} /> : null }  <button onClick={this.simulateInAction.bind(this)}>In Action!</button></div>;
    }
}
