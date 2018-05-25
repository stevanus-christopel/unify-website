import React, { PureComponent } from 'react';
import LoaderHome from 'unify-react-mobile/build/LoaderHome';

class ComponentDemo extends PureComponent {
  render() {
    return(
      <div className='loader-wrapper'>
        <LoaderHome />
      </div>
    )
  }
}

export default <ComponentDemo />;
