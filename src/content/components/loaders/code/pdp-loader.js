import React, { PureComponent } from 'react';
import LoaderPDP from 'unify-react-mobile/build/LoaderPDP';

class ComponentDemo extends PureComponent {
  render() {
    return(
      <div className='loader-wrapper'>
        <LoaderPDP />
      </div>
    )
  }
}

export default <ComponentDemo />;
