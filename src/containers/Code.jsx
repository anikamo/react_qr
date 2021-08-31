import React, { useState, useEffect } from 'react';
import {
  Button, Card, CardBody, CardFooter,
} from 'shards-react';
import JSONInput from 'react-json-editor-ajrm';

export const Code = ({ value, setValue }) => {
  const [text, setText] = useState({});

  useEffect(() => {
    setText(value);
  }, [value]);

  return (
    <Card className="w-100">
      <CardBody>
        <JSONInput
          width="100%"
          className="w-100"
          theme="dark_vscode_tribute"
          placeholder={text}
          // colors={darktheme}
          onBlur={(r) => setText(r.jsObject)}
          height="550px"
        />
      </CardBody>
      <CardFooter className="pt-0">
        <Button onClick={() => setValue(text)} theme="primary" className="mt-4" size="lg">Generate</Button>
      </CardFooter>
    </Card>
  );
};
