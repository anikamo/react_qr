import React from 'react';
import {
  FormInput, Button, Card, FormCheckbox, CardBody, CardFooter,
} from 'shards-react';

export const HeaderItem = ({
  item, index, changeHeader, deleteHeader,
}) => (
  <Card className="mt-3">
    <CardBody className="row pt-2 pb-3">
      <FormInput className="col-sm mt-2 mr-1" value={item.key} onChange={changeHeader(index, 'key')} placeholder="key" />
      <FormInput className="col-sm mt-2 mr-1" value={item.value} onChange={changeHeader(index, 'value')} placeholder="value" />
    </CardBody>
    <CardFooter className="d-flex justify-content-between align-items-center p-2 pl-3 pr-3">
      <FormCheckbox
        toggle
        checked={item.enabled}
        onChange={changeHeader(index, 'enabled')}
      >
        Enabled
      </FormCheckbox>
      <Button theme="danger" onClick={deleteHeader(index)}>Delete</Button>
    </CardFooter>
  </Card>
);
