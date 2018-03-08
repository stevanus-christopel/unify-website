import React, { PureComponent } from 'react';
import { Ticker } from 'unify-react-mobile';

class ComponentDemo extends PureComponent {
  handleClose = (e) => {
    e.target.parentNode.remove();
  }

  render() {
    return(
      <div>
        <Ticker items={
            [
              { text: 'Type information with approx. 80 CHARACTER, for more or another direction 1.', action: 'Text Link', actionLink: '#' },
              { text: 'Type information with approx. 80 CHARACTER, for more or another direction 2.', action: 'Text Link', actionLink: '#' },
              { text: 'Type information with approx. 80 CHARACTER, for more or another direction 3.', action: 'Text Link', actionLink: '#' }
            ]
          } 
          indexActive={0}
          onClose={this.handleClose}
        />
    </div>
    )
  }
}

export default <ComponentDemo />;