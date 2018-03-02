import React, { PureComponent } from 'react';
import { Button, Picker } from 'unify-react-mobile';

class ComponentDemo extends PureComponent {
  state = {
    display: false,
    firstDate: null,
    secondDate: null
  }

  toggleDisplay = () => {
    this.setState({
      display: !this.state.display,
    })
  }

  updateFirstDate = (value) => {
    this.setState({
      firstDate: value
    });
  }

  updateSecondDate = (value) => {
    this.setState({
      secondDate: value
    })
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Button secondary block onClick={this.toggleDisplay}>Open Normal Picker</Button>
        </div>
        <Picker title='Title of Information'
          root={document.getElementById("root")}
          infoDate={[
            {
              date: new Date(2018, 2, 17),
              text: 'Hari Raya Nyepi'
            },
            {
              date: new Date(2018, 2, 30),
              text: 'Wafat Yesus Kristus'
            },
          ]}
          firstDate={this.state.firstDate}
          secondDate={this.state.secondDate}
          onClick={this.updateFirstDate}
          onClickDouble={this.updateSecondDate}
          onClose={this.toggleDisplay}
          display={this.state.display}
        />
      </React.Fragment>
    )
  }
}

export default <ComponentDemo />;
