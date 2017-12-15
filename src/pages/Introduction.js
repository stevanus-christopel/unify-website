import React from 'react';
import { Link } from 'react-router';

class Introduction extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    document.title = 'Tokopedia Unify Design System';
  }

  render() {
    const imageTop = require('../content/introduction/images/image-top.svg');
    const iconConsistent = require('../content/introduction/images/icon-consistent.svg');
    const iconSimple = require('../content/introduction/images/icon-simple.svg');
    const iconIntuitive = require('../content/introduction/images/icon-intuitive.svg');
    const imageBottomLeft = require('../content/introduction/images/image-bottom-left.png');
    const imageBottomRight = require('../content/introduction/images/image-bottom-right.png');

    return (
      <div>
        <div className="introduction-page__top">
          <div className="introduction-page__image-top">
            <img alt='' src={imageTop} />
            <h4 className="introduction-page__title">Introduction</h4>
            <h1 className="introduction-page__subtitle">Design Concept</h1>
          </div>
        </div>

        <main id="maincontent" role="main" aria-labelledby="page-title" className="introduction-page" tabIndex="-1">
          <div className="introduction-page__content">
            <div className="introduction-page__content-row">
              <div className="introduction-page__content-column">
                <div className="introduction-page__content-column-image">
                  <img alt='' src={iconConsistent} />
                </div>
                <h5>First Stage</h5>
                <h2>Consistent</h2>
                <p>Consistency is one of the molecules of the Design DNA. It is highly useful and makes the world a better place.  Usability and learnability improve when similar elements have consistent look and function in similar way. When consistency is present in your design, people can transfer knowledge to new contexts and learn new things quickly without pain. This way they can focus on executing the task and not learning how the product UI works every time they switch the context.</p>
                <div className="introduction-page__content-column-number">01.</div>
              </div>
              <div className="introduction-page__content-column">
                <div className="introduction-page__content-column-image">
                  <img alt='' src={iconSimple} />
                </div>
                <h5>Second Stage</h5>
                <h2>Simple</h2>
                <p>Less, but Better. Simple design isn’t just about subtracting things from a design. It has to improve the design’s overall effectiveness. The aim is to strip away the “non-essentials” of a design, to return it to a pure, simple state. Your design needs to communicate the intent of your content clearly. If your viewer has the wrong idea of what your content is trying to tell them, your design isn’t clear enough. </p>
                <div className="introduction-page__content-column-number">02.</div>
              </div>
              <div className="introduction-page__content-column">
                <div className="introduction-page__content-column-image">
                  <img alt='' src={iconIntuitive} />
                </div>
                <h5>Third Stage</h5>
                <h2>Intuitive</h2>
                <p>Design does not become intuitive by magic. When we experience a design as intuitive, it is because we have encountered something like it before. Intuitive is when users understand behaviour and effect without use of reason, experimentation, assistance, or special training. For such intuition to be possible requires prior knowledge, from experience in the real world. So, for example, if something looks like a push button, we know from the real world that we can push it to make something happen.</p>
                <div className="introduction-page__content-column-number">03.</div>
              </div>
            </div>
          </div>

          <img className='introduction-page__bottom-left-image' src={imageBottomLeft} />
          <img className='introduction-page__bottom-right-image' src={imageBottomRight} />
        </main>
      </div>
    );
  }
}

export default Introduction;
