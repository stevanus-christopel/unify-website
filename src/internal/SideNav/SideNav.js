import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, browserHistory } from 'react-router';
import classnames from 'classnames';
import SiteContent from '../../data/sitecontent.js';

import { Icon, Button } from 'carbon-components-react';

import SiteNavStructure from '../../data/site-nav-structure.json';
import SideNavItem from '../SideNavItem/SideNavItem';
import GlobalSearch from '../GlobalSearch/GlobalSearch';

import iconTriangle from './images/triangle.svg';
import iconGithub from './images/github.svg';
import iconSketch from './images/sketch.svg';
import iconSearch from './images/search-main-menu.svg';

class SideNav extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    isFinal: PropTypes.bool,
    onToggleBtnClick: PropTypes.func,
    onClick: PropTypes.func,
  };

  state = {
    results: [],
    relatedResults: [],
    currentQuery: '',
    val: '',
    activeSearch: false,
    subNavItems: [],
  };

  componentWillReceiveProps(nextProps) {
    if(this.props.isOpen && !nextProps.isOpen) {
      this.setState({
        subNavItems: []
      });
    }
  }

  handleSkip = evt => {
    if (evt.which === 13) {
      document.activeElement.blur();
      document.querySelector('#maincontent').focus();
    }
  };

  clearInput = () => {
    this.searchInput.value = '';
    this.setState({
      val: '',
      activeSearch: false,
    });
  };
  
  handleMouseEnter = (subNavItems) => {
    let menus = document.getElementsByClassName("main-nav-item");
    for(var i=0;i<menus.length; i++) {
      menus[i].className += " no-hover";
    }
    this.setState({
      subNavItems: subNavItems
    });
  };
    
  handleMouseLeave = () => {
    const currentPath = browserHistory
      .getCurrentLocation()
      .pathname.split('/')[1];

    let menus = document.getElementsByClassName("main-nav-item");
    for(var i=0;i<menus.length; i++) {
      if(menus[i].childNodes[0].dataset.url === currentPath ||
        (menus[i].childNodes[0].dataset.url === "" && currentPath === "introduction")) {
        menus[i].className = "main-nav-item main-nav-item__active";
      } else {
        menus[i].className = "main-nav-item";
      }
    }
    /*this.setState({
      subNavItems: []
    });*/
  };

  crawlSiteContent = query => {
    const newResults = [];
    const newRelatedResults = [];
    let prevChild = '';
    Object.keys(SiteContent).map(o => {
      const currentObj = SiteContent[o];
      const childName = currentObj.child.replace(/[-]/g, ' ');
      if (
        (childName.includes(query) ||
          childName.includes(query.toLowerCase())) &&
        currentObj.child !== prevChild
      ) {
        newResults.push(currentObj);
        this.setState({
          results: newResults,
          currentQuery: query,
        });
        prevChild = currentObj.child;
      } else {
        if (!(query.length <= 1)) {
          this.setState({
            results: newResults,
          });
        }
      }
      if (
        currentObj.content.includes(query) ||
        currentObj.content.includes(query.toLowerCase()) ||
        currentObj.content.includes(
          query.charAt(0).toUpperCase() + query.substring(1),
        )
      ) {
        newRelatedResults.push(currentObj);
        this.setState({
          relatedResults: newRelatedResults,
          currentQuery: query,
        });
      } else {
        if (!(query.length <= 1)) {
          this.setState({
            relatedResults: newRelatedResults,
          });
        }
      }
      return null;
    });
  };

  filterResults = e => {
    const val = e.target.value;
    this.setState({
      val,
    });
    if (val.length >= 1) {
      this.setState({
        activeSearch: true,
      });
      this.crawlSiteContent(val);
    } else {
      this.setState({
        results: [],
        relatedResults: [],
        activeSearch: false,
      });
    }
  };

  renderSiteItems = navItems =>
    Object.keys(navItems).map(navItem => {
      const navItemObj = navItems[navItem];
      const currentPath = browserHistory
        .getCurrentLocation()
        .pathname.split('/');
      const isCurrentPath = currentPath[1] === navItem;
      return (
        <SideNavItem key={navItem} isActiveItem={isCurrentPath}
          onMouseEnter={() => this.handleMouseEnter(navItemObj.children)}>
          <Link
            aria-label={navItemObj.title}
            data-url={navItemObj.url}
            tabIndex="0"
            className="main-nav-item__heading"
            to={`/${navItem}`}
            onClick={this.props.onToggleBtnClick}
          >
            {navItemObj.title}
            {
              navItemObj.children.length > 0 &&
              <img className="main-nav-item__heading--hover" alt='' src={iconTriangle} />
            }
          </Link>
          {
            navItemObj.children.length > 0 &&
            <ul className="main-nav-item__children--small">
            {
              navItemObj.children.map((subNavItem, index)=> {
                if(index > 8) {
                  return;
                }
                return <li key={index}>
                <Link to={subNavItem.url}
                onClick={this.props.onToggleBtnClick}>
                {subNavItem.title}
                </Link>
                </li>
              })
            }
            </ul>
          }
        </SideNavItem>
      );
    });

  render() {
    const { isOpen, isFinal } = this.props;

    const navItems = this.renderSiteItems(SiteNavStructure);

    const classNames = classnames({
      'side-nav': true,
      'side-nav__closed': !isOpen,
      'side-nav__closed--final': isFinal && !isOpen,
    });

    const searchClasses = classnames({
      'bx--search-close': true,
      'bx--search-close--hidden': this.state.val.length < 1,
    });
    const bottomClasses = classnames({
      'side-nav__bottom-container': true,
      'side-nav__bottom-container--hidden': this.state.val.length > 0,
    });
    return (
      <nav
        role="navigation"
        aria-label="Page Navigation"
        aria-expanded={isOpen}
        className={classNames}
      >
        <div className="side-nav__column"></div>
        <div className="side-nav__column">
          <div className="side-nav__search">
            <input className="side-nav__search-txt" type="text" placeholder="Type for Search..."
            style={ {backgroundImage: "url(" + iconSearch + ")" } } />
          </div>
          <div className={bottomClasses} onMouseLeave={this.handleMouseLeave}>
            <ul
              role="menu"
              aria-label="Page main menu"
              className="side-nav__main-nav"
            >
              {navItems}
            </ul>
            <div className="side-nav__button-container">
              <a href="https://drive.google.com/drive/folders/0AFAID-GJ_Se0Uk9PVA" target="_blank" className="side-nav__button">
                <img alt='' src={iconSketch} className="side-nav__button--icon" />
                Sketch File
                <span>&#8594;</span>
              </a>
              <a href="https://github.com/tokopedia/unify-react-mobile" target="_blank" className="side-nav__button">
                <img alt='' src={iconGithub} className="side-nav__button--icon" />
                GitHub Repo
                <span>&#8594;</span>
              </a>
            </div>
          </div>
        </div>
        <div className="side-nav__column"></div>
        <div className="side-nav__column">
          {
            this.state.subNavItems.length > 0 &&
            <ul className="main-nav-item__children">
              { 
                this.state.subNavItems.map((subNavItem, index)=> {
                  if(index > 8) {
                    return;
                  }
                  return <li key={index}>
                  <Link to={subNavItem.url}
                  onClick={this.props.onToggleBtnClick}>
                  {subNavItem.title}
                  </Link>
                  </li>
                })
              }
            </ul>
          }
        </div>
        <div className="side-nav__column">
          {
            this.state.subNavItems.length > 8 &&
            <ul className="main-nav-item__children">
              { 
                this.state.subNavItems.map((subNavItem, index)=> {
                  if(index <= 8) {
                    return;
                  }
                  return <li key={index}>
                  <Link to={subNavItem.url}>{subNavItem.title}</Link>
                  </li>
                })
              }
            </ul>
          }
        </div>
        <div className="side-nav__column"></div>

        {/*<div className="side-nav__top-container">
          <a
            id="skip-to-content"
            tabIndex="0"
            role="button"
            className="skip-to-content"
            onKeyDown={this.handleSkip}
          >
            Skip to main content
          </a>
          <Link to="/" className="side-nav__logo" onClick={this.props.onToggleBtnClick}>
            UNIFY <span>Design System</span>
          </Link>
          <div className="bx--search bx--search--sm" role="search">
            <input
              type="text"
              role="search"
              onInput={this.filterResults}
              className="bx--search-input"
              placeholder="Search"
              ref={searchInput => {
                this.searchInput = searchInput;
              }}
            />
            <svg
              className={searchClasses}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fillRule="evenodd"
              onClick={this.clearInput}
            >
              <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z" />
            </svg>
          </div>
        </div>*/}
        {/*
        <GlobalSearch
          results={this.state.results}
          relatedResults={this.state.relatedResults}
          val={this.state.val}
          currentQuery={this.state.currentQuery}
          activeSearch={this.state.activeSearch}
        />*/}

          {/*<div className="side-nav__links">
            <Button
              href="https://github.com/carbon-design-system/carbon-design-kit"
              className="side-nav__link bx--btn"
              kind="secondary"
              icon="arrow--right"
              target="_blank"
              role="button"
              iconDescription="sidenav link icon"
            >
              Design Kit
            </Button>
            <Button
              href="https://github.com/carbon-design-system/carbon-components"
              className="side-nav__link bx--btn"
              kind="secondary"
              icon="arrow--right"
              target="_blank"
              role="button"
              iconDescription="sidenav link icon"
            >
              GitHub Repo
            </Button>
          </div>*/}
      </nav>
    );
  }
}

export default SideNav;
