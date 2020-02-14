/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import {Text, View} from "react-native";
import {Router, Scene} from "react-native-router-flux";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import {Provider} from "react-redux";
import {createStore} from "redux";

import ChatsScreen from "./src/Screens/ChatsScreen";
import PeopleScreen from "./src/Screens/PeopleScreen";
import SettingsScreen from "./src/Screens/SettingsScreen";
import VioletScreen from "./src/Screens/VioletScreen";

import {setStore} from "./src/shared/utility";
import rootReducer from "./src/store/reducers";
import styles from "./src/styles";

class TabIcon extends React.Component {
  render() {
    const {iconName, size} = this.props;
    const color = this.props.focused ? "#222" : "#888";
    return (<View>
      <Icon
        style={{alignSelf: "center", paddingTop: 2}}
        name={iconName} size={size} color={color}/>
      <Text style={{
        ...styles.tabTitle,
        color: this.props.focused ? "black" : "gray",
      }}>{this.props.title}</Text>
    </View>);
  }
}

const store = createStore(rootReducer);
setStore(store);


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root" hideNavBar>
            <Scene
              key="tabbar" tabs={true} showLabel={false}
              tabBarStyle={{backgroundColor: "#e8e8e8"}}
              tabStyle={{backgroundColor: "bbb"}}>
              <Scene
                key="chats"
                iconName="chat" size={30}
                icon={TabIcon}
                title="Chats"
                hideNavBar>
                <Scene
                  key="chats"
                  component={ChatsScreen}
                  title="Chats"
                />
              </Scene>
              <Scene key="people"
                iconName="account-multiple" size={30}
                icon={TabIcon}
                title="People"
                hideNavBar>
                <Scene
                  key="blue"
                  component={PeopleScreen}
                  title="Blue"
                />
                <Scene
                  key="maize"
                  component={VioletScreen}
                  title="Maize"
                />
              </Scene>
            </Scene>
            <Scene
              key="settings"
              component={SettingsScreen}
              title="Settings"/>
          
          </Scene>
        </Router>
      </Provider>
    );
  }
};
