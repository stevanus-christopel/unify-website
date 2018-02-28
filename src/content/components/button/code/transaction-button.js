import React, { PureComponent } from 'react';
import { Button } from 'unify-react-mobile';

import image from '../images/social.svg'

class ComponentDemo extends PureComponent {
  state = {
    loading: false
  }
  toggleLoading = () => {
    this.setState({
      loading: !this.state.loading
    }, function() {
      setTimeout(() => {
        this.setState({
          loading: !this.state.loading
        })
      }, 2000)
    })
  }
  render() {
    return (
      <div>
          <div>
              <Button transaction small>Transaction Small</Button>
              &nbsp;&nbsp;
              <Button transaction medium>Transaction Medium</Button>
              &nbsp;&nbsp;
              <Button transaction large>Transaction Large</Button>
          </div>
          <br />
          <Button transaction block>Transaction Block</Button>
          <br />
          <Button transaction block
            loading={this.state.loading}
            onClick={this.toggleLoading}>Click to show loading</Button>
          <br />
          <Button transaction block image={image}>Transaction Block with Image</Button>
      </div>
    )
  }
}

export default <ComponentDemo />;
