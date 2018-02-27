import React from 'react';
import { List } from 'unify-react-mobile';

const ComponentDemo = (
  <List subheader="Subheader"
    items={[
      { text: "Text goes here", description: "Description goes here" },
      { text: "Text goes here", description: "Description goes here", icon: "https://placehold.it/100x100" },
      { text: "Text goes here", description: "Description goes here", icon: "https://placehold.it/100x100", actionText: "Value" },
      { text: "Text goes here", description: "Description goes here", icon: "https://placehold.it/100x100", actionText: "Value", arrow: true },
    ]}
  />
)

export default ComponentDemo;
