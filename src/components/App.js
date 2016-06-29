import React from 'react';
import Megadraft from '../Megadraft';
import {Editor, EditorState} from 'draft-js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = this.onChange.bind(this);
    }

    onChange(editorState) {
        this.setState({editorState});
    }

    render() {
        return (
            <Megadraft
                editorState={this.state.editorState}
                onChange={this.onChange}
            />
        );
    }
}

export default App;