import React, { PureComponent } from 'react';
import Button from 'unify-react-mobile/build/Button';
import BottomSheet from 'unify-react-mobile/build/BottomSheet';

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
          <Button secondary block onClick={this.toggleDisplay}>Open Normal Bottom Sheet</Button>
        </div>
        <BottomSheet title="Title of Information"
          subTitle="SubTitle of Information"
          display={this.state.display}
          onClose={this.toggleDisplay}
          actionText='Action Text'
          onActionClick={() => alert('Unify is cool')}>
            <p>This is content section.</p>
        </BottomSheet>
      </React.Fragment>
    )
  }
}

export default <ComponentDemo />;
