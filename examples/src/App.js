import './App.css';
import React from "react";
import Container from '@mui/material/Container';
import {ExampleStatic1, ExampleStatic2, ExampleStatic3} from "./example1"
import ExampleAdjustable from "./example2"
import ExampleEditable from "./example3"


function SectionIntro() {
    return <>
        <h1>Examples with <code>TextHeat</code> components</h1>
        <p>
            <code>TextHeat</code> components display text and associated weights in a heatmap.
        </p>
    </>
}

function LinkCode({filenames}) {
    const base_url = "https://github.com/tkonopka/textheat/blob/main"
    const links = filenames.map((f) => {
        const url = base_url + "/examples/src/" + f
        return <a className="link_code" key={f} href={url} target={"_blank"} rel={"noreferrer"}>{f}</a>
    })
    return <p className={"link_code"}>
        Source code:&nbsp; {links}
    </p>
}


function SectionStatic() {
    return (
        <>
            <h2>Static</h2>
            <p>
                Static heatmaps communicate the varying weights associated with parts of a body of text.
            </p>
            <p>
                The default color scale uses shades of red, but the colors can be adjusted.
            </p>
            <ExampleStatic1 />
            <ExampleStatic2 />
            <ExampleStatic3 />
            <LinkCode filenames={["example1.js"]}/>
        </>
    )
}

function SectionAdjustable() {
    return (<>
        <h2>Adjustable weights</h2>
        <p>
            The component can adjust the weights (colors) for text fragments.
            This functionality can be used to create annotations.
        </p>
        <p>
            Below, select some text in the box. Then use the paint tool in the
            toolbar to give the selection a certain weight (color). Or use the
            touch-up tool to increase or decrease the weight by a small amount.
        </p>
        <ExampleAdjustable />
        <p>
            (Note that the toolbar is not part of the component. The above
            implementation uses <a href={"https://www.mui.com"}>MUI</a> components.)
        </p>
        <LinkCode filenames={["example2.js"]}/>
    </>)
}

function SectionEditable() {
    return (<>
        <h2>Adjustable and editable</h2>
        <p>
            The component can be editable. Click inside the box and start typing new text.
        </p>
        <ExampleEditable />
        <LinkCode filenames={["example3.js"]}/>
    </>)
}


function SectionApi() {
    const simple = "<TextHeat value='Lorem ipsum dolor ...' />"
    const weighted = "<TextHeat\n    value=['Lorem ', 'ipsum ', 'dolor ...']\n    weight=[0.2, 0.4, 0.2]\n/>"
    const ref = "// before rendering, create a ref object\nconst ref = React.createRef()\n\n"
    const with_ref = "// pass the reference to TextHeat \n"+
        "<TextHeat\n    ref={ref}\n    value='Lorem impsum dolor ...'\n/>\n"
    const later = "\n" +
        "// fetch text and weights from the component\nref.current.getContent()\n" +
        "// increment weights on highlighted section\nref.current.changeSelected(0.5, true)\n" +
        "// set weight on highlighted section to a value\nref.current.changeSelected(0.5, false)"
    return <>
        <h2>Api</h2>
        <p>
            Consider the example text '<i>Lorem ipsum dolor ...</i>'.
            If there are no weights associated with this text, then a basic
            <code>TextHeat</code> component an be constructed by setting only
            the <code>value</code> property.
        </p>
        <pre>
            <code>{simple}</code>
        </pre>
        <p>
            Suppose we have weights that associate a value of 0.2 with the words '<i>Lorem</i>' and '<i>dolor ...</i>',
            but a higher value of 0.4 to the word '<i>ipsum</i>'. This data should be prepared into segments and
            then provided as <code>value</code> and <code>weight</code> props.
        </p>
        <pre><code>{weighted}</code></pre>
        <p>
            To adjust the content of the box, it must be created with a React ref object.
        </p>
        <pre><code>{ref}{with_ref}{later}</code></pre>
        <p>
            The above snippets only highlight some of the key steps. See the source code
            of the examples for further details.
        </p>
        <LinkCode filenames={["example1.js", "example2.js", "example3.js"]}/>
    </>
}


function App() {
    return (
        <Container maxWidth={"md"} className="App">
            <SectionIntro />
            <SectionStatic />
            <SectionAdjustable />
            <SectionEditable />
            <SectionApi />
        </Container>
    );
}


export default App;
