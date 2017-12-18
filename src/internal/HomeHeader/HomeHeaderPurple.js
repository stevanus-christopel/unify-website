import React, { Component } from 'react';

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
var current_img_top_banner_1_top = img_top_banner_1_top;
const img_top_banner_1_left = 15;
var current_img_top_banner_1_left = img_top_banner_1_left;
var img_top_banner_1_is_hover = false;

const img_top_banner_2_bottom = 20;
var current_img_top_banner_2_bottom = img_top_banner_2_bottom;
const img_top_banner_2_left = 18;
var current_img_top_banner_2_left = img_top_banner_2_left;
var img_top_banner_2_is_hover = false;

const img_top_banner_3_bottom = 22;
var current_img_top_banner_3_bottom = img_top_banner_3_bottom;
const img_top_banner_3_left = 22;
var current_img_top_banner_3_left = img_top_banner_3_left;
var img_top_banner_3_is_hover = false;

const img_top_banner_4_bottom = 22;
var current_img_top_banner_4_bottom = img_top_banner_4_bottom;
const img_top_banner_4_left = 32;
var current_img_top_banner_4_left  = img_top_banner_4_left;
var img_top_banner_4_is_hover = false;

const img_top_banner_5_top = 12;
var current_img_top_banner_5_top = img_top_banner_5_top;
const img_top_banner_5_right = 38;
var current_img_top_banner_5_right = img_top_banner_5_right;
var img_top_banner_5_is_hover = false;

const img_top_banner_6_top = 16;
var current_img_top_banner_6_top = img_top_banner_6_top;
const img_top_banner_6_right = 19;
var current_img_top_banner_6_right = img_top_banner_6_right;
var img_top_banner_6_is_hover = false;

const img_top_banner_7_top = 18;
var current_img_top_banner_7_top = img_top_banner_7_top;
const img_top_banner_7_right = 18;
var current_img_top_banner_7_right = img_top_banner_7_right;
var img_top_banner_7_is_hover = false;

const img_top_banner_8_bottom = 0;
var current_img_top_banner_8_bottom = img_top_banner_8_bottom;
const img_top_banner_8_right = 0;
var current_img_top_banner_8_right = img_top_banner_8_right;
var img_top_banner_8_is_hover = false;

var last_mouse_x = 0;
var last_mouse_y = 0;
var diff_mouse_x = 0;
var diff_mouse_y = 0;

const backgroundStyle = {
    backgroundImage: "url(" + overview_background + ")"
}

class HomeHeaderPurple extends Component {

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
            diff_mouse_x = (e.x - last_mouse_x) / 32;
        }

        if(last_mouse_y != 0) {
            diff_mouse_y = (e.y - last_mouse_y) / 8;
        }

        if((diff_mouse_y < 0 && (current_img_top_banner_1_top - diff_mouse_y) < 30) ||
        diff_mouse_y > 0 && (current_img_top_banner_1_top - diff_mouse_y) > 4) {
            current_img_top_banner_1_top = current_img_top_banner_1_top - diff_mouse_y;
            document.getElementsByClassName("overview-page__top-banner--image-purple-1")[0].style.top = 
            current_img_top_banner_1_top + "%";

            current_img_top_banner_2_bottom = current_img_top_banner_2_bottom + diff_mouse_y;
            document.getElementsByClassName("overview-page__top-banner--image-purple-2")[0].style.bottom = 
            current_img_top_banner_2_bottom + "%";

            current_img_top_banner_3_bottom = current_img_top_banner_3_bottom + diff_mouse_y;
            document.getElementsByClassName("overview-page__top-banner--image-purple-3")[0].style.bottom = 
            current_img_top_banner_3_bottom + "%";

            current_img_top_banner_4_bottom = current_img_top_banner_4_bottom + diff_mouse_y;
            document.getElementsByClassName("overview-page__top-banner--image-purple-4")[0].style.bottom = 
            current_img_top_banner_4_bottom + "%";

            current_img_top_banner_5_top = current_img_top_banner_5_top - diff_mouse_y;
            document.getElementsByClassName("overview-page__top-banner--image-purple-5")[0].style.top = 
            current_img_top_banner_5_top + "%";

            current_img_top_banner_6_top = current_img_top_banner_6_top - diff_mouse_y;
            document.getElementsByClassName("overview-page__top-banner--image-purple-6")[0].style.top = 
            current_img_top_banner_6_top + "%";

            current_img_top_banner_7_top = current_img_top_banner_7_top - diff_mouse_y;
            document.getElementsByClassName("overview-page__top-banner--image-purple-7")[0].style.top = 
            current_img_top_banner_7_top + "%";

            if(current_img_top_banner_8_bottom + diff_mouse_y <= 0) {
                current_img_top_banner_8_bottom = current_img_top_banner_8_bottom + diff_mouse_y;
                document.getElementsByClassName("overview-page__top-banner--image-purple-8")[0].style.bottom = 
                current_img_top_banner_8_bottom + "%";
            }
        }

        if((diff_mouse_x > 0 && (current_img_top_banner_1_left - diff_mouse_x) > 4) ||
        (diff_mouse_x < 0 && (current_img_top_banner_1_left - diff_mouse_x) < 32)) {
            current_img_top_banner_1_left= (current_img_top_banner_1_left - diff_mouse_x);
            document.getElementsByClassName("overview-page__top-banner--image-purple-1")[0].style.left = 
            current_img_top_banner_1_left + "%";

            current_img_top_banner_2_left= (current_img_top_banner_2_left - diff_mouse_x);
            document.getElementsByClassName("overview-page__top-banner--image-purple-2")[0].style.left = 
            current_img_top_banner_2_left + "%";

            current_img_top_banner_3_left= (current_img_top_banner_3_left - diff_mouse_x);
            document.getElementsByClassName("overview-page__top-banner--image-purple-3")[0].style.left = 
            current_img_top_banner_3_left + "%";

            current_img_top_banner_4_left= (current_img_top_banner_4_left - diff_mouse_x);
            document.getElementsByClassName("overview-page__top-banner--image-purple-4")[0].style.left = 
            current_img_top_banner_4_left + "%";

            current_img_top_banner_5_right = (current_img_top_banner_5_right + diff_mouse_x);
            document.getElementsByClassName("overview-page__top-banner--image-purple-5")[0].style.right = 
            current_img_top_banner_5_right + "%";

            current_img_top_banner_6_right = (current_img_top_banner_6_right + diff_mouse_x);
            document.getElementsByClassName("overview-page__top-banner--image-purple-6")[0].style.right = 
            current_img_top_banner_6_right + "%";

            current_img_top_banner_7_right = (current_img_top_banner_7_right + diff_mouse_x);
            document.getElementsByClassName("overview-page__top-banner--image-purple-7")[0].style.right = 
            current_img_top_banner_7_right + "%";

            if((current_img_top_banner_8_right + diff_mouse_x) <= 0 &&
            (current_img_top_banner_8_right + diff_mouse_x) >= -10) {
                current_img_top_banner_8_right = (current_img_top_banner_8_right + diff_mouse_x);
                document.getElementsByClassName("overview-page__top-banner--image-purple-8")[0].style.right = 
                current_img_top_banner_8_right + "%";
            }
        }

        last_mouse_x = e.x;
        last_mouse_y = e.y;
    }

    handleMouseLeaveTopBanner() {
        document.getElementsByClassName("overview-page__top-banner--image-purple-1")[0].style.top = img_top_banner_1_top + "%";
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
        
        current_img_top_banner_1_top = img_top_banner_1_top;
        current_img_top_banner_1_left = img_top_banner_1_left;
        current_img_top_banner_2_bottom  = img_top_banner_2_bottom ;
        current_img_top_banner_2_left = img_top_banner_2_left;
        current_img_top_banner_3_bottom = img_top_banner_3_bottom;
        current_img_top_banner_3_left = img_top_banner_3_left;
        current_img_top_banner_4_bottom = img_top_banner_4_bottom;
        current_img_top_banner_4_left = img_top_banner_4_left;
        current_img_top_banner_5_top = img_top_banner_5_top;
        current_img_top_banner_5_right = img_top_banner_5_right;
        current_img_top_banner_6_top = img_top_banner_6_top;
        current_img_top_banner_6_right = img_top_banner_6_right;
        current_img_top_banner_7_top = img_top_banner_7_top;
        current_img_top_banner_7_right = img_top_banner_7_right;
        current_img_top_banner_8_bottom = img_top_banner_8_bottom;
        current_img_top_banner_8_right = img_top_banner_8_right;

        last_mouse_x = 0;
        last_mouse_y = 0;
        diff_mouse_x = 0;
        diff_mouse_y = 0;
    }

    render() {
        return (
            <div className="overview-page__top-section" style={ backgroundStyle }>
                <div className="overview-page__top-banner" aria-hidden="true">
                    <img className='overview-page__top-banner--image-animate overview-page__top-banner--image-purple-1' alt='' src={overview_top_1} />
                    <img className='overview-page__top-banner--image-animate overview-page__top-banner--image-purple-2' alt='' src={overview_top_2} />
                    <img className='overview-page__top-banner--image-animate overview-page__top-banner--image-purple-3' alt='' src={overview_top_3} />
                    <img className='overview-page__top-banner--image-animate overview-page__top-banner--image-purple-4' alt='' src={overview_top_4} />
                    <img className='overview-page__top-banner--image-animate overview-page__top-banner--image-purple-5' alt='' src={overview_top_5} />
                    <img className='overview-page__top-banner--image-animate overview-page__top-banner--image-purple-6' alt='' src={overview_top_6} />
                    <img className='overview-page__top-banner--image-animate overview-page__top-banner--image-purple-7' alt='' src={overview_top_7} />
                    <img className='overview-page__top-banner--image-animate overview-page__top-banner--image-purple-8' alt='' src={overview_top_8} />
                </div>
            </div>
        );
    }
}

export default HomeHeaderPurple;
