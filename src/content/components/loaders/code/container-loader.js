import React, { PureComponent } from 'react';
import LoaderContainer from 'unify-react-mobile/build/LoaderContainer';

class ComponentDemo extends PureComponent {
  render() {
    return(
      <div className='loader-wrapper'>
        <LoaderContainer />
      </div>
    )
  }
}

export default <ComponentDemo />;
