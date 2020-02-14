import React from "react";
import {FlatList, Text, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import profilePicture from "../../assets/pictures/profilePicture.jpg";
import ChatItem from "../components/ChatItem";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Story from "../components/Story";
import styles from "../styles";


class ChatsScreen extends React.Component {
  state = {
    chats: [
      {
        id: "0",
        name: "Bi",
        preview: "alo",
        profilePicture: profilePicture,
        isOnline: false,
        seenStatus: "SENT",
        hasStory: true,
        isStorySeen: true,
      },
      {
        id: "2",
        name: "Thang Chu",
        preview: "blo",
        profilePicture: profilePicture,
        isOnline: true,
        seenStatus: "RECEIVED",
        hasStory: true,
        isStorySeen: false,
      },
      {
        id: "3",
        name: "Hieu Finn",
        preview: "clo",
        profilePicture: profilePicture,
        isOnline: true,
        seenStatus: "SEEN",
        hasStory: false,
        isStorySeen: true,
      },
    ],
  };
  
  handleFocusBarUp = () => {
    this.SearchBar.animateFocus();
    this.Header.animateUp();
  };
  handleFocusBarDown = () => {
    this.SearchBar.animateBlur();
    this.Header.animateDown();
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Header ref={ref => this.Header = ref} title="Chats"
          icons={["camera", "pencil-box-outline"]}
        />
        
        <FlatList
          data={this.state.chats}
          keyExtractor={chat => chat.id}
          
          renderItem={({item}) => <ChatItem
            key={item.id}
            chat={item}
          />}
          
          ListHeaderComponent={(<View>
            
            <SearchBar ref={ref => this.SearchBar = ref}
              onSearchBarFocus={this.handleFocusBarUp}
              onSearchBarBlur={this.handleFocusBarDown}
            />
            
            <FlatList
              horizontal
              data={this.state.chats}
              keyExtractor={chat => chat.id}
              renderItem={({item}) => <Story
                key={item.id}
                story={item}
              />}
              ListHeaderComponent={<View style={{
                padding: 2,
                width: 72,
                marginRight: 4,
                justifyContent: "center",
                alignItems: "center",
              }}>
                <View style={{
                  width: 60,
                  height: 60,
                  borderRadius: 1000,
                  backgroundColor: "#f2f2f2",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                  <Icon style={{marginTop: 4, marginLeft: 1}} name="plus"
                    size={36} color="black"/>
                </View>
                <Text
                  style={{marginTop: 4, color: "#999"}}
                  numberOfLines={1}
                  ellipsizeMode="tail">
                  Your Story
                </Text>
              </View>}
            />
          </View>)}
        />
      </View>
    );
  }
}

export default ChatsScreen;
