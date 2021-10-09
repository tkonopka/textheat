/** Example use of a TextHeat component **/

import TextHeat from "textheat"
import React from "react"
import TextHeatToolbar from "./toolbar"
import {sentence} from "./lorem_ipsum.json"


export default function ExampleEditable() {
    const ref = React.createRef()
    return <>
        <TextHeatToolbar target={ref}/>
        <TextHeat
            ref={ref}
            className="textheat"
            value={sentence}
            editable={true}
        />
    </>
}
