import React from "react";
import {Animated, Text, View} from "react-native";
import {Actions} from "react-native-router-flux";
import profilePicture from "../../assets/pictures/profilePicture.jpg";
import styles from "../styles";
import Button from "./Button";

class Header extends React.Component {
  
  animatedMarginTop = new Animated.Value(0);
  animatedOpacity = new Animated.Value(1);
  
  animateUp = () => {
    Animated.parallel([
      Animated.timing(this.animatedMarginTop, {
        duration: 200,
        toValue: -72,
      }),
      Animated.timing(this.animatedOpacity, {
        duration: 200,
        toValue: 0,
      }),
    ]).start();
  };
  
  animateDown = () => {
    Animated.timing(this.animatedMarginTop, {
      duration: 200,
      toValue: 0,
    }).start();
    Animated.timing(this.animatedOpacity, {
      duration: 200,
      toValue: 1,
    }).start();
  };
  
  render() {
    
    return (
      <Animated.View style={{
        ...styles.header, ...this.props.style,
        marginTop: this.animatedMarginTop,
        opacity: this.animatedOpacity,
      }}>
        
        {/* Left-side buttons */}
        <View style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}>
          <Button imgSource={profilePicture}
            onPress={() => Actions.settings()}/>
          <Text style={styles.screenTitle}>{this.props.title}</Text>
        </View>
        
        {/* Right-side buttons */}
        <View style={{
          flexDirection: "row",
          alignItems: "center",
        }}>
          <Button icon={this.props.icons && this.props.icons[0]} size={40}
            align="flex-end"/>
          <Button icon={this.props.icons && this.props.icons[1]} size={40}
            align="flex-end"/>
        </View>
      </Animated.View>);
  }
}

export default Header;
