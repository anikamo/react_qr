import React from 'react';
import {
  Form as FormShards, FormInput, Button, Card, Row,
} from 'shards-react';
import { HeaderItem } from '../components/HeaderItem';
import { useFrom } from '../hooks/useForm';

const Form = ({ value, setValue }) => {
  const {
    state, changeUrl, changeHeader, addHeader, deleteHeader,
  } = useFrom(value);

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue(state);
  };

  return (
    <FormShards onSubmit={handleSubmit} className="w-100">
      <Card className="p-3">
        <label>URL</label>
        <FormInput value={state.url} onChange={changeUrl} id="#url" placeholder="url" />
      </Card>

      <Card className="p-3 mt-4">
        <Row className="d-flex justify-content-between align-items-center ml-1 mr-1">
          <p>Headers:</p>
          <Button size="sm" theme="info" onClick={addHeader}>Add header</Button>
        </Row>

        {state.headers.map((item, index) => (
          <HeaderItem
            key={`key_${index + 1}`}
            item={item}
            index={index}
            changeHeader={changeHeader}
            deleteHeader={deleteHeader}
          />
        ))}
      </Card>

      <Button theme="primary" className="mt-4" size="lg">Generate</Button>
    </FormShards>
  );
};

export default Form;
