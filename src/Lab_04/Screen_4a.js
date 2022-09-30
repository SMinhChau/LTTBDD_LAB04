import { Text } from "@react-native-material/core";
import { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import IconHome from "react-native-vector-icons/Feather";
import IconBack from "react-native-vector-icons/AntDesign";

import images from "../../assets";
import dataLab_04 from "../dataLab_04";

const renderItem = ({ item, index }) => {
  return (
    <>
      <View style={styles.lineContent}></View>
      <TouchableOpacity style={styles.listContent}>
        <View style={styles.viewLogo}>
          <Image style={styles.logo} source={item.img} />
        </View>
        <View style={styles.item__right}>
          <View style={styles.item}>
            <Text style={styles.item_title}>{item.title}</Text>
            <View style={styles.item_name}>
              <Text style={styles.name}>Shop</Text>
              <Text style={styles.name__Shop}>{item.name}</Text>
            </View>
          </View>
          <View style={styles.view__btn}>
            {/* Btn */}
            <TouchableOpacity style={styles.btn__view}>
              <Text style={styles.btn}>Chat</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

function Screen_4a({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentTop}>
        <Text style={styles.decrible}>
          Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop !
        </Text>
      </View>

      <View style={styles.contentBottom}>
        <FlatList
          data={dataLab_04}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={styles.menuContent}>
        <TouchableOpacity style={styles.btn__icon}>
          <IconHome name="menu" style={styles.btn__icon} size={37} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn__icon}
          onPress={() => navigation.navigate("Sreem_4b")}
        >
          <IconHome name="home" style={styles.btn__icon} size={37} />
        </TouchableOpacity>

        <TouchableOpacity>
          <IconBack name="back" style={styles.btn__icon} size={37} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Screen_4a;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#E5E5E5",
    flex: 1,
  },
  contentTop: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "9%",
    width: "100%",
  },
  decrible: {
    width: "85%",
  },
  // lineContent
  lineContent: {
    width: "100%",
    height: 5,
    backgroundColor: "#C4C4C4",
  },
  //   contentBottom
  contentBottom: {
    display: "flex",
    justifyContent: "flex-start",
    height: "87%",
    width: "100%",
  },

  // listContent
  listContent: {
    width: "100%",
    height: 110,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "white",
  },

  // item__right
  item__right: {
    height: "100%",
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  viewLogo: {
    height: "100%",
    width: "25%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  logo: {
    height: 110,
    width: 100,
    resizeMode: "content",
  },
  // item
  item: {
    height: "100%",
    width: "75%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  item_title: {
    width: "100%",
  },
  item_name: {
    display: "flex",
    width: "100%",

    flexDirection: "row",
  },
  //
  name: {
    color: "rgba(125, 91, 91, 1)",
  },
  name__Shop: { paddingLeft: 5 },
  view__btn: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  // Btn
  btn__view: {
    height: 45,
    width: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  btn: {
    color: "#FFFFFF",
  },
  // menuContent
  menuContent: {
    backgroundColor: "#3F68DB",
    height: "9%",
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});
