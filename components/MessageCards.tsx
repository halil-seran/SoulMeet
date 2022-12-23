import { StyleSheet, View, Text, FlatList, Image } from "react-native";

export default function MessageCards() {
  interface fakeTypes {
    name: string;
    message: string;
  }

  let fakeData: Array<fakeTypes> = [
    { name: "mustafa yilmaz", message: "merhaba" },
    { name: "ayse koruk", message: "selam" },
    { name: "murat canayakin", message: "gunaydin" },
    { name: "ibrahim kaynarca", message: "merhabalar" },
    { name: "merve yilmaz", message: "Iyi geceler" },
    { name: "nuray tok", message: "nerdesin?" },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.messageCard}>
        <Image
          style={styles.ppLogo}
          source={{
            uri: "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
          }}
        />
        <View style={styles.cardTexts}>
          <View style={styles.nameTextArea}>
            <Text style={styles.nameText}>{item.name}</Text>
          </View>
          <View style={styles.messageTextArea}>
            <Text style={styles.messageText}>{item.message}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={fakeData}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardTexts: {
    height: 60,
    width: "60%",
    marginLeft: 10,
    // backgroundColor: "red",
  },
  nameTextArea: {
    flex: 0.4,
    marginTop: 2,
  },
  nameText: {
    fontSize: 20,
  },
  messageTextArea: {
    flex: 0.6,
    marginTop: 5,
  },
  messageText: {
    fontSize: 16,
  },
  messageCard: {
    flexDirection: "row",
    height: 60,
    width: "90%",
    backgroundColor: "#ccc",
    marginLeft: "5%",
    marginTop: 10,
    borderRadius: 10,
    // alignItems: "center",
    // justifyContent: "center",
  },
  ppLogo: {
    marginLeft: 10,
    width: 60,
    height: 60,
    borderRadius: 10,
  },
});
