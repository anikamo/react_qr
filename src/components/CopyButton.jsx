import React from 'react';
import {
  Button,
} from 'shards-react';

export const CopyButton = ({ value }) => (
  <Button
    onClick={() => {
      navigator.permissions.query({ name: 'clipboard-write' }).then((result) => {
        if (result.state === 'granted' || result.state === 'prompt') {
          navigator.clipboard.writeText(JSON.stringify(value));
        }
      });
    }}
    theme="info"
    className="mt-4 ml-4"
    size="md"
  >
    Copy to clipboard (JSON)
  </Button>
);
