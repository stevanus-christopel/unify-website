import React from 'react';
import { NavBar } from 'unify-react-mobile';

const ComponentDemo = (
  <div>
    <NavBar inverted
      title="Text Goes Here"
      onBack="https://www.tokopedia.com"
      actionTitle="Action"
      onAction="https://www.tokopedia.com">
        <span style={{paddingRight: '16px'}} onClick={() => console.log('Do some action')}>
          Action
        </span>
    </NavBar>
  </div>
)

export default ComponentDemo;
