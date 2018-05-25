import React, { PureComponent } from 'react';
import LoaderSquare from 'unify-react-mobile/build/LoaderSquare';

class ComponentDemo extends PureComponent {
  render() {
    return(
      <div className='loader-wrapper square-loader'>
        <LoaderSquare width='100%' paddingBottom='100%' marginBottom='16px'/>
      </div>
    )
  }
}

export default <ComponentDemo />;
