import React from 'react';
import { TextField } from 'unify-react-mobile';

const ComponentDemo = (
  <div style={{ width: '320px' }}>
    <TextField label="Text Field" />
    <TextField label="Disabled Text Field" disabled />
    <TextField label="Password Text Field" type="password" />
    <TextField label="Label" placeholder="Placeholder" />
    <TextField label="Counter Text Field" counter={20} />
    <TextField label="Label" message="This is info message." />
    <TextField label="Label" message="This is error message." error />
  </div>
)

export default ComponentDemo;
