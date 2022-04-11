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
        message: 'AlertBox component Name (e.g Universe)',
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
        message: 'AlertBox component Description',
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

function OverlayComponentContent(author, componentName, componentDescription, fileName) {
    return `
/*
    Notes
      - Do not change or modify this comment block.
      - Do not change name of exported component class (${componentName}).
     
    File: ${fileName}.js
    Name: ${componentName}
    Description: ${componentDescription}
    Author: https://github.com/${author}
     
    ${componentName} renders a React IOXtream Overlay Component.
*/

import React from "react"
import Styles from "./${fileName}.module.css"

export default function ${componentName}(props) {
    return (
        <div>
            <h2>{props.donate.username}</h2>
            <h3>{props.donate.message}</h3>
        </div>
    )
}
`
}

async function WriteAlertBoxComponentFiles(author, componentName, componentDescription) {
    let timeStamp = new Date().getTime()
    let fileName = `${timeStamp}_${componentName.toLowerCase()}_of_${author}`
    let filePath = "./src/Components/AlertBox/" + fileName

    let fileComponentContent = OverlayComponentContent(author, componentName, componentDescription, fileName)

    await fs.writeFile(filePath + ".js", fileComponentContent, err => {
        if (err) {
            console.error(err)
            return {}
        } else {
            console.log(`Generated file: ${filePath}.js`)
        }
    })

    let fileComponentStyleContent = ""

    await fs.writeFile(filePath + ".module.css", fileComponentStyleContent, (err) => {
       if (err)  {
           console.error(err)
           return {}
       }
       console.log(`Generated file: ${filePath}.module.css`)
    })

    return {
        author: author,
        name: componentName,
        description: componentDescription,
        filePath: filePath + ".js",
        at: timeStamp,
    }
}

async function WriteAlertBoxesDataFile(componentInfo) {
    let dataFilePath = "./data/alert_boxes.json"

    let dataJSON = fs.readFileSync(dataFilePath, {encoding: "utf8"})
    let fileJSON = JSON.parse(dataJSON)
    fileJSON.push({
        author: componentInfo.author,
        componentPath: componentInfo.filePath,
        componentName: componentInfo.name,
        componentDescription: componentInfo.description,
    })

    fs.writeFileSync(dataFilePath, JSON.stringify(fileJSON))
    return fileJSON
}

async function WriteAlertBoxesModuleFile(alertBoxesJSON) {
    let importHeaderLine = (componentName, filePath) => {
       return `import ${componentName} from "${filePath.replace("src/", "")}"\n`
    }
    let moduleExports = (componentName) => {
        return `${componentName}: ${componentName},\n`
    }
    let importHeader = ""
    let objectExport = ""
    let componentsDetail = []
    for (let i = 0; i < alertBoxesJSON.length; i++) {
        let data = alertBoxesJSON[i]
        importHeader += importHeaderLine(data.componentName, data.componentPath)
        objectExport += moduleExports(data.componentName)
        componentsDetail.push(data)
    }

    let fileContent = `
// Note: This file was generated automatically. Do not change or modify its content.
${importHeader}
export const AlertBoxesDetails = ${JSON.stringify(componentsDetail)}
export const AlertBoxes = {\n${objectExport}}
    `
    fs.writeFileSync("./src/AlertBoxes.js", fileContent)
}

(async function () {
    const response = await prompts(questions);

    // Capitalize the first letter
    let componentName = response.componentName
    componentName = componentName.charAt(0).toUpperCase() + componentName.slice(1)

    let componentInfo = await WriteAlertBoxComponentFiles(response.username, componentName, response.componentDescription)
    let alertBoxesJSON = await WriteAlertBoxesDataFile(componentInfo)
    await WriteAlertBoxesModuleFile(alertBoxesJSON)
})()
