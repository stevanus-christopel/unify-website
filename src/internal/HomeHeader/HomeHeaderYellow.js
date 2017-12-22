import React, { Component } from 'react';
import Letter from '../Letters';

import overview_top_1 from '../../content/overview/images/header-yellow/overview-top-yellow-1.png';
import overview_top_2 from '../../content/overview/images/header-yellow/overview-top-yellow-2.png';
import overview_background from '../../content/overview/images/header-yellow/overview-background-yellow.png';

const img_top_banner_movement = 5;

const img_top_banner_1_top = 8;
var current_img_top_banner_1_top = img_top_banner_1_top;
const img_top_banner_1_left = 14;
var current_img_top_banner_1_left = img_top_banner_1_left;
var img_top_banner_1_is_hover = false;

const img_top_banner_2_top = 54;
var current_img_top_banner_2_top = img_top_banner_2_top;
const img_top_banner_2_left = 32;
var current_img_top_banner_2_left = img_top_banner_2_left;
var img_top_banner_2_is_hover = false;

var last_mouse_x = 0;
var last_mouse_y = 0;
var diff_mouse_x = 0;
var diff_mouse_y = 0;

const backgroundStyle = {
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
        
        setTimeout(this.showImageAnimate, 2000);
    }

    showImageAnimate() {
        var imageAnimates = document.getElementsByClassName("overview-page__top-banner--image-animate");
        for(let i=0;i<imageAnimates.length;i++) {
            imageAnimates[i].className += " show";
        }
    }
    
    handleMouseMoveTopBanner(e) {
        if(last_mouse_x != 0) {
            diff_mouse_x = (e.x - last_mouse_x) / 80;
        }

        if(last_mouse_y != 0) {
            diff_mouse_y = (e.y - last_mouse_y) / 80;
        }

        if((diff_mouse_y < 0 && (current_img_top_banner_1_top + diff_mouse_y) < 23) ||
        diff_mouse_y > 0 && (current_img_top_banner_1_top - diff_mouse_y) > 0) {
            current_img_top_banner_1_top = current_img_top_banner_1_top - diff_mouse_y;
            document.getElementsByClassName("overview-page__top-banner--image-yellow-1")[0].style.top = 
            current_img_top_banner_1_top + "%";

            current_img_top_banner_2_top = current_img_top_banner_2_top - diff_mouse_y;
            document.getElementsByClassName("overview-page__top-banner--image-yellow-2")[0].style.top = 
            current_img_top_banner_2_top+ "%";
        }

        if((diff_mouse_x > 0 && (current_img_top_banner_1_left - diff_mouse_x) > 0) ||
        (diff_mouse_x < 0 && (current_img_top_banner_1_left + diff_mouse_x) < 6)) {
            current_img_top_banner_1_left = (current_img_top_banner_1_left - diff_mouse_x);
            document.getElementsByClassName("overview-page__top-banner--image-yellow-1")[0].style.left = 
            current_img_top_banner_1_left + "%";

            current_img_top_banner_2_left= (current_img_top_banner_2_left - diff_mouse_x);
            document.getElementsByClassName("overview-page__top-banner--image-yellow-2")[0].style.left = 
            current_img_top_banner_2_left + "%";
        }

        last_mouse_x = e.x;
        last_mouse_y = e.y;
    }

    handleMouseLeaveTopBanner() {
        document.getElementsByClassName("overview-page__top-banner--image-yellow-1")[0].style.top = img_top_banner_1_top + "%";
        document.getElementsByClassName("overview-page__top-banner--image-yellow-1")[0].style.left = img_top_banner_1_left + "%";
        document.getElementsByClassName("overview-page__top-banner--image-yellow-2")[0].style.top = img_top_banner_2_top + "%";
        document.getElementsByClassName("overview-page__top-banner--image-yellow-2")[0].style.left = img_top_banner_2_left + "%";
        
        current_img_top_banner_1_top = img_top_banner_1_top;
        current_img_top_banner_1_left = img_top_banner_1_left;
        
        current_img_top_banner_2_top = img_top_banner_2_top;
        current_img_top_banner_2_left = img_top_banner_2_left;

        last_mouse_x = 0;
        last_mouse_y = 0;
        diff_mouse_x = 0;
        diff_mouse_y = 0;
    }

    render() {
        return (
        <div className="overview-page__top-section" style={ backgroundStyle }>
            <div className="overview-page__top-banner" aria-hidden="true">
                <img className='overview-page__top-banner--image-animate overview-page__top-banner--image-yellow-1' alt='' src={overview_top_1} />
                <img className='overview-page__top-banner--image-animate overview-page__top-banner--image-yellow-2' alt='' src={overview_top_2} />
            </div>
        </div>
        );
    }
}

export default HomeHeaderYellow;
