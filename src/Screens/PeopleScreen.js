import React from "react";
import {FlatList, View} from "react-native";
import profilePicture from "../../assets/pictures/profilePicture.jpg";
import Header from "../components/Header";
import PeopleItem from "../components/PeopleItem";

import PeopleStory from "../components/PeopleStory";
import SearchBar from "../components/SearchBar";
import styles from "../styles";

export default class PeopleScreen extends React.Component {
  state = {
    people: [
      {
        id: "0",
        name: "Okulele HImellyyyyy",
        preview: "alo",
        profilePicture: profilePicture,
        isOnline: true,
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
  
  render() {
    
    return (
      <View style={styles.container}>
        <Header title="People" icons={["chat-processing", "account-plus"]}/>
        <FlatList
          data={this.state.people}
          keyExtractor={person => person.id}
          renderItem={({item}) => <PeopleItem
            key={item.id}
            person={item}/>}
          ListHeaderComponent={(<View>
            <SearchBar/>
            <FlatList
              horizontal
              data={this.state.people}
              keyExtractor={chat => chat.id}
              renderItem={({item}) => <PeopleStory
                key={item.id}
                story={item}
              />}/>
          </View>)}
        
        />
      </View>
    );
  };
}
