import React from 'react';
import { Card, List } from 'unify-react-mobile';

const ComponentDemo = (
  <Card subheader='Card Subheader'>
    <List subheader='List Subheader'
      items={[
        { text: "Text goes here" },
        { text: "Text goes here" },
      ]} 
    />
  </Card>
)

export default ComponentDemo;
