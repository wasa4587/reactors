/**
  * @module reactors
  * @name ScrollView
  * @type Component
  * @flow
**/

import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import Reactors from 'reactors';

export default class ReactorsScrollView extends Component {
  render() {
    switch (Reactors.platform) {
    default:
      throw new Error('Unknown platform: ' + Reactors.platform);
    case 'mobile':
      return this._renderMobile();
    case 'web':
      return this._renderWeb();
    }
  }

  _renderMobile() {
    return <ScrollView {...this.props}>{this.props.children}</ScrollView>;
  }

  _renderWeb() {
    const style = {
      overflow: 'auto',
    };
    return (
      <section
        style={style}
        {...this.props}
        className={'reactors$ScrollView'}
        >
        {this.props.children}
      </section>
    );
  }
}