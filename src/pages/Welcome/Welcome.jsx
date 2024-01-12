import React from 'react';

import { useState } from 'react';

import Button from 'components/Button';

const Welcome = () => {
  const [disabled, setDisabled] = useState(true);

  return (
    <div>
      <Button>Primary</Button>

      <Button secondary>Secondary</Button>

      <Button disabled={disabled}>Disabled</Button>

      <Button
        onClick={() => {
          setDisabled(prev => !prev);
        }}
      >
        onClick
      </Button>
    </div>
  );
};

export default Welcome;
