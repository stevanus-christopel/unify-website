import React, { Component } from 'react';

import overview_top_1 from '../../content/overview/images/header-white/overview-top-white-1.png';
import overview_top_2 from '../../content/overview/images/header-white/overview-top-white-2.png';
import overview_top_3 from '../../content/overview/images/header-white/overview-top-white-3.png';
import overview_top_4 from '../../content/overview/images/header-white/overview-top-white-4.png';
import overview_top_5 from '../../content/overview/images/header-white/overview-top-white-5.png';
import overview_top_6 from '../../content/overview/images/header-white/overview-top-white-6.png';
import overview_top_7 from '../../content/overview/images/header-white/overview-top-white-7.png';
import overview_top_8 from '../../content/overview/images/header-white/overview-top-white-8.png';

const backgroundStyle = {
    backgroundImage: "initial",
    backgroundColor: "#FFF"
}

const img_top_banner_1_top = -40;
var current_img_top_banner_1_top = img_top_banner_1_top;
const img_top_banner_1_left = 20;
var current_img_top_banner_1_left = img_top_banner_1_left;

const img_top_banner_2_top = -14;
var current_img_top_banner_2_top = img_top_banner_2_top;
const img_top_banner_2_left = 50;
var current_img_top_banner_2_left = img_top_banner_2_left;

const img_top_banner_3_bottom = -25;
var current_img_top_banner_3_bottom = img_top_banner_3_bottom;
const img_top_banner_3_right = 16;
var current_img_top_banner_3_right = img_top_banner_3_right;

const img_top_banner_7_top = 6;
var current_img_top_banner_7_top = img_top_banner_7_top;
const img_top_banner_7_left = 22;
var current_img_top_banner_7_left = img_top_banner_7_left;

const img_top_banner_8_bottom = 10;
var current_img_top_banner_8_bottom = img_top_banner_8_bottom;
const img_top_banner_8_left = 22;
var current_img_top_banner_8_left = img_top_banner_8_left;

const img_top_banner_9_bottom = 62;
var current_img_top_banner_9_bottom = img_top_banner_9_bottom;
const img_top_banner_9_right = 28;
var current_img_top_banner_9_right = img_top_banner_9_right;

var last_mouse_x = 0;
var last_mouse_y = 0;
var diff_mouse_x = 0;
var diff_mouse_y = 0;

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
            diff_mouse_x = (e.x - last_mouse_x) / 8;
        }

        if(last_mouse_y != 0) {
            diff_mouse_y = (e.y - last_mouse_y) / 16;
        }

        if((diff_mouse_y < 0 && (current_img_top_banner_3_bottom + diff_mouse_y) > -45) ||
        diff_mouse_y > 0 && (current_img_top_banner_1_top - diff_mouse_y) > -60) {
            current_img_top_banner_1_top = current_img_top_banner_1_top - diff_mouse_y;
            document.getElementsByClassName("overview-page__top-banner--image-white-1")[0].style.top = 
            current_img_top_banner_1_top + "%";

            current_img_top_banner_2_top = current_img_top_banner_2_top - diff_mouse_y;
            document.getElementsByClassName("overview-page__top-banner--image-white-2")[0].style.top = 
            current_img_top_banner_2_top+ "%";

            current_img_top_banner_3_bottom = current_img_top_banner_3_bottom + diff_mouse_y;
            document.getElementsByClassName("overview-page__top-banner--image-white-3")[0].style.bottom = 
            current_img_top_banner_3_bottom + "%";

            current_img_top_banner_7_top = current_img_top_banner_7_top - diff_mouse_y;
            document.getElementsByClassName("overview-page__top-banner--image-white-7")[0].style.top = 
            current_img_top_banner_7_top + "%";

            current_img_top_banner_8_bottom = current_img_top_banner_8_bottom + diff_mouse_y;
            document.getElementsByClassName("overview-page__top-banner--image-white-8")[0].style.bottom = 
            current_img_top_banner_8_bottom + "%";

            current_img_top_banner_9_bottom = current_img_top_banner_9_bottom + diff_mouse_y;
            document.getElementsByClassName("overview-page__top-banner--image-white-9")[0].style.bottom = 
            current_img_top_banner_9_bottom + "%";
        }

        if((diff_mouse_x > 0 && (current_img_top_banner_1_left - diff_mouse_x) > 0.1875) ||
        (diff_mouse_x < 0 && (current_img_top_banner_3_right + diff_mouse_x) > -0.875)) {
            current_img_top_banner_1_left = (current_img_top_banner_1_left - diff_mouse_x);
            document.getElementsByClassName("overview-page__top-banner--image-white-1")[0].style.left = 
            current_img_top_banner_1_left + "%";

            current_img_top_banner_2_left= (current_img_top_banner_2_left - diff_mouse_x);
            document.getElementsByClassName("overview-page__top-banner--image-white-2")[0].style.left = 
            (current_img_top_banner_2_left - diff_mouse_x) + "%";

            current_img_top_banner_3_right= (current_img_top_banner_3_right + diff_mouse_x);
            document.getElementsByClassName("overview-page__top-banner--image-white-3")[0].style.right = 
            current_img_top_banner_3_right + "%";

            current_img_top_banner_7_left = (current_img_top_banner_7_left - diff_mouse_x);
            document.getElementsByClassName("overview-page__top-banner--image-white-7")[0].style.left = 
            current_img_top_banner_7_left + "%";

            current_img_top_banner_8_left= (current_img_top_banner_8_left - diff_mouse_x);
            document.getElementsByClassName("overview-page__top-banner--image-white-8")[0].style.left = 
            current_img_top_banner_8_left + "%";

            current_img_top_banner_9_right= (current_img_top_banner_9_right + diff_mouse_x);
            document.getElementsByClassName("overview-page__top-banner--image-white-9")[0].style.right = 
            current_img_top_banner_9_right + "%";
        }

        last_mouse_x = e.x;
        last_mouse_y = e.y;
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
        
        current_img_top_banner_1_top = img_top_banner_1_top;
        current_img_top_banner_1_left = img_top_banner_1_left;
        
        current_img_top_banner_2_top = img_top_banner_2_top;
        current_img_top_banner_2_left = img_top_banner_2_left;
        
        current_img_top_banner_3_bottom = img_top_banner_3_bottom;
        current_img_top_banner_3_right = img_top_banner_3_right;
        
        current_img_top_banner_7_top = img_top_banner_7_top;
        current_img_top_banner_7_left = img_top_banner_7_left;
        
        current_img_top_banner_8_bottom = img_top_banner_8_bottom;
        current_img_top_banner_8_left = img_top_banner_8_left;
        
        current_img_top_banner_9_bottom = img_top_banner_9_bottom;
        current_img_top_banner_9_right = img_top_banner_9_right;

        last_mouse_x = 0;
        last_mouse_y = 0;
        diff_mouse_x = 0;
        diff_mouse_y = 0;
    }

    render() {
        return (
            <div className="overview-page__top-section" style={ backgroundStyle }>
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
                </div>
            </div>
        );
    }
}

export default HomeHeaderWhite;
