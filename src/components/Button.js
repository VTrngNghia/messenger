import React from "react";
import {Animated, Image, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "../styles";

const AnimatedButton = Animated.createAnimatedComponent(TouchableOpacity);

class Button extends React.Component {
  render() {
    return (
      <AnimatedButton {...this.props}>
        
        {this.props.icon &&
        <View
          style={{
            marginLeft: 12,
            height: this.props.size,
            width: this.props.size,
            backgroundColor: "#f5f5f5",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: this.props.size / 2,
          }}>
          <Icon name={this.props.icon} size={this.props.size / 1.5}
            color="#222"/>
        </View>}
        
        {this.props.imgSource &&
        <View style={styles.mainProfilePictureFrame}>
          <Image source={this.props.imgSource}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: "contain",
            }}/>
        </View>}
        
        {this.props.title &&
        <Animated.Text style={{
          ...this.props.titleStyle,
        }}>
          {this.props.title}
        </Animated.Text>}
      </AnimatedButton>
    );
  }
}


export default Button;
