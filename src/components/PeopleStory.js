import React from "react";
import {Image, Text, View} from "react-native";
import profilePicture from "../../assets/pictures/profilePicture.jpg";
import sampleStoryPicture from "../../assets/pictures/sampleStory.jpeg";
import styles from "../styles";

const PeopleStory = ({story}) => {
  return (
    <View style={{
      marginHorizontal: 2,
      marginBottom: 8,
      height: 137,
      width: 86,
      overflow: "hidden",
      borderRadius: 16,
    }}>
      
      <Image source={sampleStoryPicture}
        style={{
          flex: 1,
          height: null,
          width: null,
          resizeMode: "contain",
        }}
      />
      
      
      <View style={{
        position: "absolute",
        zIndex: 100,
        // position:"absolute",
        left: 12,
        top: 12,
        justifyContent: "center",
        alignItems: "center",
      }}>
        <View style={{
          height: 24,
          width: 24,
          zIndex: 100,
          borderRadius: 1000,
          overflow: "hidden",
        }}>
          <Image
            source={profilePicture}
            style={styles.profilePicture}
          />
        </View>
        
        {/*Profile picture's online indicator-ring*/}
        <View style={{
          // flex: 1,
          position: "absolute",
          zIndex: 100,
          width: 36,
          height: 36,
          borderRadius: 30,
          borderWidth: 3,
          borderColor: "#0084ff",
        }}/>
      </View>
      
      <Text
        style={{
          flex: 1,
          position: "absolute",
          left: 8,
          bottom: 8,
          right: 4,
          zIndex: 120,
          fontSize: 12,
          fontWeight: "600",
          color: "white",
        }}
        numberOfLines={3}
        ellipsizeMode="tail">
        {story.name}
      </Text>
    </View>);
};

export default PeopleStory;
