import { Text } from "@react-native-material/core";
import { SafeAreaView, StyleSheet, View } from "react-native";

function Screen_4a() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentTop}>
        <Text>
          Bạn có thắc mawsxt với sản phẩm vừa xem. Đừng ngại chat với shop !
        </Text>
      </View>
      <View style={styles.contentBottom}></View>
    </SafeAreaView>
  );
}

export default Screen_4a;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  contentTop: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
  },
  //   contentBottom
  contentBottom: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
  },
});
