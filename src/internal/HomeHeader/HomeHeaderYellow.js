import React, { Component } from 'react';
import Letter from '../Letters';

import overview_top_1 from '../../content/overview/images/header-yellow/overview-top-yellow-1.png';
import overview_top_2 from '../../content/overview/images/header-yellow/overview-top-yellow-2.png';
import overview_background from '../../content/overview/images/header-yellow/overview-background-yellow.png';

const img_top_banner_movement = 5;

const img_top_banner_1_top = 7;
const img_top_banner_1_left = 13;
var img_top_banner_1_is_hover = false;

const img_top_banner_2_top = 54;
const img_top_banner_2_left = 32;
var img_top_banner_2_is_hover = false;

const backgroundStyle = {
    backgroundSize: "cover",
    backgroundImage: "url(" + overview_background + ")"
}

class HomeHeaderYellow extends Component {

    constructor() {
        super();
        this.showImageAnimate = this.showImageAnimate.bind(this);
        this.handleMouseMoveTopBanner = this.handleMouseMoveTopBanner.bind(this);
        this.handleMouseLeaveTopBanner = this.handleMouseLeaveTopBanner.bind(this);
    }

    componentDidMount() {
        this.handleMouseLeaveTopBanner();
        
        document.getElementsByClassName("overview-page__top")[0].onmousemove = this.handleMouseMoveTopBanner;
        document.getElementsByClassName("overview-page__top")[0].onmouseleave = this.handleMouseLeaveTopBanner;
        document.getElementsByClassName("overview-page__top")[0].style.backgroundImage = overview_background;
        
        setTimeout(this.showImageAnimate, 2000);
    }

    showImageAnimate() {
        var imageAnimates = document.getElementsByClassName("overview-page__top-banner--image-animate");
        for(let i=0;i<imageAnimates.length;i++) {
            imageAnimates[i].className += " show";
        }
    }
    
    handleMouseMoveTopBanner(e) {
    }

    handleMouseLeaveTopBanner() {
        document.getElementsByClassName("overview-page__top-banner--image-yellow-1")[0].style.top = img_top_banner_1_top + "%";
        document.getElementsByClassName("overview-page__top-banner--image-yellow-1")[0].style.left = img_top_banner_1_left + "%";
        document.getElementsByClassName("overview-page__top-banner--image-yellow-2")[0].style.top = img_top_banner_2_top + "%";
        document.getElementsByClassName("overview-page__top-banner--image-yellow-2")[0].style.left = img_top_banner_2_left + "%";
    }

    render() {
        return (
        <div className="overview-page__top" style={ backgroundStyle }>
            <div className="overview-page__top-banner" aria-hidden="true">
                <img className='overview-page__top-banner--image-animate overview-page__top-banner--image-yellow-1' alt='' src={overview_top_1} />
                <img className='overview-page__top-banner--image-animate overview-page__top-banner--image-yellow-2' alt='' src={overview_top_2} />

                <div className="overview-page__title">
                    <Letter letter="U" className="white" onClick={() => this.props.onClickChangeHeader(1)}  />
                    <Letter letter="N" className="white" onClick={() => this.props.onClickChangeHeader(2)}  />
                    <Letter letter="I" className="white" onClick={() => this.props.onClickChangeHeader(3)}  />
                    <Letter letter="F" className="white" onClick={() => this.props.onClickChangeHeader(4)}  />
                    <Letter letter="Y" className="white" onClick={() => this.props.onClickChangeHeader(1)}  />
                </div>
            </div>
        </div>
        );
    }
}

export default HomeHeaderYellow;
