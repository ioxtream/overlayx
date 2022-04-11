# AlertBox Component

> Don't know how to start contributing with new AlertBox component? See /CONTRIBUTING.md

After created your files (`.js` and `.css`) using the generator, you have a React component file like this:
```javascript

/*
    Notes
      - Do not change or modify this comment block.
      - Do not change name of exported component class (Universe).
     
    File: 1648651912218_universe_of_k4fer74.js
    Name: Universe
    Description: Themed with universe colors
    Author: https://github.com/k4fer74
     
    Universe renders a React IOXtream AlertBox Component.
*/

import React from "react"
import Styles from "./1648651912218_universe_of_k4fer74.module.css"

export default function Universe(props) {
    return (
        <div>
            <h2>{props.donate.giver_username}</h2>
            <h3>{props.donate.giver_message}</h3>
        </div>
    )
}
```

### `props.donate` structure:

```json
{
  "animated_gif_url": "",
  "username": "MrBot",
  "message": "Hey, this is really cool :)",
  "currency": "SAT",
  "amount": "3500"
}
```