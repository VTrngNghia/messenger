import React, {Component} from "react";
import {Animated, TextInput, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Button from "./Button";

const ANIMATED_WIDTH = 66;

export default class SearchBar extends Component {
  
  // animatedHeaderMarginTop = new Animated.Value(0);
  // animatedHeaderOpacity = new Animated.Value(1);
  
  animatedMarginRight = new Animated.Value(-ANIMATED_WIDTH);
  animatedOpacity = new Animated.Value(0);
  
  animateFocus = () => {
    
    Animated.timing(this.animatedMarginRight, {
      duration: 200,
      toValue: 0,
    }).start();
    Animated.timing(this.animatedOpacity, {
      duration: 200,
      toValue: 1,
    }).start();
    
  };
  
  animateBlur = () => {
    Animated.timing(this.animatedMarginRight, {
      duration: 200,
      toValue: -ANIMATED_WIDTH,
    }).start();
    Animated.timing(this.animatedOpacity, {
      duration: 200,
      toValue: 0,
    }).start();
  };
  
  render() {
    
    return (
      <View
        style={{
          marginBottom: 12,
          flexDirection: "row",
        }}>
        
        
        <View
          style={{
            flex: 1,
            height: 36,
            backgroundColor: "#f2f2f2",
            borderRadius: 8,
            flexDirection: "row",
            alignItems: "center",
          }}>
          <Icon
            onPress={() => this.searchBar.focus()}
            name="magnify" size={24} color="#8e8e8e" style={{
            marginHorizontal: 4,
            marginTop: 4,
          }}/>
          <TextInput
            onFocus={this.props.onSearchBarFocus}
            onBlur={this.props.onSearchBarBlur}
            ref={ref => this.searchBar = ref}
            placeholder="Search"
            style={{
              flex: 1,
              color: "#8e8e8e",
              fontSize: 20,
            }}/>
        </View>
        
        
        <Button title="Cancel" onPress={() => this.searchBar.blur()}
          style={{
            justifyContent: "flex-end",
            alignItems: "center",
            flexDirection: "row",
            marginRight: this.animatedMarginRight,
            opacity: this.animatedOpacity,
            width: ANIMATED_WIDTH,
            
          }}
          titleStyle={{
            color: "black",
            textDecorationLine: "underline",
            fontSize: 15,
            fontWeight: "400",
          }}/>
      
      </View>
    );
  }
}
