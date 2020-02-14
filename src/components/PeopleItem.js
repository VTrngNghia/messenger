import React from "react";
import {Image, Text, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import profilePicture from "../../assets/pictures/profilePicture.jpg";
import styles from "../styles";

const PeopleItem = ({person}) => {
  return (
    <View style={{...styles.peopleListItem, justifyContent: "flex-start"}}>
      
      <View style={{
        ...styles.lineLeft,
        flex: 1,
      }}>
        <View style={{
          ...styles.profilePictureFrame,
          width: 40, height: 40,
        }}>
          <Image
            source={profilePicture}
            style={styles.profilePicture}
          />
        </View>
      
      </View>
      
      <View style={{
        flex: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
      }}>
        <Text style={{
          fontSize: 18,
          fontWeight: "700",
        }}>
          {person.name}
        </Text>
        
        <View style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: "#f0f0f0",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <Icon name="hand" size={18} color="black"/>
        </View>
      </View>
    
    </View>
  );
};

export default PeopleItem;
