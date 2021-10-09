/** Example use of a TextHeat component **/

import TextHeat from "textheat";
import React from "react";
import TextHeatToolbar from "./toolbar"


const example_value = "Lorem ipsum dolor sit amet, consectetur adipiscing "+
    "elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."


export default function ExampleEditable() {
    const ref = React.createRef()
    return <>
        <TextHeatToolbar target={ref}/>
        <TextHeat
            ref={ref}
            className="textheat"
            value={example_value}
            editable={true}
        />
    </>
}
