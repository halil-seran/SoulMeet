import { StyleSheet, View, Text } from "react-native";
import MessageCards from "../components/MessageCards";

export default function MessagesScreen() {
  return <MessageCards />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
