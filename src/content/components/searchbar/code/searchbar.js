import React, { PureComponent } from 'react';
import SearchBar from 'unify-react-mobile/build/SearchBar';

class ComponentDemo extends PureComponent {
  state = {
    searchValue: ''
  }

  handleChange = (e) => {
    this.setState({
      searchValue: e.target.value
    });
  }

  render(){
    return(
      <div className='search-wrapper'>
        <SearchBar 
          placeholder='Cari di Tokopedia'
          value={this.state.searchValue}
          onChange={this.handleChange} />
      </div>
    )
  }
}

export default <ComponentDemo />;
