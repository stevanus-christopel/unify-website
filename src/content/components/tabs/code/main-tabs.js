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
      <Tab primary
        items={[
          { key: 0, text: "HOME" },
          { key: 1, text: "FEED" },
          { key: 2, text: "FAVORIT" }
        ]}
        indexActive={this.state.indexActiveTabs}
        onItemClick={this.handleChangeTab} />
    )
  }
}

export default <ComponentDemo />;
