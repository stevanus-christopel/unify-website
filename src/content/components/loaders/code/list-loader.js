import React, { PureComponent } from 'react';
import LoaderList from 'unify-react-mobile/build/LoaderList';

class ComponentDemo extends PureComponent {
  render() {
    return(
      <div className='loader-wrapper'>
        <LoaderList />
      </div>
    )
  }
}

export default <ComponentDemo />;
