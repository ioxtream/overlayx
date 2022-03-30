import React, { Component } from "react";
import SampleDonate from "./src/Donations";
import {
    Overlays,
    OverlaysDetails
} from "./src/Overlays";
import "./app.css"

const SIMULATION_DELAY_SEC = 5

const createOverlayComponent = (overlay, donate) => {
    if (typeof Overlays[overlay.componentName] !== "undefined") {
        return React.createElement(Overlays[overlay.componentName], {
            key: overlay.componentPath,
            streamerDonate: donate,
        })
    }
    return React.createElement(
        () => <div>The Overlay {overlay.componentName} has not been created yet.</div>,
        { key: overlay.componentPath }
    )
}

export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startedSimulation: false,
            remainingSimulationCount: SIMULATION_DELAY_SEC,
            selectedOverlay: "",
            streamerDonate: {},
        }

        this.simulateInAction = this.simulateInAction.bind(this)
        this.changeOverlay = this.changeOverlay.bind(this)
    }

    changeOverlay(event) {
        this.setState({
            selectedOverlay: event.target.value
        })
    }

    simulateInAction() {
        let delay = this.state.remainingSimulationCount

        this.setState({
            startedSimulation: true,
            streamerDonate: SampleDonate(),
        })

        let countDown = setInterval(() => {
            delay--
            this.setState({
                remainingSimulationCount: delay,
            })
        }, 1000)

        setTimeout(() => {
            this.setState({
                startedSimulation: false,
                streamerDonate: {},
                remainingSimulationCount: SIMULATION_DELAY_SEC,
            })
            clearInterval(countDown)
        }, SIMULATION_DELAY_SEC * 1000)
    }

    render() {
        return (
            <div>
                <header>
                    <select value={this.state.selectedOverlay} onChange={this.changeOverlay}>
                        <option value="">Select one AlertBox</option>
                        { OverlaysDetails.map((overlay) =>
                            <option key={ overlay.componentPath } value={ overlay.componentName }>
                                { overlay.componentName } of { overlay.author }
                            </option>
                        )}
                    </select>
                    <button disabled={ this.state.startedSimulation || this.state.selectedOverlay === "" } onClick={ this.simulateInAction }>
                        See in action!
                        <span style={{ display: this.state.startedSimulation ? "inline" : "none" }}>
                            ({ this.state.remainingSimulationCount }s)
                        </span>
                    </button>
                </header>
                { OverlaysDetails.map((overlay) =>
                    <div key={ overlay.componentPath } style={{ display: overlay.componentName === this.state.selectedOverlay && this.state.startedSimulation ? "block": "none" }}>
                        { createOverlayComponent(overlay, this.state.streamerDonate) }
                    </div>
                )}
            </div>
        )
    }
}
