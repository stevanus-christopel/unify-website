import React from 'react';
import { Tab } from 'unify-react-mobile';

const ComponentDemo = (
  <Tab primary
    items={[
      { text: "HOME", onClick: function(){} },
      { text: "FEED", onClick: function(){} },
      { text: "FAVORIT", onClick: function(){} }
    ]}
    indexActive={0} />
)

export default ComponentDemo;
