// @flow

import React, { Component } from 'react';
import { View, Text, Image, AppRegistry } from 'react-native';
import { BlurView } from 'react-native-blur';

export default class TestBlurOpacity extends Component {
  constructor(props){
    super(props);
    this.state = { full_blur_visibility: true }
  }

  _handleOpacityToggle = () => {
    this.setState({full_blur_visibility: !this.state.full_blur_visibility})
  }

  render() {
    const { full_blur_visibility } = this.state;
    const blur_opacity = full_blur_visibility ? 1 : 0.9;

    return (
      <View style={{flex: 1}}>
        <View style={{position:'absolute', top:0, left:0, right:0, bottom:0}}>
          <Image
            style={{position:'absolute', left:0, right:0, top:0, bottom:0}}
            source={{uri: 'https://www.placecage.com/200/300'}} />
          <BlurView style={{flex:1, alignSelf:'stretch', opacity: blur_opacity}} blurType="dark" blurAmount={10} />
        </View>
        <Text style={{padding: 20}} onPress={this._handleOpacityToggle}>
          Toggle Opacity!
          Current Blur Opacity is {blur_opacity}.
        </Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('TestBlurOpacity', () => TestBlurOpacity);
