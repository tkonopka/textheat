/** Example use of a TextHeat component **/

import TextHeat from "textheat";
import React from "react";

const example_value = "Lorem ipsum dolor sit amet, consectetur adipiscing "+
    "elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
// manually create an array of weights
const example_weight = example_value.split("").map((i) => 0.0)
for (let i=0; i<21; i++) { example_weight[0+i]=0.2 }
for (let i=0; i<5; i++) { example_weight[6+i]=0.4 }
for (let i=0; i<8; i++) { example_weight[40+i]=0.5 }
for (let i=0; i<8; i++) { example_weight[48+i]=0.7 }
for (let i=0; i<8; i++) { example_weight[56+i]=0.8 }
for (let i=0; i<8; i++) { example_weight[64+i]=0.9 }
for (let i=0; i<8; i++) { example_weight[72+i]=1 }
for (let i=0; i<17; i++) { example_weight[80+i]=0.6 }


export function ExampleStatic1() {
    return <TextHeat
        className="textheat"
        value={example_value}
        weight={example_weight}
    />
}

export function ExampleStatic2() {
    return <TextHeat
        className="textheat"
        value={example_value}
        weight={example_weight}
        colors={["#ffffff", "#8888ff"]}
    />
}

export function ExampleStatic3() {
    return <TextHeat
        className="textheat"
        value={example_value}
        weight={example_weight}
        colors={["#ffffff", "#ffff88", "#ff9999"]}
    />
}
