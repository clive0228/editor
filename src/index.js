import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Megadraft from './Megadraft';
import {Editor, EditorState} from 'draft-js';

import './styles/megadraft.scss';
 
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);