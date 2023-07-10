import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
const styles = StyleSheet.create({
    buy: {},
    cards: {
      borderWidth: 0,
      padding: 20,
      alignSelf: "center",
      marginLeft: 40,
      marginRight: 40,
      marginTop: 20,
      borderBottomLeftRadius: 50,
      borderTopRightRadius: 50,
      marginBottom: 10,
      shadowColor: "blue",
      shadowOffset: { width: 5, height: 5 },
      shadowOpacity: 0.5,
      shadowRadius: 8,
      elevation: 10,
      height: 330,
      width: 250,
      backgroundColor: ""
      
    },
    asdf: {
      borderWidth: 0,
      padding: 20,
      alignSelf: "center",
      marginLeft: 40,
      marginRight: 40,
      marginTop: 20,
      borderBottomLeftRadius: 50,
      borderTopRightRadius: 50,
      marginBottom: 10,
      shadowColor: "blue",
      shadowOffset: { width: 5, height: 5 },
      shadowOpacity: 0.5,
      shadowRadius: 8,
      elevation: 10,
      height: 300,
      width: 400
    },
    imaee: {
      margin: 20,
      height: 170,
      width: 170,
      borderRadius: 11,
      borderWidth: 3,
      backgroundColor: "transparent"
    },
    text: {
      fontFamily: "lucida fax",
      fontWeight: "bold"
    },
    cart: {
      backgroundColor: "gray",
      border: "gray",
      borderWidth: 3,
      borderRadius: 0,
      paddingLeft: 5,
      paddingRight: 8,
      borderColor: "orange",
      fontFamily: "Tahoma",
      color: "white",
      fontWeight: "bold",
      shadowColor: "grey",
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.5,
      shadowRadius: 8,
      width: 170,
      alignSelf: "center",
      marginTop: 12,
      textAlign: "center",
      height: 60,
      padding: 5
    },
    buy: {
      backgroundColor: "orange",
      border: "",
      borderWidth: 3,
      borderRadius: 0,
      paddingLeft: 5,
      paddingRight: 8,
      borderColor: "orange",
      fontFamily: "Tahoma",
      color: "white",
      fontWeight: "bold",
      shadowColor: "grey",
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.5,
      shadowRadius: 8,
      width: 170,
      alignSelf: "center",
      marginTop: 12,
      textAlign: "center",
      height: 60,
      padding: 5
    },
    sizeBut: {
      border: "1px solid ",
      padding: 2,
      borderRadius: 4,
      backgroundColor: "skyblue",
      fontWeight: "bold"
    },
    hed: {
      fontSize: 18,
      fontFamily: "Tahoma",
      paddingBottom: 5,
      borderBottomWidth: 1,
      borderBottomColor: "black",
      fontWeight: "bold"
    },
    proimg: {
      height: 180,
      width: 290,
      alignSelf: "center",
      marginTop: 12,
      borderRadius: 20
    }
  });

const Home = ({navigation}) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [detail, setDetailVisible] = useState(false);
    const handleSearchQueryChange = (query) => {
      setSearchQuery(query);
    };
  
    let products = [
      {
        imgs: <Image source={require("./voilin.jpg")} style={styles.imaee} />,
        Brand: "Sai Musicals- Violin",
        details: "Size 446655",
        price: "₹3,400",
        bon: "Add Cart"
      },
      {
        imgs: <Image source={require("./drum.webp")} style={styles.imaee} />,
        Brand: "Radel - Musical Drum Set",
        details: "Size - 22X18 bass drum",
        price: "₹32,500",
        bon: "Add Cart"
      },
      {
        imgs: <Image source={require("./flute.jpg")} style={styles.imaee} />,
        Brand: "Yamaha- basuri",
        details: "color - 	 Brown",
        price: "₹1,000",
        bon: "Add Cart"
      },
      {
        imgs: <Image source={require("./piono.webp")} style={styles.imaee} />,
        Brand: "Yamaha Clavinova CVP809GP",
        details: "color - Matte Black, Polished Ebony, White",
        price: "₹25,000",
        bon: "Add Cart"
      },
      {
        imgs: <Image source={require("./sitar.webp")} style={styles.imaee} />,
        Brand: "Mirajkars Kharaj Pancham Sitar",
        details: "Material - Wooden",
        price: "₹19,300",
        bon: "Add Cart"
      },
      {
        imgs: <Image source={require("./tabla.jpg")} style={styles.imaee} />,
        Brand: "S-Trading - Tabla",
        details: "Material - hollowed-out wood, clay or metal.",
        price: "₹13,000",
        bon: "Add Cart"
      },
      {
        imgs: (
          <Image source={require("./virtual harp.webp")} style={styles.imaee} />
        ),
        Brand: "Smequeen Celtic Irish 15 Strings Harp",
        details: "Color - Brown",
        price: "₹25,000",
        bon: "Add Cart"
      }
    ];
  return (
    <ScrollView
    style={{ display: "flex ", flexDirection: "row", flexWrap: "wrap" }}
  >
    <View style={{ backgroundColor: "orange" }}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity>
          <Image
            source={require("./left-arrow.png")}
            style={{ width: 20, height: 20, marginRight: 10 }}
          />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 35,
            alignSelf: "center",
            fontFamily: "san Francisco",
            backgroundColor: "orange",
            textDecorationLine: "Underline",
            padding: 10
          }}
        >
          SangeetMantra
        </Text>

        <View>
          <TouchableOpacity>
            <Image
              source={require("./shopping-cart.png")}
              style={{
                alignItems: "right",
                position: "absolute",
                justifyContent: "end",
                marginTop: 2,
                width: 30,
                height: 30
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
    <TextInput
      style={{
        borderWidth: 1,
        borderColor: "black",
        padding: 10,
        marginBottom: 10,
        paddingTop: 5,
        marginTop: 10
      }}
      placeholder="Search products..."
      value={searchQuery}
      onChangeText={handleSearchQueryChange}
    />
    {products.map((data) => {
      return (
        <View style={styles.cards}>
          <TouchableOpacity onPress={() => setDetailVisible(true)}>
            {" "}
            <Text style={{}}>{data.imgs}</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.text}>{data.Brand}</Text>

            <Text>{data.details}</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.text}>{data.price} </Text>
            <TouchableOpacity>
              <Text
                style={{
                  backgroundColor: "orange",
                  borderWidth: 3,
                  borderRadius: 15,
                  paddingLeft: 20,
                  paddingRight: 20,
                  borderColor: "",
                  fontFamily: "lucida fax",
                  color: "white",
                  fontWeight: "bold",
                  shadowColor: "white",
                  shadowOffset: { width: 0, height: 5 },
                  shadowOpacity: 0.5,
                  shadowRadius: 8,
                  height: 25,
                  padding: 2,
                  alignSelf: "center",
                  textAlign: "center",
                  width: 100
                }}
              >
                {data.bon}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    })}
    <Modal visible={detail}>
      <View>
        <View>
          {/* product details modal start */}
          <View style={{ backgroundColor: "orange" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity onPress={() => setDetailVisible(false)}>
                <Image
                  source={require("./left-arrow.png")}
                  style={{ width: 20, height: 20, marginRight: 10 }}
                />
              </TouchableOpacity>
              <Text
                style={{ backgroundColor: "orange", textAlign: "center" }}
              >
                __SangeetMantra__
              </Text>
            </View>
          </View>

          <Image source={require("./tabla.jpg")} style={styles.proimg} />
          <View>
            <Text style={styles.hed}>Tabla</Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Best Deal: 1350{" "}
            </Text>
            <Text style={{ fontWeight: "bold" }}>Description:</Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                fontFamily: "italic"
              }}
            >
              S.A Trading ultimate 4-5 kg Designer Copper Tabla Set
            </Text>
            <Text style={{ color: "blue", fontWeight: "bold" }}>
              Brand: S.A Trading Company
            </Text>
            <Text style={{ fontSize: 18 }}>
              <Text style={{ fontWeight: "bold" }}> Colour -</Text> Natural
              Brand S.A Trading Company Material Wood, Leather, Copper Model
              Name SAC 000 Item Dimensions LxWxH 22.5 x 22.5 x 30 Centimeters
            </Text>

            <View style={{ flexDirection: "row", padding: 10 }}></View>
          </View>
        </View>
        <View
          style={{
            // alignSelf: "center",
            paddingLeft: 0,
            marginTop: 140,
            display: "flex",
            flexDirection: "row"
            // justifyContent: "space-between"
          }}
        >
          <TouchableOpacity>
            <Text style={styles.cart}> Add to Cart </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.buy}> Buy now </Text>
          </TouchableOpacity>
             
          {/* <TouchableOpacity onPress={() => setDetailVisible(false)}>
            <Text style={styles.cb}> Back </Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </Modal>
  </ScrollView>
);
};

export default Home;
