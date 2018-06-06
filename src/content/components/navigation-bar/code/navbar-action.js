import React from 'react';
import NavBar from 'unify-react-mobile/build/NavBar';

const ComponentDemo = (
  <div style={{width: '320px'}}>
    <NavBar inverted
      title="Text Goes Here"
      onBack="https://www.tokopedia.com"
      onAction="https://www.tokopedia.com">
        <span style={{paddingRight: '16px', color: '#42B549'}} onClick={() => console.log('Do some action')}>
          Action
        </span>
    </NavBar>
  </div>
)

export default ComponentDemo;
