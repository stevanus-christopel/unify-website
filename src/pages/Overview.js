import React from 'react';
import { Link } from 'react-router';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { 
  HomeHeaderWhite, 
  HomeHeaderGreen,
  HomeHeaderPurple,
  HomeHeaderYellow 
} from '../internal/HomeHeader';
import Letter from '../internal/Letters';
import LiquidButton from '../internal/LiquidButton';

const duration = 2000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered:  { opacity: 1 },
};

class Overview extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      headerPage: 3,
      letterClasses: "overview__letter"
    }
  }

  componentDidMount() {
    document.title = 'Tokopedia Unify Design System';
    const liquidButtons = document.querySelectorAll('.btn--liquid')
    for (let button of liquidButtons) {
      new LiquidButton(button)
    }
  }

  changeHeader = (page) => {
    this.setState({
      headerPage: page
    });
  }

  render() {
    const icon1 = require('../content/overview/images/icon-home-1.svg');
    const icon2 = require('../content/overview/images/icon-home-2.svg');
    const icon3 = require('../content/overview/images/icon-home-3.svg');

    return (
      <div>
        <div className="overview-page__top">
          <TransitionGroup>
            <CSSTransition key={this.state.headerPage} classNames="home-header"
            timeout={{enter: 2000, exit: 2000}}>
              {
                this.state.headerPage === 1 ?
                <HomeHeaderPurple /> :
                this.state.headerPage === 2 ?
                <HomeHeaderYellow /> :
                this.state.headerPage === 3 ?
                <HomeHeaderWhite /> :
                <HomeHeaderGreen />
              }
            </CSSTransition>
          </TransitionGroup>
              
          <div className="overview-page__title">
              <Letter headerPage={this.state.headerPage} letter="U" onClick={() => this.changeHeader(1)}  />
              <Letter headerPage={this.state.headerPage} letter="N" onClick={() => this.changeHeader(2)}  />
              <Letter headerPage={this.state.headerPage} letter="I" onClick={() => this.changeHeader(3)}  />
              <Letter headerPage={this.state.headerPage} letter="F" onClick={() => this.changeHeader(4)}  />
              <Letter headerPage={this.state.headerPage} letter="Y" onClick={() => this.changeHeader(1)}  />
          </div>
        </div>

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
                  to="introduction"
                >
                  <button className="btn--liquid"
                  data-placeholder="Introduction"
                  data-textstyle="fill: #FFFFFF; font-size: 17px;"
                  data-basecolor="#FFC107"
                  data-gradient="#42B549, #42B549">
                    <svg></svg>
                  </button>
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
                    href="https://drive.google.com/drive/folders/0AFAID-GJ_Se0Uk9PVA"
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
                    href="https://github.com/tokopedia/unify-react-mobile"
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
