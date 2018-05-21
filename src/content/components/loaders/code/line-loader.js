import React, { PureComponent } from 'react';
import LoaderLine from 'unify-react-mobile/build/LoaderLine';

class ComponentDemo extends PureComponent {
  render() {
    return(
      <LoaderLine width='100%' height='8px' marginBottom='16px'/>
    )
  }
}

export default <ComponentDemo />;
