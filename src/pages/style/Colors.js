import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from 'carbon-components-react';
import PageTabs from '../../internal/PageTabs';
import MarkdownPage from '../../internal/MarkdownPage';
import ColorCard from '../../internal/ColorCard';
import ColorList from '../../data/colors.json';

class Colors extends React.Component {
  static propTypes = {
    currentPage: PropTypes.string,
  };

  renderColorCards = ColorItems =>
    Object.keys(ColorItems).map(ColorItem => {
      const ColorItemObj = ColorItems[ColorItem];
      return (
        <ColorCard
          key={ColorItem}
          name={ColorItemObj.name}
          hex={ColorItemObj.hex}
          white={ColorItemObj.white}
          width={ColorItemObj.width}
          gradient={ColorItemObj.gradient}
        />
      );
    });

  render() {
    const tabs = ['palette', 'usage'];
    let currentPage = 'palette';
    if (this.props.currentPage) {
      currentPage = this.props.currentPage;
    }

    return (
      <PageTabs tabs={tabs} currentPage={currentPage}>
        <Tab href="/style/colors/palette" label="Palette">
          <div className="page">
            <h2>Main Colors</h2>
            <div className="wrapped-list">
              {this.renderColorCards(ColorList['main-colors-cta'])}
            </div>
            <div className="wrapped-list">
              {this.renderColorCards(ColorList['main-colors-background'])}
            </div>
            <div className="wrapped-list">
              {this.renderColorCards(ColorList['main-colors-text'])}
            </div>
            <div className="wrapped-list">
              {this.renderColorCards(ColorList['main-colors-others'])}
            </div>
            <div className="wrapped-list">
              {this.renderColorCards(ColorList['main-colors-star'])}
            </div>
            
            <h2>Monochromatic Colors</h2>
            <div className="wrapped-list">
              {this.renderColorCards(ColorList['monochromatic-colors-green'])}
            </div>
            <div className="wrapped-list">
              {this.renderColorCards(ColorList['monochromatic-colors-red'])}
            </div>
            <div className="wrapped-list">
              {this.renderColorCards(ColorList['monochromatic-colors-pink'])}
            </div>
            <div className="wrapped-list">
              {this.renderColorCards(ColorList['monochromatic-colors-yellow'])}
            </div>
            <div className="wrapped-list">
              {this.renderColorCards(ColorList['monochromatic-colors-blue'])}
            </div>
          </div>
        </Tab>
        <Tab href="/style/colors/usage" label="Usage">
          <MarkdownPage
            content={require('../../content/style/colors/usage.md')}
          />
        </Tab>
      </PageTabs>
    );
  }
}

export default Colors;
