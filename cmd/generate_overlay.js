const fs = require("fs")
const prompts  = require('prompts');

const questions = [{
        type: 'text',
        name: 'username',
        message: 'What is your GitHub username?',
        validate: (username) => {
            let ghUserRegex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i
            if (ghUserRegex.test(username) === false) {
               return 'Invalid GitHub username'
            } else {
                return true
            }
        }
    }, {
        type: 'text',
        name: 'componentName',
        message: 'Overlay component Name (e.g Universe)',
        validate: (componentName) => {
            let componentNameRegex = /^[a-zA-Z]+$/
            if (componentNameRegex.test(componentName) === false) {
                return "Only letters is allowed"
            } else {
                return true
            }
        }
    }, {
        type: 'text',
        name: 'componentDescription',
        message: 'Overlay component Description',
        validate: (componentDescription) => {
            let componentDescriptionRegex = /^[a-zA-Z\s]*$/
            if (componentDescriptionRegex.test(componentDescription) === false) {
                return "Only letters and space are allowed"
            } else {
                return true
            }
        }
    }
];

function AlertComponentContent(author, componentName, componentDescription, fileName) {
    return `
/*
    Notes
      - Do not change or modify this comment block.
      - Do not change name of exported component class (${componentName}).
     
    File: ${fileName}
    Name: ${componentName}
    Description: ${componentDescription}
    Author: https://github.com/${author}
     
    ${componentName} renders a React IOXtream Overlay Component.
*/

import { Component } from "react"

export class ${componentName} extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h2>{this.props.streamerDonate.giver_username}</h2>
                <h3>{this.props.streamerDonate.giver_message}</h3>
            </div>
        )
    }
}
`
}

async function WriteAlertComponentFile(author, componentName, componentDescription) {
    let timeStamp = new Date().getTime()
    let fileName = `${timeStamp}_${componentName.toLowerCase()}_of_${author}.jsx`
    let filePath = "./src/Components/Overlay/" + fileName
    let fileContent = AlertComponentContent(author, componentName, componentDescription, fileName)

    await fs.writeFile(filePath, fileContent, err => {
        if (err) {
            console.error(err)
        } else {
            console.log(`Generated file: ${filePath}`)
        }
    })
}

(async function () {
    const response = await prompts(questions);

    // Capitalize the first letter
    let componentName = response.componentName
    componentName = componentName.charAt(0).toUpperCase() + componentName.slice(1)

    await WriteAlertComponentFile(response.username, componentName, response.componentDescription)
})()
