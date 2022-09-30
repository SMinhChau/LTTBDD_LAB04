import {
  FlatList,
  Image,
  SafeAreaView,
  SliderBase,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import IconHome from "react-native-vector-icons/Feather";
import IconBack from "react-native-vector-icons/AntDesign";
import images from "../../assets/index";
import { Rating } from "react-native-ratings";
import flatList_4b from "../flatList_4b";

const renderItem = ({ item, index }) => {
  return (
    <TouchableOpacity style={styles.contentItem}>
      <Image source={item.img} style={styles.item__img} />
      <View style={styles.decrible}>
        <Text style={styles.title}>{item.name}</Text>
        <View style={styles.cotent__rating}>
          <Rating imageSize={20} />
          <Text style={styles.rating}>(15)</Text>
        </View>
        <View style={styles.cotent__rating}>
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.evalution}>(15)</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
function Sreem_4b() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.menuContent}>
        <TouchableOpacity style={styles.btn__icon}>
          <IconHome name="arrow-left" style={styles.btn__iconTop} size={37} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn__icon}>
          <IconHome name="home" style={styles.btn__iconTop} size={37} />
        </TouchableOpacity>

        <TouchableOpacity>
          <IconBack name="back" style={styles.btn__iconTop} size={37} />
        </TouchableOpacity>
      </View>
      {/* FalastList */}

      <View style={styles.flastList__content}>
        <FlatList
          style={{ margin: 5 }}
          data={flatList_4b}
          numColumns={2}
          keyExtractor={(item, index) => item.id}
          renderItem={renderItem}
        />
      </View>
      {/* Footer */}
      <View style={styles.menuContent}>
        <TouchableOpacity style={styles.btn__icon}>
          <IconHome name="menu" style={styles.btn__icon} size={37} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn__icon}>
          <IconHome name="home" style={styles.btn__icon} size={37} />
        </TouchableOpacity>

        <TouchableOpacity>
          <IconBack name="back" style={styles.btn__icon} size={37} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Sreem_4b;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#E5E5E5",
    flex: 1,
  },
  flastList__content: {
    width: "100%",
    height: "87%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },

  contentItem: {
    width: "47%",
    marginLeft: 10,
    marginBottom: 10,
    height: 200,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  item__img: {
    height: "45%",
    resizeMode: "contain",
  },
  decrible: {
    display: "flex",
    height: "55%",
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 10,
    backgroundColor: "#fff",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 18,
  },
  cotent__rating: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  rating: {
    paddingLeft: 10,
  },
  price: {
    fontSize: 18,
  },
  evalution: {
    fontSize: 18,
    color: "gray",
    paddingLeft: 10,
  },
  // menu,Content
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
  //   Herader Icon
  btn__iconTop: {
    color: "#ffff",
  },
});
