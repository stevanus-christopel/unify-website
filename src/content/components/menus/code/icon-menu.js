import React, { PureComponent } from 'react';
import Button from 'unify-react-mobile/build/Button';
import Menu from 'unify-react-mobile/build/Menu';

class ComponentDemo extends PureComponent {
  state = {
    display: false
  }
  toggleDisplay = () => {
    this.setState({
      display: !this.state.display
    })
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <Button secondary block onClick={this.toggleDisplay}>Open Icon Menu</Button>
        </div>
        <Menu display={this.state.display} items={
            [
              { key: 1, icon: 'http://sh-steve.ndvl/img/react-native/menu-icon.png', text: 'First Content Goes Here', onClick: this.toggleDisplay },
              { key: 2, icon: 'http://sh-steve.ndvl/img/react-native/menu-icon.png', text: 'Second Content Goes Here', onClick: this.toggleDisplay },
              { key: 3, icon: 'http://sh-steve.ndvl/img/react-native/menu-icon.png', text: 'Third Content Goes Here', onClick: this.toggleDisplay },
            ]
          }
          actionText="Call to Action Here"
          onClose={this.toggleDisplay}
          onAction={this.toggleDisplay}
        />
      </React.Fragment>
    )
  }
}

export default <ComponentDemo />;
