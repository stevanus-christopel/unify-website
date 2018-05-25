import React, { PureComponent } from 'react';
import LoaderCard from 'unify-react-mobile/build/LoaderCard';

class ComponentDemo extends PureComponent {
  render() {
    return(
      <div className='loader-wrapper'>
        <LoaderCard />
      </div>
    )
  }
}

export default <ComponentDemo />;
