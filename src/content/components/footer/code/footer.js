import React, { PureComponent } from 'react';
import Footer from 'unify-react-mobile/build/Footer';

class ComponentDemo extends PureComponent {
  state = {
    lang: 'id'
  }

  handleLanguage = () => {
    if(this.state.lang === 'id') {
      this.setState({
        lang: 'en'
      })
    } else {
      this.setState({
        lang: 'id'
      })
    }
  }

  render() {
    return(
      <div>
        <Footer
          lang={this.state.lang}
          androidURL='#'
          iosURL='#'
          contactUsURL='https://tokopedia.com/contact-us'
          desktopURL='https://tokopedia.com'
          termConditionsURL='https://m.tokopedia.com/terms'
          privacyURL='https://m.tokopedia.com/privacy'
          onLanguageChange={this.handleLanguage}
        />
      </div>
    )
  }
}

export default <ComponentDemo />;
