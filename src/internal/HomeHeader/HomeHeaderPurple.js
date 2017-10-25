import React, { Component } from 'react';
import Letter from '../Letters';

import overview_top_1 from '../../content/overview/images/header-purple/overview-top-purple-1.png';
import overview_top_2 from '../../content/overview/images/header-purple/overview-top-purple-2.svg';
import overview_top_3 from '../../content/overview/images/header-purple/overview-top-purple-3.svg';
import overview_top_4 from '../../content/overview/images/header-purple/overview-top-purple-4.svg';
import overview_top_5 from '../../content/overview/images/header-purple/overview-top-purple-5.png';
import overview_top_6 from '../../content/overview/images/header-purple/overview-top-purple-6.svg';
import overview_top_7 from '../../content/overview/images/header-purple/overview-top-purple-7.svg';
import overview_top_8 from '../../content/overview/images/header-purple/overview-top-purple-8.png';
import overview_background from '../../content/overview/images/header-purple/overview-background-purple.png';

const img_top_banner_movement = 5;

const img_top_banner_1_top = 16;
const img_top_banner_1_left = 15;
var img_top_banner_1_is_hover = false;

const img_top_banner_2_bottom = 20;
const img_top_banner_2_left = 18;
var img_top_banner_2_is_hover = false;

const img_top_banner_3_bottom = 22;
const img_top_banner_3_left = 22;
var img_top_banner_3_is_hover = false;

const img_top_banner_4_bottom = 22;
const img_top_banner_4_left = 32;
var img_top_banner_4_is_hover = false;

const img_top_banner_5_top = 12;
const img_top_banner_5_right = 38;
var img_top_banner_5_is_hover = false;

const img_top_banner_6_top = 16;
const img_top_banner_6_right = 19;
var img_top_banner_6_is_hover = false;

const img_top_banner_7_top = 18;
const img_top_banner_7_right = 18;
var img_top_banner_5_is_hover = false;

const img_top_banner_8_bottom = 0;
const img_top_banner_8_right = 0;
var img_top_banner_8_is_hover = false;

const backgroundStyle = {
    backgroundSize: "cover",
    backgroundImage: "url(" + overview_background + ")"
}

class HomeHeaderPurple extends Component {

    constructor() {
        super();
        this.handleMouseMoveTopBanner = this.handleMouseMoveTopBanner.bind(this);
        this.handleMouseLeaveTopBanner = this.handleMouseLeaveTopBanner.bind(this);
    }

    componentDidMount() {
        this.handleMouseLeaveTopBanner();
        
        document.getElementsByClassName("overview-page__top")[0].onmousemove = this.handleMouseMoveTopBanner;
        document.getElementsByClassName("overview-page__top")[0].onmouseleave = this.handleMouseLeaveTopBanner;
        document.getElementsByClassName("overview-page__top")[0].style.backgroundImage = overview_background;
    }
    
    handleMouseMoveTopBanner(e) {
    }

    handleMouseLeaveTopBanner() {
        document.getElementsByClassName("overview-page__top-banner--image-purple-1")[0].style.bottom = img_top_banner_1_top + "%";
        document.getElementsByClassName("overview-page__top-banner--image-purple-1")[0].style.left = img_top_banner_1_left + "%";
        document.getElementsByClassName("overview-page__top-banner--image-purple-2")[0].style.bottom = img_top_banner_2_bottom + "%";
        document.getElementsByClassName("overview-page__top-banner--image-purple-2")[0].style.left = img_top_banner_2_left + "%";
        document.getElementsByClassName("overview-page__top-banner--image-purple-3")[0].style.bottom = img_top_banner_3_bottom + "%";
        document.getElementsByClassName("overview-page__top-banner--image-purple-3")[0].style.left = img_top_banner_3_left + "%";
        document.getElementsByClassName("overview-page__top-banner--image-purple-4")[0].style.bottom = img_top_banner_4_bottom + "%";
        document.getElementsByClassName("overview-page__top-banner--image-purple-4")[0].style.left = img_top_banner_4_left + "%";
        document.getElementsByClassName("overview-page__top-banner--image-purple-5")[0].style.top = img_top_banner_5_top + "%";
        document.getElementsByClassName("overview-page__top-banner--image-purple-5")[0].style.right = img_top_banner_5_right + "%";
        document.getElementsByClassName("overview-page__top-banner--image-purple-6")[0].style.top = img_top_banner_6_top + "%";
        document.getElementsByClassName("overview-page__top-banner--image-purple-6")[0].style.right = img_top_banner_6_right + "%";
        document.getElementsByClassName("overview-page__top-banner--image-purple-7")[0].style.top = img_top_banner_7_top + "%";
        document.getElementsByClassName("overview-page__top-banner--image-purple-7")[0].style.right = img_top_banner_7_right + "%";
        document.getElementsByClassName("overview-page__top-banner--image-purple-8")[0].style.bottom = img_top_banner_8_bottom + "%";
        document.getElementsByClassName("overview-page__top-banner--image-purple-8")[0].style.right = img_top_banner_8_right + "%";
    }

    render() {
        return (
        <div className="overview-page__top" style={ backgroundStyle }>
            <div className="overview-page__top-banner" aria-hidden="true">
                <img className='overview-page__top-banner--image-purple-1' alt='' src={overview_top_1} />
                <img className='overview-page__top-banner--image-purple-2' alt='' src={overview_top_2} />
                <img className='overview-page__top-banner--image-purple-3' alt='' src={overview_top_3} />
                <img className='overview-page__top-banner--image-purple-4' alt='' src={overview_top_4} />
                <img className='overview-page__top-banner--image-purple-5' alt='' src={overview_top_5} />
                <img className='overview-page__top-banner--image-purple-6' alt='' src={overview_top_6} />
                <img className='overview-page__top-banner--image-purple-7' alt='' src={overview_top_7} />
                <img className='overview-page__top-banner--image-purple-8' alt='' src={overview_top_8} />

                <div className="overview-page__title">
                    <Letter letter="U" className="white" />
                    <Letter letter="N" className="white" />
                    <Letter letter="I" className="white" />
                    <Letter letter="F" className="white" />
                    <Letter letter="Y" className="white" />
                </div>
            </div>
        </div>
        );
    }
}

export default HomeHeaderPurple;
