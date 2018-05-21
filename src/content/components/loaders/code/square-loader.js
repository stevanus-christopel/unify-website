import React, { PureComponent } from 'react';
import LoaderSquare from 'unify-react-mobile/build/LoaderSquare';

class ComponentDemo extends PureComponent {
  render() {
    return(
      <LoaderSquare width='100%' paddingBottom='100%' marginBottom='16px'/>
    )
  }
}

export default <ComponentDemo />;
