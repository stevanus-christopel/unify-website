import React from 'react';
import { Chip } from 'unify-react-mobile';

const ComponentDemo = (
  <div>
    <Chip>Normal Chip</Chip>
    <Chip active>Active Chip</Chip>
    <br />
    <Chip onClose>Chip with onClose props</Chip>
    <br />
    <Chip>Chips with very very long text</Chip>
  </div>
)

export default ComponentDemo;
