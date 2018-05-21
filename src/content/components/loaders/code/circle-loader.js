import React, { PureComponent } from 'react';
import LoaderCircle from 'unify-react-mobile/build/LoaderCircle';

class ComponentDemo extends PureComponent {
  render() {
    return(
      <LoaderCircle width='48px' height='48px' marginBottom='16px'/>
    )
  }
}

export default <ComponentDemo />;
