import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import './headerStyles.css'

function Preview(props) {
  const { text } = props;

  const h2Style = {
    margin: '0px'
  };

  const previewStyle = {
    border: '1px solid black',
    width: '90vw',
    minHeight: '400px',
    overflow: 'auto',
    resize: 'vertical',
    backgroundColor: '#FFFA73'
  };

  return (
    <div>
        <div className="h2Div">
            <h2 style={h2Style}>Previewer</h2>
        </div>
        <div id="preview" style={previewStyle}>
            <ReactMarkdown remarkPlugins={[gfm]}>{text}</ReactMarkdown>
        </div>        
    </div>
  );
};

export default Preview;
