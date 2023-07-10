import React from 'react';
import { Text, View } from 'react-native';

const cart = () => {
    const [myTotal, setMyTotal] = useState(0);
    const [disco, setDisco] = useState("");
    let dp;
    let gt = 0;
    let mainTotal = 0;
    let temp;
  
    const calDis = () => {
      dp = myTotal * (disco / 100);
      gt = myTotal - dp;
      setMyTotal(gt);
    };
  
    const calculateTotal = () => {
      myCartItems &&
        myCartItems.map((data, i) => {
          const totalPrice = data.price * data.qty;
          mainTotal = mainTotal + totalPrice;
        });
  
      setMyTotal(mainTotal);
      //  mainTotal=temp;
    };
    const [myCartItems, setMyCartItems] = useState([
      {
        id: 1,
        name: "Tabla",
        image: require("./tabla.jpg"),
        price: 1350,
        size: "-",
        qty: 2
      },
      {
        id: 2,
        name: "Violin",
        image: require("./violin.png"),
        price: 3450,
        size: "-",
        qty: 1
      },
      {
        id: 3,
        name: "Drum",
        image: require("./drum.webp"),
        price: 20000,
        size: "-",
        qty: 3
      }
    ]);
    useEffect(() => {
      calculateTotal();
    }, []);
  return (
    <View>
      <View style={{ backgroundColor: "hotpink" }}>
        <Text
          style={{
            fontSize: 35,
            alignSelf: "center",
            textDecorationLine: "Underline"
          }}
        >
          __My Cart__
        </Text>
      </View>
      <ScrollView>
        <View style={styles.singleCartView}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              fontFamily: "lucida fax"
            }}
          >
            Sr No
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginLeft: 25,
              fontFamily: "lucida fax"
            }}
          >
            Name
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginLeft: 40,
              fontFamily: "lucida fax"
            }}
          >
            Image
          </Text>

          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginLeft: 30,
              fontFamily: "lucida fax"
            }}
          >
            Price
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginLeft: 30,
              fontFamily: "lucida fax"
            }}
          >
            Size
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginLeft: 25,
              fontFamily: "lucida fax"
            }}
          >
            Qty
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginLeft: 25,
              fontFamily: "lucida fax"
            }}
          >
            Total ₹
          </Text>
        </View>
        {myCartItems &&
          myCartItems.map((data, i) => {
            return (
              <View style={styles.singleCartView}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    marginLeft: 10,
                    fontFamily: "lucida fax"
                  }}
                >
                  {i + 1}
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    marginLeft: 40,
                    fontFamily: "lucida fax"
                  }}
                >
                  {data.name}
                </Text>
                <Image style={styles.tinyLogo} source={data.image} />
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    marginLeft: 47,
                    fontFamily: "lucida fax"
                  }}
                >
                  {data.price}
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    marginLeft: 55,
                    fontFamily: "lucida fax"
                  }}
                >
                  {data.size}
                </Text>
                <Text style={styles.singleCartLabel}>{data.qty}</Text>
                <Text style={styles.singleCartLabel}>
                  {data.qty * data.price}₹
                </Text>
              </View>
            );
          })}
        <View
          style={{
            alignSelf: "end",
            margin: 10,
            border: "solid 1px",
            borderRadius: 12,
            padding: 10,
            height: 160,
            width: 250
          }}
        >
          <Text
            style={{
              fontFamily: "Tahoma",
              fontWeight: "bold"
            }}
          >
            Total:{temp}
          </Text>
          <Text style={{ fontWeight: "bold" }}>
            Discount:
            <TextInput
              onChangeText={setDisco}
              style={{
                backgroundColor: "red",
                border: "solid 1px ",
                width: 60,
                color: "black",
                textAlign: "center",
                margin: 10
              }}
            />
          </Text>
          <TouchableOpacity onPress={calDis}>
            <Text
              style={{
                border: "solid 2px",
                alignSelf: "start",
                borderRadius: 5,
                fontWeight: "bold",
                height: 30,
                width: 80,
                textAlign: "center",
                margin: 10,
                backgroundColor: "pink"
              }}
            >
              Apply
            </Text>
          </TouchableOpacity>
          <Text style={{ fontWeight: "bold" }}>Grand Total : {myTotal}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={calDis}>
            <Text
              style={{
                border: "solid 2px",
                alignSelf: "start",
                borderRadius: 5,
                fontWeight: "bold",
                height: 50,
                width: 300,
                textAlign: "center",
                marginLeft: 200,
                backgroundColor: "violet",
                fontSize: 25,
                marginTop: 30
              }}
            >
              Buy Now
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  singleCartView: {
    padding: 20,
    display: "flex",
    flexDirection: "row",
    border: "3px solid black",
    marginTop: 13,
    backgroundColor: "wheat",
    borderRadius: 30,
    height: 100
  },
  singleCartLabel: {
    paddingLeft: 40,
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold"
  },
  mainCartLabel: {
    paddingLeft: 20,
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold"
  },
  tinyLogo: {
    marginLeft: 45,
    width: 50,
    height: 50
  }
});


export default SecondScreen;
