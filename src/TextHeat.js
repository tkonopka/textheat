import React, {useState} from 'react';
import './TextHeat.css';
import {colorArray} from "./colors"
const { forwardRef, useImperativeHandle } = React;


/** force a number into the unit interval [0, 1] **/
const unit_interval = (v) => {
    return Math.min(1, Math.max(0, Math.round(v*1000)/1000))
}


/** concatenate neighboring segments with the same values **/
function joinSegments(values, weights) {
    const new_values = [values[0]], new_weights = [weights[0]]
    for (let i=1; i<weights.length; i++) {
        if (weights[i] === weights[i-1]) {
            new_values[new_values.length-1] += values[i]
        } else {
            new_values.push(values[i])
            new_weights.push(weights[i])
        }
    }
    return [new_values, new_weights]
}


// modified from an answer on stackoverflow
// https://stackoverflow.com/questions/48810664/get-click-range-relative-to-parent-element
function getOffsetRelativeTo(parentElement, currentNode) {
    let result = 0, prevSibling, nodeContent;
    if (currentNode === parentElement) return 0
    if (!parentElement.contains(currentNode)) return -1
    while (prevSibling = (prevSibling  || currentNode).previousSibling) {
        nodeContent = prevSibling.innerText || prevSibling.nodeValue || "";
        result += nodeContent.length;
    }
    return result + getOffsetRelativeTo(parentElement, currentNode.parentNode);
}


/**
 * traverse an element and get an array with [0]=text and [1]=colors **/
function getContent(element, result=[[],[]]) {
    const children = Array.from(element.childNodes)
    for (let child of children) {
        if (child.hasChildNodes()) {
            result = getContent(child, result)
        } else {
            result[0].push(child.textContent)
            result[1].push(unit_interval(parseFloat(child.parentElement.getAttribute("data-weight"))))
        }
    }
    return result
}


function changeContent(data, start, end, v, increment=false) {
    const old_values = data[0], old_weights = data[1]
    let pos = 0, i = 0, new_values = [], new_weights = []
    while (i < old_values.length) {
        let i_value = old_values[i], i_weight = old_weights[i]
        let i_len = i_value.length
        if (pos + i_len <= start || pos >= end) {
            // segments before selection, or after section
            new_values.push(i_value)
            new_weights.push(i_weight)
        } else if (pos === start && pos+i_len===end) {
            // special case: the selection overlaps the segment exactly
            new_values.push(i_value)
            new_weights.push(increment ? i_weight+v : v)
        } else {
            // there is some nontrivial overlap
            if (pos < start) {
                new_values.push(i_value.slice(0, start-pos))
                new_weights.push(i_weight)
                new_values.push(i_value.slice(start-pos, end-pos))
                new_weights.push(increment ? i_weight+v : v)
            } else {
                new_values.push(i_value.slice(0, end-pos))
                new_weights.push(increment ? i_weight+v : v)
            }
            if (pos+i_len > end) {
                new_values.push(i_value.slice(end - pos))
                new_weights.push(i_weight)
            }
        }
        pos += i_len
        i += 1
    }
    return joinSegments(new_values, new_weights.map((x) => unit_interval(x)))
}


const TextHeat = forwardRef((props, ref) => {
    let {value, weight, colors, editable} = props
    // inputs can:
    // - compatible arrays of value/weight,
    // - a single value string
    // - a single value string with an array of weights (one float per character)
    if (!value) value = [""]
    if (typeof value === "string") {
        if (weight && weight.length === value.length) {
            const breakpoint = weight.map((w, i) => {
                if (i === 0 || w != weight[i - 1]) return i
            }).filter((i) => i >= 0)
            value = breakpoint.map((b, i) => value.slice(b, breakpoint[i+1]))
            weight = breakpoint.map((b, i) => weight[b])
        } else {
            value = [value]
            weight = [0.0]
        }
    }
    const [data, setData] = useState([value, weight])
    const color_array = typeof colors === "undefined" ?
        colorArray(["#ffffff", "#ff8888"], 128) :
        colorArray(colors, 128)
    const mainRef = React.createRef()
    const segments = data[0].map((x, i) => {
        let color = color_array[Math.round(data[1][i]*127)]
        return <span key={i} data-weight={data[1][i]} style={{backgroundColor: color}}>{x}</span>
    })

    /**
     * handle copy-paste to only insert plain text (without spans and css)
     * This is important. Without it, after copy-paste in an editable div,
     * updating the weights can lead to strange muddled-up text in the div.
     * **/
    const handlePaste = (e) => {
        e.preventDefault()
        let text = (e.originalEvent || e).clipboardData.getData('text/plain')
        document.execCommand("insertHTML", false, text)
    }
    // get start and end coordinates for a selection
    const getSelection = () => {
        const el = mainRef.current
        const selection = document.getSelection()
        if (!el.contains(selection.anchorNode)) return [-1, -1]
        let range = selection.getRangeAt(0)
        let start = getOffsetRelativeTo(el, range.startContainer) + range.startOffset
        let end = getOffsetRelativeTo(el, range.endContainer) + range.endOffset
        return [start, end]
    }

    // functions that can be called from outside the component, using refs
    useImperativeHandle(ref, () => ({
        getContent: () => {
            return JSON.parse(JSON.stringify(data))
        },
        incrementWeight: (v, start, end) => {
            if (start===undefined || end===undefined) {
                [start, end] = getSelection()
            }
            if (end === start) return
            const content = getContent(mainRef.current)
            setData(changeContent(content, start, end, v, true))
        },
        setWeight: (v, start, end) => {
            if (start===undefined || end===undefined) {
                [start, end] = getSelection()
            }
            if (end === start) return
            const content = getContent(mainRef.current)
            setData(changeContent(content, start, end, v, false))
        },
        refresh: () => {
            setData(getContent(mainRef.current))
        }
    }));

    return (
        <div
            ref={mainRef}
            className={"textheat"}
            contentEditable={editable}
            suppressContentEditableWarning={true}
            onPaste={handlePaste}
            role={"textbox"}
        >
            {segments}
        </div>
    )
})

export default TextHeat;

