import React, { PureComponent } from 'react';
import Button from 'unify-react-mobile/build/Button';

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
              <Button primary small>Primary Small</Button>
              &nbsp;&nbsp;
              <Button primary medium>Primary Medium</Button>
              &nbsp;&nbsp;
              <Button primary large>Primary Large</Button>
          </div>
          <br />
          <Button primary block>Primary Block</Button>
          <br />
          <Button primary block
            loading={this.state.loading}
            onClick={this.toggleLoading}>Click to show loading</Button>
          <br />
          <Button primary block image={image}>Primary Block with Image</Button>
      </div>
    )
  }
}

export default <ComponentDemo />;
