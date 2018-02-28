import React, { PureComponent } from 'react';
import { Button } from 'unify-react-mobile';

import image from '../images/mail.svg'

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
              <Button secondary small>Secondary Small</Button>
              &nbsp;&nbsp;
              <Button secondary medium>Secondary Medium</Button>
              &nbsp;&nbsp;
              <Button secondary large>Secondary Large</Button>
          </div>
          <br />
          <Button secondary block>Secondary Block</Button>
          <br />
          <Button secondary block
            loading={this.state.loading}
            onClick={this.toggleLoading}>Click to show loading</Button>
          <br />
          <Button secondary block image={image}>Secondary Block with Image</Button>
      </div>
    )
  }
}

export default <ComponentDemo />;
