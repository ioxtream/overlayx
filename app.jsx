import React, { Component } from "react";
import { AlertBoxes, AlertBoxesDetails } from "./src/AlertBoxes";
import SampleDonate from "./src/Donations";
import "./app.css"

const SIMULATION_DELAY_SEC = 1000

const createAlertBoxComponent = (alertBox, donate) => {
    if (typeof AlertBoxes[alertBox.componentName] !== "undefined") {
        return React.createElement(AlertBoxes[alertBox.componentName], {
            key: alertBox.componentPath,
            donate: donate,
        })
    }
    return React.createElement(
        () => <div>The AlertBox {alertBox.componentName} has not been created yet.</div>,
        { key: alertBox.componentPath }
    )
}

export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startedSimulation: false,
            remainingSimulationCount: SIMULATION_DELAY_SEC,
            selectedOverlay: "",
            donate: {},
        }

        this.simulateInAction = this.simulateInAction.bind(this)
        this.changeAlertBox = this.changeAlertBox.bind(this)
    }

    changeAlertBox(event) {
        this.setState({
            selectedOverlay: event.target.value
        })
    }

    simulateInAction() {
        let delay = this.state.remainingSimulationCount

        this.setState({
            startedSimulation: true,
            donate: SampleDonate(),
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
                donate: {},
                remainingSimulationCount: SIMULATION_DELAY_SEC,
            })
            clearInterval(countDown)
        }, SIMULATION_DELAY_SEC * 1000)
    }

    render() {
        return (
            <div>
                <header>
                    <select value={this.state.selectedOverlay} onChange={this.changeAlertBox}>
                        <option value="">Select one AlertBox</option>
                        { AlertBoxesDetails.map((alertBox) =>
                            <option key={ alertBox.componentPath } value={ alertBox.componentName }>
                                { alertBox.componentName } of { alertBox.author }
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
                { AlertBoxesDetails.map((alertBox) =>
                    <div key={ alertBox.componentPath } style={{ display: alertBox.componentName === this.state.selectedOverlay && this.state.startedSimulation ? "block": "none" }}>
                        { createAlertBoxComponent(alertBox, this.state.donate) }
                    </div>
                )}
            </div>
        )
    }
}
