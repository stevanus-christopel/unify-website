import React, { Component } from 'react';
import Letter from '../Letters';

import overview_top_1 from '../../content/overview/images/header-green/overview-top-green-1.png';
import overview_top_2 from '../../content/overview/images/header-green/overview-top-green-2.svg';
import overview_top_3 from '../../content/overview/images/header-green/overview-top-green-3.svg';
import overview_background from '../../content/overview/images/header-green/overview-background-green.svg';

const img_top_banner_movement = 5;

const img_top_banner_1_bottom = 0;
const img_top_banner_1_left = 0;
var img_top_banner_1_is_hover = false;

const img_top_banner_2_top = 50;
const img_top_banner_2_left = 50;
var img_top_banner_2_is_hover = false;

const img_top_banner_3_bottom = 0;
const img_top_banner_3_right = 0;
var img_top_banner_3_is_hover = false;

const backgroundStyle = {
    backgroundImage: "url(" + overview_background + ")"
}

class HomeHeaderGreen extends Component {

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
        document.getElementsByClassName("overview-page__top-banner--image-green-1")[0].style.bottom = img_top_banner_1_bottom + "%";
        document.getElementsByClassName("overview-page__top-banner--image-green-1")[0].style.left = img_top_banner_1_left + "%";
        document.getElementsByClassName("overview-page__top-banner--image-green-2")[0].style.top = img_top_banner_2_top + "%";
        document.getElementsByClassName("overview-page__top-banner--image-green-2")[0].style.left = img_top_banner_2_left + "%";
        document.getElementsByClassName("overview-page__top-banner--image-green-3")[0].style.bottom = img_top_banner_3_bottom + "%";
        document.getElementsByClassName("overview-page__top-banner--image-green-3")[0].style.right = img_top_banner_3_right + "%";
    }

    render() {
        return (
        <div className="overview-page__top-section" style={ backgroundStyle }>
            <div className="overview-page__top-banner" aria-hidden="true">
                <img className='overview-page__top-banner--image-animate overview-page__top-banner--image-green-1' alt='' src={overview_top_1} />
                <img className='overview-page__top-banner--image-animate overview-page__top-banner--image-green-2' alt='' src={overview_top_2} />
                <img className='overview-page__top-banner--image-animate overview-page__top-banner--image-green-3' alt='' src={overview_top_3} />
            </div>
        </div>
        );
    }
}

export default HomeHeaderGreen;
