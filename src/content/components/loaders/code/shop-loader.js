import React, { PureComponent } from 'react';
import LoaderShop from 'unify-react-mobile/build/LoaderShop';

class ComponentDemo extends PureComponent {
  render() {
    return(
      <div className='loader-wrapper'>
        <LoaderShop />
      </div>
    )
  }
}

export default <ComponentDemo />;
