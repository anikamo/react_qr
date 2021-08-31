/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import {
  Button, ButtonToolbar, ButtonGroup, Container,
} from 'shards-react';
import Form from './containers/Form';
import { QRCode } from './containers/QRCode';
import { Code } from './containers/Code';

const INITIAL_VALUE = {
  url: '',
  headers: [],
};

function App() {
  const [editor, setEditor] = useState(false);
  const [value, setValue] = useState(INITIAL_VALUE);

  return (
    <div className="app p-4">
      <Container className="w-100">
        <ButtonToolbar>
          <ButtonGroup className="mb-4">
            <Button theme={editor ? 'light' : 'dark'} onClick={() => setEditor(false)}>Form</Button>
            <Button theme={!editor ? 'light' : 'dark'} onClick={() => setEditor(true)}>Editor</Button>
          </ButtonGroup>
          <Button
            className="ml-auto mt-0 mb-4"
            theme="danger"
            onClick={() => setValue(INITIAL_VALUE)}
          >
            Reset
          </Button>
        </ButtonToolbar>
        {editor
          ? <Code value={value} setValue={setValue} />
          : <Form value={value} setValue={setValue} /> }
      </Container>
      <QRCode value={value} />

    </div>
  );
}

export default App;
