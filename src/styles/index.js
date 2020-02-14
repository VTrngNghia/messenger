import {StyleSheet} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "white",
  },
  body: {
    fontSize: 20,
    color: "black",
    backgroundColor: Colors.white,
    overflow: "scroll",
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: "absolute",
    right: 0,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    marginVertical: 12,
    fontSize: 14,
    fontWeight: "600",
    color: "#999",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: Colors.dark,
  },
  highlight: {
    fontWeight: "700",
  },
  header: {
    backgroundColor: "white",
    height: 100,
    paddingTop: 40,
    paddingBottom: 16,
    // paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  screenTitle: {
    marginLeft: 12,
    fontSize: 32,
    fontWeight: "800",
  },
  tabTitle: {
    marginTop: -5,
    fontSize: 10,
    fontWeight: "500",
  },
  buttonText: {
    alignSelf: "center",
    color: "#000",
  },
  mainProfilePictureFrame: {
    height: 40,
    width: 40,
    borderRadius: 20,
    overflow: "hidden",
  },
  settingsTop: {
    alignItems: "center",
  },
  settingsLineButton: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  settingsLineTitle: {
    color: "#090909",
    fontSize: 16,
    fontWeight: "500",
    marginHorizontal: 8,
  },
  settingsLineEnder: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  searchBox: {
    marginBottom: 12,
    height: 36,
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  settingsIcon: {
    height: 42,
    width: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
  },
  chatProfile: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  profilePictureFrame: {
    height: 60,
    width: 60,
    borderRadius: 30,
    overflow: "hidden",
  },
  profilePicture: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: "contain",
  },
  peopleListItem: {
    height: 64,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  chatListItem: {
    marginVertical: 4,
    height: 64,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  chat: {
    marginLeft: 12,
    marginRight: 18,
    justifyContent: "center",
  },
  chatName: {
    fontSize: 16,
    fontWeight: "800",
  },
  chatPreview: {
    fontSize: 14,
    fontWeight: "400",
    color: "#7f7f7f",
  },
  lineLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  lineRight: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  isOnlinePosition: {
    flex: 1,
    zIndex: 200,
    position: "absolute",
    right: 2,
    bottom: 2,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  isOnlineFrame: {
    height: 17,
    width: 17,
    borderRadius: 9,
    backgroundColor: "white",
    paddingTop: 1,
    paddingLeft: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  
});

export default styles;
