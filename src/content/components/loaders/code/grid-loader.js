import React, { PureComponent } from 'react';
import LoaderGrid from 'unify-react-mobile/build/LoaderGrid';

class ComponentDemo extends PureComponent {
  render() {
    return(
      <div className='loader-wrapper'>
        <LoaderGrid />
      </div>
    )
  }
}

export default <ComponentDemo />;
