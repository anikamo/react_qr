import React, { useState, useEffect } from 'react';
import QRCodeLib from 'qrcode.react';

export const QRCode = ({ value = '' }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    try {
      setText(JSON.stringify(value));
    } catch (error) {
      alert(error.message);
    }
  }, [value]);
  return (
    <QRCodeLib
      id="canvas"
      className="mt-2 ml-4 mb-4"
      size={380}
      value={text}
      level="L"
    />
  );
};
