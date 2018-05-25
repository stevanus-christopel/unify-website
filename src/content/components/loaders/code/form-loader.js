import React, { PureComponent } from 'react';
import LoaderForm from 'unify-react-mobile/build/LoaderForm';

class ComponentDemo extends PureComponent {
  render() {
    return(
      <div className='loader-wrapper'>
        <LoaderForm />
      </div>
    )
  }
}

export default <ComponentDemo />;
