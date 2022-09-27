import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Button, Text, TextInput } from "@react-native-material/core";
import images from "../../assets/index";
import { useRef, useState } from "react";

function Home({ navigation }) {
  const [value, setValue] = useState(1);
  const valeRef = useRef();

  const handleContUp = () => {
    setValue(value + 1);
  };
  const handleContDown = () => {
    setValue(value - 1);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.containerHeaderTop}>
          <View style={styles.viewLogo}>
            <Image style={styles.logo} source={images.logo} />
          </View>
          <View style={styles.containerHeaderTop_Right}>
            <Text
              style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}
            >
              Nguyên hàm tích phân và ứng dụng
            </Text>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10 }}
            >
              Cung cấp bởi Tiki Trading
            </Text>
            <Text style={styles.price}>141.800 đ</Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                marginBottom: 10,
                color: "grey",
                textDecorationLine: "line-through",
              }}
            >
              141.800 đ
            </Text>
            <View style={styles.containerHeaderTop_Right_Row1}>
              <View style={styles.containerHeaderTop_Right_Button}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleContDown}
                >
                  <Text>-</Text>
                </TouchableOpacity>
                {/* <TextInput
                  editable={false}
                  style={styles.input}
                  onChange={(e) => setValue(e.target.value)}
                  value={value}
                /> */}
                <Text style={styles.input}>{value}</Text>
                <TouchableOpacity style={styles.button} onPress={handleContUp}>
                  <Text>+</Text>
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles.titleBlue}>Mua sau</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.containerHeaderBottom}>
          <View style={styles.containerHeaderBottom_Top}>
            <Text style={styles.title}>Mã giảm giá đã lưu</Text>
            <Text style={styles.titleBlue}>Xem tại đây</Text>
          </View>
          <View style={styles.containerHeaderBottom_Bottom}>
            <TouchableOpacity style={styles.couple}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    height: 20,
                    width: 50,
                    backgroundColor: "#FFCC00",
                    marginRight: 10,
                    marginLeft: 20,
                  }}
                ></View>
                <Text style={styles.titleEvalu} color="black">
                  Mã giảm giá
                </Text>
              </View>
            </TouchableOpacity>
            <Button
              style={styles.buttonClick}
              title="Áp dụng"
              color="blue"
              tintColor="#ffff"
            />
          </View>
        </View>
        <View style={styles.containerLine}></View>
        <View style={styles.containerMiddle}>
          <Text style={styles.title}>
            Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
          </Text>
          <Text style={styles.titleBlue}>Nhập tại đây?</Text>
        </View>
        <View style={styles.containerLine}></View>
        <View style={styles.containerMiddleBotton}>
          <Text style={styles.titleMain}>Tạm Tính</Text>
          <Text style={styles.price}>141.800 đ</Text>
        </View>
        <View style={styles.containerLineBottom}></View>
        <View style={styles.containerMiddleBotton}>
          <Text style={styles.titleMain}>Thành tiền</Text>
          <Text style={styles.price}>141.800 đ</Text>
        </View>
        <View style={styles.viewButton}>
          <Button
            style={styles.buttonBottom}
            title="Tiến hành đặt hàng"
            tintColor="#ffff"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  containerHeaderTop: {
    width: "100%",
    height: "50%",
    display: "flex",
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },

  containerHeader: {
    display: "flex",
    flexDirection: "column",
    height: "50%",
    width: "100%",
  },
  viewLogo: {
    width: "30%",
    height: 160,
    marginRight: 10,
  },
  containerHeaderTop_Right: {
    width: "70%",
    display: "flex",
    flexDirection: "column",
  },
  containerHeaderTop_Right_Button: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  button: {
    backgroundColor: "grey",
    borderWidth: 1,
    justifyContent: "center",
    borderColor: "black",
    width: 20,
    height: 20,
    alignItems: "center",
  },
  containerHeaderTop_Right_Row1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 20,
  },
  containerHeaderBottom: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  containerHeaderBottom_Top: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 30,
  },
  containerHeaderBottom_Bottom: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-between",
  },
  couple: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "black",
    width: 200,
    height: 40,
    justifyContent: "center",
    marginRight: 10,
  },
  apply: {
    width: 120,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3366FF",
  },
  containerLine: {
    height: 20,
    width: "100%",
    backgroundColor: "#dddd",
    marginBottom: 10,
  },
  containerMiddle: {
    paddingRight: 10,
    paddingLeft: 10,
    display: "flex",
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 20,
  },
  containerMiddleBotton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  containerLineBottom: {
    height: 200,
    width: "100%",
    backgroundColor: "#DDDDDD",
    marginBottom: 10,
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  //Text
  title: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",

    marginRight: 10,
  },
  titleMain: {
    color: "rgba(128, 128, 128, 1)",
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 20,
  },
  titleEvalu: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 20,
  },
  titleBlue: {
    color: "blue",
    fontSize: 14,
    fontWeight: "bold",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "red",
  },

  // Buttom
  buttonClick: {
    width: 150,
  },

  viewButton: {
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
  },
  buttonBottom: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "rgba(229, 57, 53, 1)",
    height: "100%",
  },
  //   input
  input: {
    width: 40,
    display: "flex",
    paddingLeft: 15,
    justifyContent: "center",
    alignContent: "center",
  },
});
