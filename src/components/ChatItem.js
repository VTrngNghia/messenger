import React from "react";
import {Image, Text, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import profilePicture from "../../assets/pictures/profilePicture.jpg";
import styles from "../styles";

const seenIcon = status => {
  switch (status) {
    case "SENT":
      return <Icon name="check-circle-outline" color="#c2c2c2" size={18}/>;
    case "RECEIVED":
      return <Icon name="check-circle" color="#c2c6cc" size={18}/>;
    case "SEEN":
      return (
        <View
          style={{
            height: 16,
            width: 16,
            borderRadius: 8,
            overflow: "hidden",
          }}>
          <Image source={profilePicture}
            style={styles.profilePicture}
          />
        </View>
      );
    default:
      return null;
  }
};
const ChatItem = ({chat}) => {
  return (<View style={styles.chatListItem}>
    
    <View style={styles.lineLeft}>
      
      <View style={styles.chatProfile}>
        
        <View style={styles.profilePictureFrame}>
          <Image
            source={profilePicture}
            style={styles.profilePicture}
          />
        </View>
        
        {!chat.hasStory ? null : <View style={{
          flex: 1,
          position: "absolute",
          zIndex: 99,
          width: 60,
          height: 60,
          borderRadius: 28,
          borderWidth: 6,
          borderColor: "white",
        }}/>}
        
        {!chat.hasStory ? null : (
          
          <View style={{
            flex: 1,
            position: "absolute",
            zIndex: 100,
            width: 60,
            height: 60,
            borderRadius: 30,
            borderWidth: 3,
            borderColor: chat.isStorySeen ? "#c2c6cc" : "#0084ff",
          }}/>
        )}
        {!chat.isOnline ? null :
          <View style={styles.isOnlinePosition}>
            <View style={styles.isOnlineFrame}>
              <Icon name="checkbox-blank-circle" color="#5ad539" size={15}/>
            </View>
          </View>
        }
      </View>
      
      <View style={styles.chat}>
        <Text style={styles.chatName}>{chat.name}</Text>
        <Text style={styles.chatPreview}>{chat.preview}</Text>
      </View>
    
    </View>
    
    <View style={styles.lineRight}>
      {seenIcon(chat.seenStatus)}
    </View>
  </View>);
};

export default ChatItem;
