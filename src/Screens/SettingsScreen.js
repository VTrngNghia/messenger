import React from "react";
import {Image, ScrollView, Switch, Text, View} from "react-native";
import {Actions} from "react-native-router-flux";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import profilePicture from "../../assets/pictures/profilePicture.jpg";
import Button from "../components/Button";
import LineButton from "../components/LineButton";
import styles from "../styles";

export default class SettingsScreen extends React.Component {
  state = {
    isDark: false,
  };
  
  handleDarkModeToggle = isDark => {
    this.setState({isDark});
    console.log("isDark:", isDark);
  };
  
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            height: 80,
            paddingTop: 12,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}>
          <Button title="Done"
            style={{
              color: "#000",
              textDecorationLine: "underline",
              fontSize: 16,
              fontWeight: "600",
            }}
            onPress={() => Actions.pop()}/>
        </View>
        
        <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
          <View style={styles.settingsTop}>
            <View
              style={{
                height: 120,
                width: 120,
                borderRadius: 60,
                overflow: "hidden",
                marginBottom: 8,
              }}>
              <Image
                source={profilePicture}
                style={{
                  flex: 1, width: null,
                  height: null, resizeMode: "center",
                }}
              />
            </View>
            <Text style={{
              fontSize: 24,
              fontWeight: "700",
            }}>Nghia Vu</Text>
          </View>
          
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
            <View style={{
              flexDirection: "row",
              alignItems: "center",
            }}>
              <View style={{
                height: 42,
                width: 42,
                borderRadius: 21,
                backgroundColor: "black",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <Icon name="brightness-3" size={28} color="white"
                  style={{marginTop: 4, marginLeft: 1}}/>
              </View>
              <Text style={styles.settingsLineTitle}>Brightness</Text>
            </View>
            <Switch value={this.state.isDark}
              onValueChange={isDark => this.handleDarkModeToggle(isDark)}/>
          </View>
          
          <Text style={styles.sectionTitle}>PROFILE</Text>
          <LineButton iconName="google-circles" iconColor="#5ad539"
            title="Active status" enderText="On"/>
          <LineButton iconName="at" iconColor="#ff294d"
            title="Username" enderText="Set username"/>
          <LineButton iconName="phone" iconColor="#0084ff"
            title="Phone" enderText="+84 11 2222 333"/>
          
          <Text style={styles.sectionTitle}>PREFERENCES</Text>
          <LineButton iconName="bell" iconColor="#8a54ff"
            title="Notifications & Sounds" enderText="On"/>
          <LineButton iconName="account-multiple" iconColor="#00bfff"
            title="People"/>
          <LineButton iconName="chat" iconColor="#131ca8"
            title="Message Settings"/>
          <LineButton iconName="content-copy" iconColor="#0084ff"
            title="Story"/>
          <LineButton iconName="lock" iconColor="#000000"
            title="Secret Conversations"/>
          <LineButton iconName="chart-donut" iconColor="#5ad539"
            title="Data and Storage"/>
          <LineButton iconName="alpha-m" iconColor="#131ca8"
            title="M Assistant"/>
          <LineButton iconName="emoticon-happy-outline" iconColor="#ff4186"
            title="Emoji"/>
        </ScrollView>
      </View>
    );
  };
}

// export default SettingsScreen;
