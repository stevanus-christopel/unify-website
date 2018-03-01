import React, { PureComponent } from 'react';
import { Tab } from 'unify-react-mobile';

class ComponentDemo extends PureComponent {
  state = {
    indexActiveTabs: 0
  }
  handleChangeTab = (event, item) => {
    this.setState({indexActiveTabs: item.key});
  }
  render() {
    return (
      <Tab primary
        items={[
          { key: 0, text: "HOME" },
          { key: 1, text: "FEED" },
          { key: 2, text: "FAVORIT" }
        ]}
        indexActive={this.state.indexActiveTabs}
        onItemClick={this.handleChangeTab}
      />
    )
  }
}

export default <ComponentDemo />;
