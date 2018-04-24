import React, { PureComponent } from 'react';
import Button from 'unify-react-mobile/build/Button';

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
      <div className='unify-btn-container'>
        <Button floating primary
          loading={this.state.loading}
          onClick={this.toggleLoading}>
          Floating Button
        </Button>
      </div>
    )
  }
}

export default <ComponentDemo />;
