import React, { PureComponent } from 'react';
import NavBar from 'unify-react-mobile/build/NavBar';
import Tab from 'unify-react-mobile/build/Tab';

class ComponentDemo extends PureComponent {
  state = {
    indexActiveTabs: 0
  }
  handleChangeTab = (event, props) => {
    this.setState({indexActiveTabs: props.index});
  }
  render() {
    return (
      <div style={{width: '460px'}}>
          <NavBar inverted
              title="Text Goes Here"
              onBack="https://www.tokopedia.com"
              shadow={false}
          />

      <Tab secondary
        items={[
          { key: 0, text: "Inbox" },
          { key: 1, text: "Sent" },
          { key: 2, text: "Trash" }
        ]}
        indexActive={this.state.indexActiveTabs}
        onItemClick={this.handleChangeTab} />

      </div>
    )
  }
}

export default <ComponentDemo />;
