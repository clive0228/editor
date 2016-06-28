import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Megadraft from './Megadraft';
import {Editor, EditorState} from 'draft-js';
 
const rootElement = document.getElementById('root');
ReactDOM.render(<Megadraft editorState={EditorState.createEmpty()}/>, rootElement);