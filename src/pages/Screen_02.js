import { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import images from "../../assets";
import data from "../data";

const rederItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.box_conten} onPress={() => getItem(item)}>
      <View style={styles.box_item} backgroundColor="rgba(243, 13, 13, 1)">
        <Text> {item.colors}</Text>
      </View>
    </TouchableOpacity>
  );
};

function Screen_02() {
  const [color, setColer] = useState("xanh");
  const [titlePhone, setTitlePhone] = useState(
    "Điện Thoại Vsmart Joy 3 Hàng chính hãng"
  );
  const [price, setPrice] = useState("1.790.000 đ");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.contentTop}>
          <Image style={styles.logo} source={images.vsXanh} />
          <View style={styles.titleImg}>
            <Text style={styles.title}> {titlePhone}</Text>
          </View>
        </View>

        <View style={styles.contentBottom}>
          <View style={styles.contentBottom_view}>
            <Text style={styles.title}>Chọn một màu bên dưới:</Text>
          </View>

          <View style={styles.contentBox}>
            <TouchableOpacity style={styles.box_conten}></TouchableOpacity>
            <TouchableOpacity style={styles.box_conten}>
              <View
                style={styles.box__item}
                backgroundColor="rgba(243, 13, 13, 1)"
              ></View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box_conten}>
              <View
                style={styles.box__item}
                backgroundColor="rgba(0, 0, 0, 1)"
              ></View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box_conten}>
              <View
                style={styles.box__item}
                backgroundColor="rgba(35, 72, 150, 1) "
              ></View>
            </TouchableOpacity>
          </View>

          <View style={styles.contentButton}>
            <TouchableOpacity style={styles.tuoch}>
              <View style={styles.buttonBottom}>
                <Text style={styles.textButton}>CHỌN MUA</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Screen_02;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
  },
  contentTop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    height: "25%",
    padding: 10,
  },
  logo: {
    width: 135,
    height: 160,
    resizeMode: "contain",
  },
  titleImg: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    margin: 10,
    width: "70%",
    height: "90%",
  },
  title: {
    fontSize: 18,
    color: "rgba(0, 0, 0, 1)",
    lineHeight: 18,
  },

  // contentBottom
  contentBottom: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "75%",
    backgroundColor: "rgba(196, 196, 196, 1)",
  },
  contentBottom_view: {
    padding: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  // Box Selections
  contentBox: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  box_conten: {
    width: 100,
    height: 90,
    backgroundColor: "#C5F1FB",
    marginBottom: 15,
  },
  box_item: {
    width: "100%",
    height: "100%",
  },
  // Button
  //   Touch
  contentButton: {
    width: "100%",
    padding: 20,
  },
  tuoch: {
    justifyContent: "center",
  },
  buttonBottom: {
    height: 50,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(25, 82, 226, 0.58)",
    flexDirection: "row",
    borderColor: "rgba(202, 21, 54, 1)",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 10,
  },
  box__item: {
    width: "100%",
    height: "100%",
  },

  // TextMain
  color: {
    fontWeight: "bold",
    fontSize: 18,
    color: "rgba(0, 0, 0, 1)",
  },
});
