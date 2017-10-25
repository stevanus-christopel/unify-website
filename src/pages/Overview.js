import React from 'react';
import { Link } from 'react-router';
import { CSSTransitionGroup } from 'react-transition-group'
import { 
  HomeHeaderWhite, 
  HomeHeaderGreen,
  HomeHeaderPurple,
  HomeHeaderYellow 
} from '../internal/HomeHeader';

class Overview extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      headerPage: 1
    }
  }

  componentDidMount() {
    document.title = 'Tokopedia Unify Design System';

    setInterval(() => {
      let nextPage = this.state.headerPage + 1;
      
      if(nextPage > 4) {
        nextPage = 1;
      }

      this.setState({
        headerPage: nextPage
      });
    }, 8000);
  }

  render() {
    const icon1 = require('../content/overview/images/icon-home-1.svg');
    const icon2 = require('../content/overview/images/icon-home-2.svg');
    const icon3 = require('../content/overview/images/icon-home-3.svg');

    return (
      <div>
        <CSSTransitionGroup
          transitionName="home-header"
          transitionEnterTimeout={2000}
          transitionLeaveTimeout={2000}>
            <div key={this.state.headerPage}>
              {
                this.state.headerPage === 1 ?
                <HomeHeaderPurple /> :
                this.state.headerPage === 2 ?
                <HomeHeaderYellow /> :
                this.state.headerPage === 3 ?
                <HomeHeaderWhite /> :
                <HomeHeaderGreen />
              }
            </div>
        </CSSTransitionGroup>

        <main id="maincontent" role="main" aria-labelledby="page-title" className="overview-page" tabIndex="-1">
          <h1 id="page-title" className="overview-page__title--aria" aria-label="UNIFY Design System">UNIFY Design System</h1>
          <div className="overview-page__content">
            <div className="overview-page__main-intro">
              <div className="overview-page__main-intro--icon">
                <img alt="Hexagon icon" src={icon1} />
              </div>
              <div className="overview-page__main-intro--content">
                <p className="overview-page__main-intro--text">As Tokopedia continues to grow, both as a product and a company, one challenge we are faced with is learning how to refine the Tokopedia brand identity and apply it cohesively to each of our products.</p>
                <p className="overview-page__main-intro--text-secondary">We created this styleguide to act as a central location where we house a live inventory of UI components, brand guidelines, brand assets, code snippets, developer guidelines and more. Anyone working on the Tokopedia product is encouraged to stay familiar with this styleguide and help ensure that it is kept up-to-date.</p>
                <Link
                  tabIndex="0"
                  className="overview-page__main-intro--link"
                  to="introduction"
                >
                  Introduction
                </Link>
              </div>
            </div>
            <div className="overview-page__tiles">
              <div className="overview-page__tile">
                <div className="overview-page__tile--icon overview-page__tile--icon-left">
                  <img alt="Tile icon 1" src={icon2} />
                </div>
                <div className="overview-page__tile--content">
                  <h2 className="overview-page__tile--heading">
                    Unify Design Kit
                  </h2>
                  <p className="overview-page__tile--text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla profecto est, quin suam vim retineat a primo ad extremum.
                  </p>
                  <a
                    href="https://github.com/carbon-design-system/carbon-design-kit"
                    className="overview-page__tile--link"
                    target="_blank"
                    onClick={() => this.handleClick('Design Kit')}
                  >
                    Download Sketch File
                  </a>
                </div>
              </div>
              <div className="overview-page__tile">
                <div className="overview-page__tile--icon overview-page__tile--icon-right">
                  <img alt="Tile icon 2" src={icon3} />
                </div>
                <div className="overview-page__tile--content">
                  <h2 className="overview-page__tile--heading">
                    Unify Component Library
                  </h2>
                  <p
                    className="overview-page__tile--text"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla profecto est, quin suam vim retineat a primo ad extremum.
                  </p>
                  <a
                    href="https://github.com/carbon-design-system/carbon-components"
                    className="overview-page__tile--link"
                    target="_blank"
                    onClick={() => this.handleClick('Developer Kit')}
                  >
                    Component GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Overview;
