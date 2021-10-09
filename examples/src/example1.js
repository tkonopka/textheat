/** Example use of a TextHeat component **/

import TextHeat from "textheat";
import React from "react";
import {sentence} from "./lorem_ipsum.json"

// manually create an array of weights
const weight = sentence.split("").map((i) => 0.0)
for (let i=0; i<21; i++) { weight[0+i]=0.2 }
for (let i=0; i<5; i++) { weight[6+i]=0.4 }
for (let i=0; i<8; i++) { weight[40+i]=0.5 }
for (let i=0; i<8; i++) { weight[48+i]=0.7 }
for (let i=0; i<8; i++) { weight[56+i]=0.8 }
for (let i=0; i<8; i++) { weight[64+i]=0.9 }
for (let i=0; i<8; i++) { weight[72+i]=1 }
for (let i=0; i<17; i++) { weight[80+i]=0.6 }


export function ExampleStatic1() {
    return <TextHeat
        className="textheat"
        value={sentence}
        weight={weight}
    />
}

export function ExampleStatic2() {
    return <TextHeat
        className="textheat"
        value={sentence}
        weight={weight}
        colors={["#ffffff", "#8888ff"]}
    />
}

export function ExampleStatic3() {
    return <TextHeat
        className="textheat"
        value={sentence}
        weight={weight}
        colors={["#ffffff", "#ffff88", "#ff9999"]}
    />
}
