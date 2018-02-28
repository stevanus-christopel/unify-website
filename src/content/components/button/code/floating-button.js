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
      <Button floating primary
        loading={this.state.loading}
        onClick={this.toggleLoading}>
        Floating Button
      </Button>
    )
  }
}

export default <ComponentDemo />;
