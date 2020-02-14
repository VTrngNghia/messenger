import React from "react";
import {Image, Text, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import profilePicture from "../../assets/pictures/profilePicture.jpg";
import styles from "../styles";

const Story = ({story}) => {
  return (
    <View style={{
      width: 72,
      marginHorizontal: 4,
      justifyContent: "center",
      alignItems: "center",
    }}>
      <View style={styles.chatProfile}>
        
        <View style={styles.profilePictureFrame}>
          <Image
            source={profilePicture}
            style={styles.profilePicture}
          />
        </View>
        
        {!story.hasStory ? null : <View style={{
          flex: 1,
          position: "absolute",
          zIndex: 99,
          width: 60,
          height: 60,
          borderRadius: 28,
          borderWidth: 6,
          borderColor: "white",
        }}/>}
        
        {!story.hasStory ? null : (
          
          <View style={{
            flex: 1,
            position: "absolute",
            zIndex: 100,
            width: 60,
            height: 60,
            borderRadius: 30,
            borderWidth: 3,
            borderColor: story.isStorySeen ? "#c2c6cc" : "#0084ff",
          }}/>
        )}
        
        {!story.isOnline ? null :
          <View style={styles.isOnlinePosition}>
            <View style={styles.isOnlineFrame}>
              <Icon name="checkbox-blank-circle" color="#5ad539" size={15}/>
            </View>
          </View>
        }
      </View>
      <Text
        style={{
          marginTop: 4,
        }}
        numberOfLines={1}
        ellipsizeMode="tail">
        {story.name}
      </Text>
    </View>);
};

export default Story;
