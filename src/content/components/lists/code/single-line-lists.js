import React from 'react';
import List from 'unify-react-mobile/build/List';

const ComponentDemo = (
  <List subheader="Subheader"
    items={[
      { text: "Text goes here" },
      { text: "Text goes here", icon: "https://placehold.it/100x100" },
      { text: "Text goes here", icon: "https://placehold.it/100x100", actionText: "Value" },
      { text: "Text goes here", icon: "https://placehold.it/100x100", actionText: "Value", arrow: true },
      { text: "Text goes here", actionType: "radio" },
      { text: "Text goes here", actionType: "toggle" },
      { text: "Text goes here", actionType: "checkbox", checked: true },
      { text: "Text goes here", checked: true },
      { text: "Text goes here", icon: "https://placehold.it/100x100", iconSize: '40px', textIndent: '48px'}
    ]}
  />
)

export default ComponentDemo;
