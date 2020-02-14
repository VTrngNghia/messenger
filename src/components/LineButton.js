import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "../styles";

const LineButton = props => {
  const {iconName, iconColor, title, enderText} = props;
  return (
    <TouchableOpacity {...props} style={styles.settingsLineButton}>
      <View style={{
        flexDirection: "row",
        alignItems: "center",
      }}>
        <View style={{
          height: 42,
          width: 42,
          borderRadius: 21,
          backgroundColor: iconColor,
          alignItems: "center",
          justifyContent: "center",
        }}>
          <Icon name={iconName} size={28} color="white"
            style={{marginTop: 4, marginLeft: 1}}/>
        </View>
        <Text style={styles.settingsLineTitle}>
          {title}
        </Text>
      </View>
      
      <View style={styles.settingsLineEnder}>
        <Text style={{
          color: "#ccc",
          fontSize: 16,
          fontWeight: "500",
        }}>
          {enderText}
        </Text>
        <Icon name="chevron-right" size={32} color="#ccc"
          style={{marginRight: -12}}/>
      </View>
    </TouchableOpacity>);
};


export default LineButton;
