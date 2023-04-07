import React, {useState} from 'react';
import Preview from './Preview.js';
import photo from './photo.avif'
import './headerStyles.css'

const initialText = `# this is an h1 header 
## this is a subheading 
this is a link: [link](https://www.freecodecamp.org)

Heres some code, \`<div><div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == \'\`\`\`\' && lastLine == \'\`\`\`\') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!

or _italic_.

Or... wait for it... **_both!_**

And feel free to go crazy ~~crossing stuff out~~.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.

> "This is a blockquote.

> It can span multiple lines.

> - You can even add lists to it."

you can also add pictures:
\n![alt text](${photo})
`

function TextEditor() {
    const [text, setText] = useState(initialText);

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const textEditorstyle = {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '90vw',
        height: '100vh',
        paddingTop: '10px'
    };

    const h2DivStyle = {
        width: '70vw',
        padding: '5px 10px'
    };

    const h2Style = {
        margin: '0px'
    };

    const textAreaStyle = {
        flex: '1',
        padding: '10px',
        fontSize: '16px',
        overflow: 'auto',
        minHeight: '250px',
        width: '70vw',
        resize: 'vertical',
        backgroundColor: '#FFFA73'
    };

    return (
        <div style={textEditorstyle} >
            <div className="h2Div" style={h2DivStyle}>
                <h2 style={h2Style}>Text Editor</h2>
            </div>
            <div>
                <textarea 
                    id="editor"
                    style={textAreaStyle}
                    value={text}
                    onChange={handleChange}>
                </textarea>
            </div>
            <div>
                <Preview text={text}/>
            </div>
        </div>
    )
};

export default TextEditor;