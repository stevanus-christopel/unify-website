import React, { PureComponent } from 'react';
import Ticker from 'unify-react-mobile/build/Ticker';

class ComponentDemo extends PureComponent {
  handleClose = (e) => {
    e.target.parentNode.remove();
  }

  render() {
    return(
      <div>
        <Ticker items={
            [
              { text: 'Type information with approx. 80 CHARACTER, for more or another direction 1.', action: 'Text Link', actionLink: '#' }
            ]
          } 
          indexActive={0} />
      </div>
    )
  }
}

export default <ComponentDemo />;