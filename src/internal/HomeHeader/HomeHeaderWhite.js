import React, { Component } from 'react';
import Letter from '../Letters';

import overview_top_1 from '../../content/overview/images/header-white/overview-top-white-1.png';
import overview_top_2 from '../../content/overview/images/header-white/overview-top-white-2.png';
import overview_top_3 from '../../content/overview/images/header-white/overview-top-white-3.png';
import overview_top_4 from '../../content/overview/images/header-white/overview-top-white-4.png';
import overview_top_5 from '../../content/overview/images/header-white/overview-top-white-5.png';
import overview_top_6 from '../../content/overview/images/header-white/overview-top-white-6.png';
import overview_top_7 from '../../content/overview/images/header-white/overview-top-white-7.png';
import overview_top_8 from '../../content/overview/images/header-white/overview-top-white-8.png';

const img_top_banner_movement = 5;

const img_top_banner_1_top = -40;
const img_top_banner_1_left = 20;
var img_top_banner_1_is_hover = false;

const img_top_banner_2_top = -14;
const img_top_banner_2_left = 50;
var img_top_banner_2_is_hover = false;

const img_top_banner_3_bottom = -25;
const img_top_banner_3_right = 16;
var img_top_banner_3_is_hover = false;

const img_top_banner_7_top = 6;
const img_top_banner_7_left = 22;
var img_top_banner_7_is_hover = false;

const img_top_banner_8_bottom = 10;
const img_top_banner_8_left = 22;
var img_top_banner_8_is_hover = false;

const img_top_banner_9_bottom = 62;
const img_top_banner_9_right = 28;
var img_top_banner_9_is_hover = false;

class HomeHeaderWhite extends Component {

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
        
        document.getElementsByClassName("overview-page__top-banner--image-white-1")[0].onmouseenter = function() {
        img_top_banner_1_is_hover = true;
        }
        document.getElementsByClassName("overview-page__top-banner--image-white-1")[0].onmouseleave = function() {
        img_top_banner_1_is_hover = false;
        }
        document.getElementsByClassName("overview-page__top-banner--image-white-2")[0].onmouseenter = function() {
        img_top_banner_2_is_hover = true;
        }
        document.getElementsByClassName("overview-page__top-banner--image-white-2")[0].onmouseleave = function() {
        img_top_banner_2_is_hover = false;
        }
        document.getElementsByClassName("overview-page__top-banner--image-white-3")[0].onmouseenter = function() {
        img_top_banner_3_is_hover = true;
        }
        document.getElementsByClassName("overview-page__top-banner--image-white-3")[0].onmouseleave = function() {
        img_top_banner_3_is_hover = false;
        }
        document.getElementsByClassName("overview-page__top-banner--image-white-7")[0].onmouseenter = function() {
        img_top_banner_7_is_hover = true;
        }
        document.getElementsByClassName("overview-page__top-banner--image-white-7")[0].onmouseleave = function() {
        img_top_banner_7_is_hover = false;
        }
        document.getElementsByClassName("overview-page__top-banner--image-white-8")[0].onmouseenter = function() {
        img_top_banner_8_is_hover = true;
        }
        document.getElementsByClassName("overview-page__top-banner--image-white-8")[0].onmouseleave = function() {
        img_top_banner_8_is_hover = false;
        }
        document.getElementsByClassName("overview-page__top-banner--image-white-9")[0].onmouseenter = function() {
        img_top_banner_9_is_hover = true;
        }
        document.getElementsByClassName("overview-page__top-banner--image-white-9")[0].onmouseleave = function() {
        img_top_banner_9_is_hover = false;
        }
        
        setTimeout(this.showImageAnimate, 2000);
    }

    showImageAnimate() {
        var imageAnimates = document.getElementsByClassName("overview-page__top-banner--image-animate");
        for(let i=0;i<imageAnimates.length;i++) {
            imageAnimates[i].className += " show";
        }
    }
    
    handleMouseMoveTopBanner(e) {
        if(parseInt(e.y) < 
        parseInt(document.getElementsByClassName("overview-page__top-banner--image-white-1")[0].getBoundingClientRect().top) &&
        !img_top_banner_1_is_hover) {
            document.getElementsByClassName("overview-page__top-banner--image-white-1")[0].style.top = 
            (img_top_banner_1_top - img_top_banner_movement) + "%";
        } else if(parseInt(e.y) > 
        parseInt(document.getElementsByClassName("overview-page__top-banner--image-white-1")[0].getBoundingClientRect().top) &&
        !img_top_banner_1_is_hover) {
            document.getElementsByClassName("overview-page__top-banner--image-white-1")[0].style.top = 
            (img_top_banner_1_top + img_top_banner_movement) + "%";
        }

        if(parseInt(e.x) < 
        parseInt(document.getElementsByClassName("overview-page__top-banner--image-white-1")[0].getBoundingClientRect().left) &&
        !img_top_banner_1_is_hover) {
            document.getElementsByClassName("overview-page__top-banner--image-white-1")[0].style.left = 
            (img_top_banner_1_left - img_top_banner_movement) + "%";
        } else if(parseInt(e.x) > 
        parseInt(document.getElementsByClassName("overview-page__top-banner--image-white-1")[0].getBoundingClientRect().left) &&
        !img_top_banner_1_is_hover) {
            document.getElementsByClassName("overview-page__top-banner--image-white-1")[0].style.left = 
            (img_top_banner_1_left + img_top_banner_movement) + "%";
        }


        if(parseInt(e.y) < 
        parseInt(document.getElementsByClassName("overview-page__top-banner--image-white-2")[0].getBoundingClientRect().top) &&
        !img_top_banner_2_is_hover) {
            document.getElementsByClassName("overview-page__top-banner--image-white-2")[0].style.top = 
            (img_top_banner_2_top - img_top_banner_movement) + "%";
        } else if(parseInt(e.y) > 
        parseInt(document.getElementsByClassName("overview-page__top-banner--image-white-2")[0].getBoundingClientRect().top) &&
        !img_top_banner_2_is_hover) {
            document.getElementsByClassName("overview-page__top-banner--image-white-2")[0].style.top = 
            (img_top_banner_2_top + img_top_banner_movement) + "%";
        }

        if(parseInt(e.x) < 
        parseInt(document.getElementsByClassName("overview-page__top-banner--image-white-2")[0].getBoundingClientRect().left) &&
        !img_top_banner_2_is_hover) {
            document.getElementsByClassName("overview-page__top-banner--image-white-2")[0].style.left = 
            (img_top_banner_2_left - img_top_banner_movement) + "%";
        } else if(parseInt(e.x) > 
        parseInt(document.getElementsByClassName("overview-page__top-banner--image-white-1")[0].getBoundingClientRect().left) &&
        !img_top_banner_2_is_hover) {
            document.getElementsByClassName("overview-page__top-banner--image-white-2")[0].style.left = 
            (img_top_banner_2_left + img_top_banner_movement) + "%";
        }


        if(parseInt(e.y) < 
        parseInt(document.getElementsByClassName("overview-page__top-banner--image-white-3")[0].getBoundingClientRect().top) &&
        !img_top_banner_3_is_hover) {
            document.getElementsByClassName("overview-page__top-banner--image-white-3")[0].style.bottom = 
            (img_top_banner_3_bottom + img_top_banner_movement) + "%";
        } else if(parseInt(e.y) > 
        parseInt(document.getElementsByClassName("overview-page__top-banner--image-white-3")[0].getBoundingClientRect().top) &&
        !img_top_banner_3_is_hover) {
            document.getElementsByClassName("overview-page__top-banner--image-white-3")[0].style.bottom = 
            (img_top_banner_3_bottom - img_top_banner_movement) + "%";
        }

        if(parseInt(e.x) < 
        parseInt(document.getElementsByClassName("overview-page__top-banner--image-white-3")[0].getBoundingClientRect().left) &&
        !img_top_banner_3_is_hover) {
            document.getElementsByClassName("overview-page__top-banner--image-white-3")[0].style.right = 
            (img_top_banner_3_right + img_top_banner_movement) + "%";
        } else if(parseInt(e.x) > 
        parseInt(document.getElementsByClassName("overview-page__top-banner--image-white-3")[0].getBoundingClientRect().left) &&
        !img_top_banner_3_is_hover) {
            document.getElementsByClassName("overview-page__top-banner--image-white-3")[0].style.right = 
            (img_top_banner_3_right - img_top_banner_movement) + "%";
        }


        if(parseInt(e.y) < 
        parseInt(document.getElementsByClassName("overview-page__top-banner--image-white-7")[0].getBoundingClientRect().top) &&
        !img_top_banner_7_is_hover) {
            document.getElementsByClassName("overview-page__top-banner--image-white-7")[0].style.top = 
            (img_top_banner_7_top - img_top_banner_movement) + "%";
        } else if(parseInt(e.y) > 
        parseInt(document.getElementsByClassName("overview-page__top-banner--image-white-7")[0].getBoundingClientRect().top) &&
        !img_top_banner_7_is_hover) {
            document.getElementsByClassName("overview-page__top-banner--image-white-7")[0].style.top = 
            (img_top_banner_7_top + img_top_banner_movement) + "%";
        }

        if(parseInt(e.x) < 
        parseInt(document.getElementsByClassName("overview-page__top-banner--image-white-7")[0].getBoundingClientRect().left) &&
        !img_top_banner_7_is_hover) {
            document.getElementsByClassName("overview-page__top-banner--image-white-7")[0].style.left = 
            (img_top_banner_7_left - img_top_banner_movement) + "%";
        } else if(parseInt(e.x) > 
        parseInt(document.getElementsByClassName("overview-page__top-banner--image-white-7")[0].getBoundingClientRect().left) &&
        !img_top_banner_7_is_hover) {
            document.getElementsByClassName("overview-page__top-banner--image-white-7")[0].style.left = 
            (img_top_banner_7_left + img_top_banner_movement) + "%";
        }
        
        
        if(parseInt(e.y) < 
        parseInt(document.getElementsByClassName("overview-page__top-banner--image-white-8")[0].getBoundingClientRect().top) &&
        !img_top_banner_8_is_hover) {
            document.getElementsByClassName("overview-page__top-banner--image-white-8")[0].style.bottom = 
            (img_top_banner_8_bottom + img_top_banner_movement) + "%";
        } else if(parseInt(e.y) > 
        parseInt(document.getElementsByClassName("overview-page__top-banner--image-white-8")[0].getBoundingClientRect().top) &&
        !img_top_banner_8_is_hover) {
            document.getElementsByClassName("overview-page__top-banner--image-white-8")[0].style.bottom = 
            (img_top_banner_8_bottom - img_top_banner_movement) + "%";
        }

        if(parseInt(e.x) < 
        parseInt(document.getElementsByClassName("overview-page__top-banner--image-white-8")[0].getBoundingClientRect().left) &&
        !img_top_banner_8_is_hover) {
            document.getElementsByClassName("overview-page__top-banner--image-white-8")[0].style.left = 
            (img_top_banner_8_left - img_top_banner_movement) + "%";
        } else if(parseInt(e.x) > 
        parseInt(document.getElementsByClassName("overview-page__top-banner--image-white-8")[0].getBoundingClientRect().left) &&
        !img_top_banner_8_is_hover) {
            document.getElementsByClassName("overview-page__top-banner--image-white-8")[0].style.left = 
            (img_top_banner_8_left + img_top_banner_movement) + "%";
        }
        
        
        if(parseInt(e.y) < 
        parseInt(document.getElementsByClassName("overview-page__top-banner--image-white-9")[0].getBoundingClientRect().top) &&
        !img_top_banner_9_is_hover) {
            document.getElementsByClassName("overview-page__top-banner--image-white-9")[0].style.bottom = 
            (img_top_banner_9_bottom + img_top_banner_movement) + "%";
        } else if(parseInt(e.y) > 
        parseInt(document.getElementsByClassName("overview-page__top-banner--image-white-9")[0].getBoundingClientRect().top) &&
        !img_top_banner_9_is_hover) {
            document.getElementsByClassName("overview-page__top-banner--image-white-9")[0].style.bottom = 
            (img_top_banner_9_bottom - img_top_banner_movement) + "%";
        }

        if(parseInt(e.x) < 
        parseInt(document.getElementsByClassName("overview-page__top-banner--image-white-9")[0].getBoundingClientRect().left) &&
        !img_top_banner_9_is_hover) {
            document.getElementsByClassName("overview-page__top-banner--image-white-9")[0].style.right = 
            (img_top_banner_9_right + img_top_banner_movement) + "%";
        } else if(parseInt(e.x) > 
        parseInt(document.getElementsByClassName("overview-page__top-banner--image-white-9")[0].getBoundingClientRect().left) &&
        !img_top_banner_9_is_hover) {
            document.getElementsByClassName("overview-page__top-banner--image-white-9")[0].style.right = 
            (img_top_banner_9_right - img_top_banner_movement) + "%";
        }
    }

    handleMouseLeaveTopBanner() {
        document.getElementsByClassName("overview-page__top-banner--image-white-1")[0].style.top = img_top_banner_1_top + "%";
        document.getElementsByClassName("overview-page__top-banner--image-white-1")[0].style.left = img_top_banner_1_left + "%";
        document.getElementsByClassName("overview-page__top-banner--image-white-2")[0].style.top = img_top_banner_2_top + "%";
        document.getElementsByClassName("overview-page__top-banner--image-white-2")[0].style.left = img_top_banner_2_left + "%";
        document.getElementsByClassName("overview-page__top-banner--image-white-3")[0].style.bottom = img_top_banner_3_bottom + "%";
        document.getElementsByClassName("overview-page__top-banner--image-white-3")[0].style.right = img_top_banner_3_right + "%";
        document.getElementsByClassName("overview-page__top-banner--image-white-7")[0].style.top = img_top_banner_7_top + "%";
        document.getElementsByClassName("overview-page__top-banner--image-white-7")[0].style.left = img_top_banner_7_left + "%";
        document.getElementsByClassName("overview-page__top-banner--image-white-8")[0].style.bottom = img_top_banner_8_bottom + "%";
        document.getElementsByClassName("overview-page__top-banner--image-white-8")[0].style.left = img_top_banner_8_left + "%";
        document.getElementsByClassName("overview-page__top-banner--image-white-9")[0].style.bottom = img_top_banner_9_bottom + "%";
        document.getElementsByClassName("overview-page__top-banner--image-white-9")[0].style.right = img_top_banner_9_right + "%";
    }

    render() {
        return (
            <div className="overview-page__top">
                <div className="overview-page__top-banner" aria-hidden="true">
                    <img className='overview-page__top-banner--image-animate overview-page__top-banner--image-white-1' alt='' src={overview_top_1} />
                    <img className='overview-page__top-banner--image-animate overview-page__top-banner--image-white-2' alt='' src={overview_top_2} />
                    <img className='overview-page__top-banner--image-animate overview-page__top-banner--image-white-3' alt='' src={overview_top_3} />
                    <img className='overview-page__top-banner--image-animate overview-page__top-banner--image-white-4' alt='' src={overview_top_4} />
                    <img className='overview-page__top-banner--image-animate overview-page__top-banner--image-white-5' alt='' src={overview_top_5} />
                    <img className='overview-page__top-banner--image-animate overview-page__top-banner--image-white-6' alt='' src={overview_top_6} />
                    <img className='overview-page__top-banner--image-animate overview-page__top-banner--image-white-7' alt='' src={overview_top_7} />
                    <img className='overview-page__top-banner--image-animate overview-page__top-banner--image-white-8' alt='' src={overview_top_8} />
                    <img className='overview-page__top-banner--image-animate overview-page__top-banner--image-white-9' alt='' src={overview_top_8} />
            
                    <div className="overview-page__title">
                        <Letter letter="U" onClick={() => this.props.onClickChangeHeader(1)}  />
                        <Letter letter="N" onClick={() => this.props.onClickChangeHeader(2)}  />
                        <Letter letter="I" onClick={() => this.props.onClickChangeHeader(3)}  />
                        <Letter letter="F" onClick={() => this.props.onClickChangeHeader(4)}  />
                        <Letter letter="Y" onClick={() => this.props.onClickChangeHeader(1)}  />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeHeaderWhite;
