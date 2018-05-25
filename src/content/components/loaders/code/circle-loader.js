import React, { PureComponent } from 'react';
import LoaderCircle from 'unify-react-mobile/build/LoaderCircle';

class ComponentDemo extends PureComponent {
  render() {
    return(
      <div className='loader-wrapper circle-loader'>
        <LoaderCircle width='48px' height='48px' marginBottom='0'/>
      </div>
    )
  }
}

export default <ComponentDemo />;
