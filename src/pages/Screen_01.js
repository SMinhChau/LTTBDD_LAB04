import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { StyleSheet } from "react-native";
import images from "../../assets/index";
import { Rating } from "react-native-ratings";
import { useState } from "react";

function Screen_01({ navigation }) {
  const [priceNew, setPriceNew] = useState("1.790.000");
  const [priceOld, setPriceOld] = useState("1.790.000");

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={images.vsXanh} />
      <View style={styles.content}>
        <View style={styles.contentMain}>
          <View style={styles.mainTop}>
            <Text style={styles.text}>
              Điện Thoại Vsmart Joy 3 - Hàng chính hãng
            </Text>
            <View style={styles.contentRating}>
              <Rating style={styles.rating} />
              <Text style={styles.titleRating}> (Xem 828 đánh giá)</Text>
            </View>
            <View style={styles.priceContent}>
              <Text style={styles.priceNew}> {priceNew}</Text>
              <Text style={styles.priceOld}> {priceOld}</Text>
            </View>
          </View>
          <View style={styles.contentTitle}>
            <Text style={styles.title}> Ở đâu rẻ hơn hoàn tiền </Text>
            <Text style={styles.priceOld}> </Text>
            <TouchableOpacity
              style={styles.tuoch}
              onPress={() => navigation.navigate("Screen_03")}
            >
              <View style={styles.buttonTop}>
                <Text style={styles.textButtonTop}>4 MÀU-CHỌN MÀU</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.tuoch}>
            <View style={styles.buttonBottom}>
              <Text style={styles.textButton}>CHỌN MUA</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Screen_01;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
  },

  logo: {
    flex: 1,
    width: "70%",
    height: "50%",
    resizeMode: "contain",
  },

  //   Content
  content: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "column",
    width: "100%",
    height: "50%",
  },
  contentMain: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    justifyContent: "space-around",
    width: "100%",
    height: "100%",
    paddingLeft: 20,
    paddingRight: 20,
  },
  mainTop: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    height: "35%",
  },
  text: {
    fontSize: 17,
  },
  rating: {
    paddingVertical: 10,
  },

  contentRating: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 10,
  },
  titleRating: {
    fontSize: 16,
  },
  priceContent: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 10,
  },
  priceNew: {
    fontSize: 20,
    fontWeight: "bold",
    paddingRight: 30,
  },
  priceOld: {
    fontSize: 16,
    textDecorationLine: "line-through",
  },
  title: {
    fontSize: 16,
    textTransform: "uppercase",
    color: "rgba(250, 0, 0, 1)",
  },

  //   contentTitle
  contentTitle: {
    width: "100%",
    display: "flex",
    flexDirection: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  //   Button
  buttonTop: {
    height: 40,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderColor: "rgba(0, 0, 0, 0.46)",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderRadius: "10%",
  },
  textButtonTop: {
    textAlign: "center",
    color: "#000",
    fontSize: 20,
  },
  buttonBottom: {
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "rgba(229, 57, 53, 1)",
    borderRadius: "10%",
  },
  textButton: {
    textAlign: "center",
    color: "rgba(249, 242, 242, 1)",
    fontSize: 20,
  },
  //   Touch
  tuoch: {
    width: "100%",
  },
});
