import React from 'react';
import Letter from '../internal/Letters';
import { Link } from 'react-router';

import overview_top_1 from '../content/overview/images/overview-top-1.png';
import overview_top_2 from '../content/overview/images/overview-top-2.png';
import overview_top_3 from '../content/overview/images/overview-top-3.png';
import overview_top_4 from '../content/overview/images/overview-top-4.png';
import overview_top_5 from '../content/overview/images/overview-top-5.png';
import overview_top_6 from '../content/overview/images/overview-top-6.png';
import overview_top_7 from '../content/overview/images/overview-top-7.png';
import overview_top_8 from '../content/overview/images/overview-top-8.png';

const img_top_banner_movement = 5;

const img_top_banner_1_top = -40;
const img_top_banner_1_left = -16;
var img_top_banner_1_is_hover = false;

const img_top_banner_2_top = -7;
const img_top_banner_2_left = 55;
var img_top_banner_2_is_hover = false;

const img_top_banner_3_bottom = -25;
const img_top_banner_3_right = -37;
var img_top_banner_3_is_hover = false;

const img_top_banner_7_top = 1.5;
const img_top_banner_7_left = -15;
var img_top_banner_7_is_hover = false;

const img_top_banner_8_bottom = 10;
const img_top_banner_8_left = 14;
var img_top_banner_8_is_hover = false;

const img_top_banner_9_bottom = 50;
const img_top_banner_9_right = -6;
var img_top_banner_9_is_hover = false;

class Overview extends React.Component {
  
  constructor() {
    super();
    this.handleMouseMoveTopBanner = this.handleMouseMoveTopBanner.bind(this);
    this.handleMouseLeaveTopBanner = this.handleMouseLeaveTopBanner.bind(this);
  }

  componentDidMount() {
    document.title = 'Tokopedia Unify Design System';

    this.handleMouseLeaveTopBanner();
    
    document.getElementsByClassName("overview-page__top")[0].onmousemove = this.handleMouseMoveTopBanner;
    document.getElementsByClassName("overview-page__top")[0].onmouseleave = this.handleMouseLeaveTopBanner;
    
    document.getElementsByClassName("overview-page__top-banner--image-1")[0].onmouseenter = function() {
      img_top_banner_1_is_hover = true;
    }
    document.getElementsByClassName("overview-page__top-banner--image-1")[0].onmouseleave = function() {
      img_top_banner_1_is_hover = false;
    }
    document.getElementsByClassName("overview-page__top-banner--image-2")[0].onmouseenter = function() {
      img_top_banner_2_is_hover = true;
    }
    document.getElementsByClassName("overview-page__top-banner--image-2")[0].onmouseleave = function() {
      img_top_banner_2_is_hover = false;
    }
    document.getElementsByClassName("overview-page__top-banner--image-3")[0].onmouseenter = function() {
      img_top_banner_3_is_hover = true;
    }
    document.getElementsByClassName("overview-page__top-banner--image-3")[0].onmouseleave = function() {
      img_top_banner_3_is_hover = false;
    }
    document.getElementsByClassName("overview-page__top-banner--image-7")[0].onmouseenter = function() {
      img_top_banner_7_is_hover = true;
    }
    document.getElementsByClassName("overview-page__top-banner--image-7")[0].onmouseleave = function() {
      img_top_banner_7_is_hover = false;
    }
    document.getElementsByClassName("overview-page__top-banner--image-8")[0].onmouseenter = function() {
      img_top_banner_8_is_hover = true;
    }
    document.getElementsByClassName("overview-page__top-banner--image-8")[0].onmouseleave = function() {
      img_top_banner_8_is_hover = false;
    }
    document.getElementsByClassName("overview-page__top-banner--image-9")[0].onmouseenter = function() {
      img_top_banner_9_is_hover = true;
    }
    document.getElementsByClassName("overview-page__top-banner--image-9")[0].onmouseleave = function() {
      img_top_banner_9_is_hover = false;
    }
  }
  
  handleMouseMoveTopBanner(e) {
    if(parseInt(e.y) < 
    parseInt(document.getElementsByClassName("overview-page__top-banner--image-1")[0].getBoundingClientRect().top) &&
    !img_top_banner_1_is_hover) {
      document.getElementsByClassName("overview-page__top-banner--image-1")[0].style.top = 
      (img_top_banner_1_top - img_top_banner_movement) + "%";
    } else if(parseInt(e.y) > 
    parseInt(document.getElementsByClassName("overview-page__top-banner--image-1")[0].getBoundingClientRect().top) &&
    !img_top_banner_1_is_hover) {
      document.getElementsByClassName("overview-page__top-banner--image-1")[0].style.top = 
      (img_top_banner_1_top + img_top_banner_movement) + "%";
    }

    if(parseInt(e.x) < 
    parseInt(document.getElementsByClassName("overview-page__top-banner--image-1")[0].getBoundingClientRect().left) &&
    !img_top_banner_1_is_hover) {
      document.getElementsByClassName("overview-page__top-banner--image-1")[0].style.left = 
      (img_top_banner_1_left - img_top_banner_movement) + "%";
    } else if(parseInt(e.x) > 
    parseInt(document.getElementsByClassName("overview-page__top-banner--image-1")[0].getBoundingClientRect().left) &&
    !img_top_banner_1_is_hover) {
      document.getElementsByClassName("overview-page__top-banner--image-1")[0].style.left = 
      (img_top_banner_1_left + img_top_banner_movement) + "%";
    }


    if(parseInt(e.y) < 
    parseInt(document.getElementsByClassName("overview-page__top-banner--image-2")[0].getBoundingClientRect().top) &&
    !img_top_banner_2_is_hover) {
      document.getElementsByClassName("overview-page__top-banner--image-2")[0].style.top = 
      (img_top_banner_2_top - img_top_banner_movement) + "%";
    } else if(parseInt(e.y) > 
    parseInt(document.getElementsByClassName("overview-page__top-banner--image-2")[0].getBoundingClientRect().top) &&
    !img_top_banner_2_is_hover) {
      document.getElementsByClassName("overview-page__top-banner--image-2")[0].style.top = 
      (img_top_banner_2_top + img_top_banner_movement) + "%";
    }

    if(parseInt(e.x) < 
    parseInt(document.getElementsByClassName("overview-page__top-banner--image-2")[0].getBoundingClientRect().left) &&
    !img_top_banner_2_is_hover) {
      document.getElementsByClassName("overview-page__top-banner--image-2")[0].style.left = 
      (img_top_banner_2_left - img_top_banner_movement) + "%";
    } else if(parseInt(e.x) > 
    parseInt(document.getElementsByClassName("overview-page__top-banner--image-1")[0].getBoundingClientRect().left) &&
    !img_top_banner_2_is_hover) {
      document.getElementsByClassName("overview-page__top-banner--image-2")[0].style.left = 
      (img_top_banner_2_left + img_top_banner_movement) + "%";
    }


    if(parseInt(e.y) < 
    parseInt(document.getElementsByClassName("overview-page__top-banner--image-3")[0].getBoundingClientRect().top) &&
    !img_top_banner_3_is_hover) {
      document.getElementsByClassName("overview-page__top-banner--image-3")[0].style.bottom = 
      (img_top_banner_3_bottom + img_top_banner_movement) + "%";
    } else if(parseInt(e.y) > 
    parseInt(document.getElementsByClassName("overview-page__top-banner--image-3")[0].getBoundingClientRect().top) &&
    !img_top_banner_3_is_hover) {
      document.getElementsByClassName("overview-page__top-banner--image-3")[0].style.bottom = 
      (img_top_banner_3_bottom - img_top_banner_movement) + "%";
    }

    if(parseInt(e.x) < 
    parseInt(document.getElementsByClassName("overview-page__top-banner--image-3")[0].getBoundingClientRect().left) &&
    !img_top_banner_3_is_hover) {
      document.getElementsByClassName("overview-page__top-banner--image-3")[0].style.right = 
      (img_top_banner_3_right + img_top_banner_movement) + "%";
    } else if(parseInt(e.x) > 
    parseInt(document.getElementsByClassName("overview-page__top-banner--image-3")[0].getBoundingClientRect().left) &&
    !img_top_banner_3_is_hover) {
      document.getElementsByClassName("overview-page__top-banner--image-3")[0].style.right = 
      (img_top_banner_3_right - img_top_banner_movement) + "%";
    }


    if(parseInt(e.y) < 
    parseInt(document.getElementsByClassName("overview-page__top-banner--image-7")[0].getBoundingClientRect().top) &&
    !img_top_banner_7_is_hover) {
      document.getElementsByClassName("overview-page__top-banner--image-7")[0].style.top = 
      (img_top_banner_7_top - img_top_banner_movement) + "%";
    } else if(parseInt(e.y) > 
    parseInt(document.getElementsByClassName("overview-page__top-banner--image-7")[0].getBoundingClientRect().top) &&
    !img_top_banner_7_is_hover) {
      document.getElementsByClassName("overview-page__top-banner--image-7")[0].style.top = 
      (img_top_banner_7_top + img_top_banner_movement) + "%";
    }

    if(parseInt(e.x) < 
    parseInt(document.getElementsByClassName("overview-page__top-banner--image-7")[0].getBoundingClientRect().left) &&
    !img_top_banner_7_is_hover) {
      document.getElementsByClassName("overview-page__top-banner--image-7")[0].style.left = 
      (img_top_banner_7_left - img_top_banner_movement) + "%";
    } else if(parseInt(e.x) > 
    parseInt(document.getElementsByClassName("overview-page__top-banner--image-7")[0].getBoundingClientRect().left) &&
    !img_top_banner_7_is_hover) {
      document.getElementsByClassName("overview-page__top-banner--image-7")[0].style.left = 
      (img_top_banner_7_left + img_top_banner_movement) + "%";
    }
    
    
    if(parseInt(e.y) < 
    parseInt(document.getElementsByClassName("overview-page__top-banner--image-8")[0].getBoundingClientRect().top) &&
    !img_top_banner_8_is_hover) {
      document.getElementsByClassName("overview-page__top-banner--image-8")[0].style.bottom = 
      (img_top_banner_8_bottom + img_top_banner_movement) + "%";
    } else if(parseInt(e.y) > 
    parseInt(document.getElementsByClassName("overview-page__top-banner--image-8")[0].getBoundingClientRect().top) &&
    !img_top_banner_8_is_hover) {
      document.getElementsByClassName("overview-page__top-banner--image-8")[0].style.bottom = 
      (img_top_banner_8_bottom - img_top_banner_movement) + "%";
    }

    if(parseInt(e.x) < 
    parseInt(document.getElementsByClassName("overview-page__top-banner--image-8")[0].getBoundingClientRect().left) &&
    !img_top_banner_8_is_hover) {
      document.getElementsByClassName("overview-page__top-banner--image-8")[0].style.left = 
      (img_top_banner_8_left - img_top_banner_movement) + "%";
    } else if(parseInt(e.x) > 
    parseInt(document.getElementsByClassName("overview-page__top-banner--image-8")[0].getBoundingClientRect().left) &&
    !img_top_banner_8_is_hover) {
      document.getElementsByClassName("overview-page__top-banner--image-8")[0].style.left = 
      (img_top_banner_8_left + img_top_banner_movement) + "%";
    }
    
    
    if(parseInt(e.y) < 
    parseInt(document.getElementsByClassName("overview-page__top-banner--image-9")[0].getBoundingClientRect().top) &&
    !img_top_banner_9_is_hover) {
      document.getElementsByClassName("overview-page__top-banner--image-9")[0].style.bottom = 
      (img_top_banner_9_bottom + img_top_banner_movement) + "%";
    } else if(parseInt(e.y) > 
    parseInt(document.getElementsByClassName("overview-page__top-banner--image-9")[0].getBoundingClientRect().top) &&
    !img_top_banner_9_is_hover) {
      document.getElementsByClassName("overview-page__top-banner--image-9")[0].style.bottom = 
      (img_top_banner_9_bottom - img_top_banner_movement) + "%";
    }

    if(parseInt(e.x) < 
    parseInt(document.getElementsByClassName("overview-page__top-banner--image-9")[0].getBoundingClientRect().left) &&
    !img_top_banner_9_is_hover) {
      document.getElementsByClassName("overview-page__top-banner--image-9")[0].style.right = 
      (img_top_banner_9_right + img_top_banner_movement) + "%";
    } else if(parseInt(e.x) > 
    parseInt(document.getElementsByClassName("overview-page__top-banner--image-9")[0].getBoundingClientRect().left) &&
    !img_top_banner_9_is_hover) {
      document.getElementsByClassName("overview-page__top-banner--image-9")[0].style.right = 
      (img_top_banner_9_right - img_top_banner_movement) + "%";
    }
  }

  handleMouseLeaveTopBanner() {
    document.getElementsByClassName("overview-page__top-banner--image-1")[0].style.top = img_top_banner_1_top + "%";
    document.getElementsByClassName("overview-page__top-banner--image-1")[0].style.left = img_top_banner_1_left + "%";
    document.getElementsByClassName("overview-page__top-banner--image-2")[0].style.top = img_top_banner_2_top + "%";
    document.getElementsByClassName("overview-page__top-banner--image-2")[0].style.left = img_top_banner_2_left + "%";
    document.getElementsByClassName("overview-page__top-banner--image-3")[0].style.bottom = img_top_banner_3_bottom + "%";
    document.getElementsByClassName("overview-page__top-banner--image-3")[0].style.right = img_top_banner_3_right + "%";
    document.getElementsByClassName("overview-page__top-banner--image-7")[0].style.top = img_top_banner_7_top + "%";
    document.getElementsByClassName("overview-page__top-banner--image-7")[0].style.left = img_top_banner_7_left + "%";
    document.getElementsByClassName("overview-page__top-banner--image-8")[0].style.bottom = img_top_banner_8_bottom + "%";
    document.getElementsByClassName("overview-page__top-banner--image-8")[0].style.left = img_top_banner_8_left + "%";
    document.getElementsByClassName("overview-page__top-banner--image-9")[0].style.bottom = img_top_banner_9_bottom + "%";
    document.getElementsByClassName("overview-page__top-banner--image-9")[0].style.right = img_top_banner_9_right + "%";
  }

  render() {
    const icon1 = require('../content/overview/images/icon-home-1.svg');
    const icon2 = require('../content/overview/images/icon-home-2.svg');
    const icon3 = require('../content/overview/images/icon-home-3.svg');

    return (
      <div>
      <div className="overview-page__top">
        <div className="overview-page__top-banner" aria-hidden="true">
          <img className='overview-page__top-banner--image-1' alt='' src={overview_top_1} />
          <img className='overview-page__top-banner--image-2' alt='' src={overview_top_2} />
          <img className='overview-page__top-banner--image-3' alt='' src={overview_top_3} />
          <img className='overview-page__top-banner--image-4' alt='' src={overview_top_4} />
          <img className='overview-page__top-banner--image-5' alt='' src={overview_top_5} />
          <img className='overview-page__top-banner--image-6' alt='' src={overview_top_6} />
          <img className='overview-page__top-banner--image-7' alt='' src={overview_top_7} />
          <img className='overview-page__top-banner--image-8' alt='' src={overview_top_8} />
          <img className='overview-page__top-banner--image-9' alt='' src={overview_top_8} />

          <div className="overview-page__title">
            <div>
              <div className="overview-page__title--column">
                <Letter letter="U" active />
                <Letter letter="N" />
                <Letter letter="I" version={1} active />
                <Letter letter="F" />
                <Letter letter="Y" />
              </div>
              <div className="overview-page__title--column">
                <Letter letter="D" />
                <Letter letter="E" active />
                <Letter letter="S" />
                <Letter letter="I" version={2} active />
                <Letter letter="G" />
                <Letter letter="N" version={2} />
              </div>
              <div className="overview-page__title--column">
                <Letter letter="S" version={2} />
                <Letter letter="Y" />
                <Letter letter="S" version={3} />
                <Letter letter="T" />
                <Letter letter="E" active />
                <Letter letter="M" />
              </div>
            </div>
          </div>
        </div>

        <div className='overview-page__top-banner-border'></div>
      </div>
      <main id="maincontent" role="main" aria-labelledby="page-title" className="overview-page" tabIndex="-1">
        <h1 id="page-title" className="overview-page__title--aria" aria-label="Carbon Design System">Carbon Design System</h1>
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
