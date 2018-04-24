import React, { PureComponent } from 'react';
import Tab from 'unify-react-mobile/build/Tab';
import TabContent from 'unify-react-mobile/build/TabContent';

class ComponentDemo extends PureComponent {
  state = {
    indexActiveTabs: 0
  }
  handleChangeTab = (event, props) => {
    this.setState({indexActiveTabs: props.index});
  }
  render() {
    return (
      <Tab secondary
        items={[
          { key: 0, text: "Inbox", count: 3 },
          { key: 1, text: "Sent" },
          { key: 2, text: "Trash" }
        ]}
        indexActive={this.state.indexActiveTabs}
        onItemClick={this.handleChangeTab} />
    )
  }
}

export default <ComponentDemo />;
