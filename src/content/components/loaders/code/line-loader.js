import React, { PureComponent } from 'react';
import LoaderLine from 'unify-react-mobile/build/LoaderLine';

class ComponentDemo extends PureComponent {
  render() {
    return(
      <div className='loader-wrapper line-loader'>
        <LoaderLine width='100%' height='8px' marginBottom='16px'/>
      </div>
    )
  }
}

export default <ComponentDemo />;
