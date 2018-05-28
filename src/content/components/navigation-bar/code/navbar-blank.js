import React from 'react';
import NavBar from 'unify-react-mobile/build/NavBar';

const ComponentDemo = (
  <div style={{width: '320px'}}>
        <NavBar inverted
            onBack="https://www.tokopedia.com"
            actionTitle="Action"
            onAction="https://www.tokopedia.com"
        />
    </div>
)

export default ComponentDemo;
