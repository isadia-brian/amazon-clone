import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import Home from "../assets/images/header/home.png";
import Electronics from "../assets/images/header/electronics.png";
import Mobile from "../assets/images/header/mobiles.png";
import Music from "../assets/images/header/music.png";
import Deals from "../assets/images/header/deals.png";
import Fashion from "../assets/images/header/fashion.png";
import { SliderBox } from "react-native-image-slider-box";

import {
  useFonts,
  Poppins_700Bold,
  Poppins_400Regular,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";

const HomeScreen = () => {
  const list = [
    {
      id: 0,
      image: Home,
      name: "Home",
    },
    {
      id: 1,
      image: Deals,
      name: "Deals",
    },
    {
      id: 2,
      image: Electronics,
      name: "Electronics",
    },
    {
      id: 3,
      image: Mobile,
      name: "Mobile",
    },
    {
      id: 4,
      image: Fashion,
      name: "Fashion",
    },
    {
      id: 5,
      image: Music,
      name: "Music",
    },
  ];

  const images = [
    "https://img.etimg.com/thumb/msid-93051525,width-1070,height-580,imgsize-2243475,overlay-economictimes/photo.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/PD23/Launches/Updated_ingress1242x550_3.gif",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Books/BB/JULY/1242x550_Header-BB-Jul23.jpg",
  ];

  const deals = [
    {
      id: "20",
      title: "OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)",
      oldPrice: 25000,
      price: 19000,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/wireless_products/ssserene/weblab_wf/xcm_banners_2022_in_bau_wireless_dec_580x800_once3l_v2_580x800_in-en.jpg",
      carouselImages: [
        "https://m.media-amazon.com/images/I/61QRgOgBx0L._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61uaJPLIdML._SX679_.jpg",
        "https://m.media-amazon.com/images/I/510YZx4v3wL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61J6s1tkwpL._SX679_.jpg",
      ],
      color: "Stellar Green",
      size: "6 GB RAM 128GB Storage",
    },
    {
      id: "30",
      title:
        "Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage) with No Cost EMI & Additional Exchange Offers",
      oldPrice: 74000,
      price: 26000,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/SamsungBAU/S20FE/GW/June23/BAU-27thJune/xcm_banners_2022_in_bau_wireless_dec_s20fe-rv51_580x800_in-en.jpg",
      carouselImages: [
        "https://m.media-amazon.com/images/I/81vDZyJQ-4L._SY879_.jpg",
        "https://m.media-amazon.com/images/I/61vN1isnThL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71yzyH-ohgL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61vN1isnThL._SX679_.jpg",
      ],
      color: "Cloud Navy",
      size: "8 GB RAM 128GB Storage",
    },
    {
      id: "40",
      title:
        "Samsung Galaxy M14 5G (ICY Silver, 4GB, 128GB Storage) | 50MP Triple Cam | 6000 mAh Battery | 5nm Octa-Core Processor | Android 13 | Without Charger",
      oldPrice: 16000,
      price: 14000,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/CatPage/Tiles/June/xcm_banners_m14_5g_rv1_580x800_in-en.jpg",
      carouselImages: [
        "https://m.media-amazon.com/images/I/817WWpaFo1L._SX679_.jpg",
        "https://m.media-amazon.com/images/I/81KkF-GngHL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61IrdBaOhbL._SX679_.jpg",
      ],
      color: "Icy Silver",
      size: "6 GB RAM 64GB Storage",
    },
    {
      id: "41",
      title:
        "realme narzo N55 (Prime Blue, 4GB+64GB) 33W Segment Fastest Charging | Super High-res 64MP Primary AI Camera",
      oldPrice: 12999,
      price: 10999,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/tiyesum/N55/June/xcm_banners_2022_in_bau_wireless_dec_580x800_v1-n55-marchv2-mayv3-v4_580x800_in-en.jpg",
      carouselImages: [
        "https://m.media-amazon.com/images/I/41Iyj5moShL._SX300_SY300_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/61og60CnGlL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61twx1OjYdL._SX679_.jpg",
      ],
    },
  ];

  const offers = [
    {
      id: "0",
      title:
        "Oppo Enco Air3 Pro True Wireless in Ear Earbuds with Industry First Composite Bamboo Fiber, 49dB ANC, 30H Playtime, 47ms Ultra Low Latency,Fast Charge,BT 5.3 (Green)",
      offer: "72% off",
      oldPrice: 7500,
      price: 4500,
      image:
        "https://m.media-amazon.com/images/I/61a2y1FCAJL._AC_UL640_FMwebp_QL65_.jpg",
      carouselImages: [
        "https://m.media-amazon.com/images/I/61a2y1FCAJL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71DOcYgHWFL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71LhLZGHrlL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61Rgefy4ndL._SX679_.jpg",
      ],
      color: "Green",
      size: "Normal",
    },
    {
      id: "1",
      title:
        "Fastrack Limitless FS1 Pro Smart Watch|1.96 Super AMOLED Arched Display with 410x502 Pixel Resolution|SingleSync BT Calling|NitroFast Charging|110+ Sports Modes|200+ Watchfaces|Upto 7 Days Battery",
      offer: "40%",
      oldPrice: 7955,
      price: 3495,
      image: "https://m.media-amazon.com/images/I/41mQKmbkVWL._AC_SY400_.jpg",
      carouselImages: [
        "https://m.media-amazon.com/images/I/71h2K2OQSIL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71BlkyWYupL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71c1tSIZxhL._SX679_.jpg",
      ],
      color: "black",
      size: "Normal",
    },
    {
      id: "2",
      title: "Aishwariya System On Ear Wireless On Ear Bluetooth Headphones",
      offer: "40%",
      oldPrice: 7955,
      price: 3495,
      image: "https://m.media-amazon.com/images/I/41t7Wa+kxPL._AC_SY400_.jpg",
      carouselImages: ["https://m.media-amazon.com/images/I/41t7Wa+kxPL.jpg"],
      color: "black",
      size: "Normal",
    },
    {
      id: "3",
      title:
        "Fastrack Limitless FS1 Pro Smart Watch|1.96 Super AMOLED Arched Display with 410x502 Pixel Resolution|SingleSync BT Calling|NitroFast Charging|110+ Sports Modes|200+ Watchfaces|Upto 7 Days Battery",
      offer: "40%",
      oldPrice: 24999,
      price: 19999,
      image: "https://m.media-amazon.com/images/I/71k3gOik46L._AC_SY400_.jpg",
      carouselImages: [
        "https://m.media-amazon.com/images/I/41bLD50sZSL._SX300_SY300_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/616pTr2KJEL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71wSGO0CwQL._SX679_.jpg",
      ],
      color: "Norway Blue",
      size: "8GB RAM, 128GB Storage",
    },
  ];
  let [fontsLoaded, fontError] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_500Medium,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",

        paddingTop: 40,
      }}
    >
      <ScrollView>
        <View
          style={{
            backgroundColor: "#00ced1",
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 7,
              gap: 10,
              paddingHorizontal: 10,
              backgroundColor: "white",
              borderRadius: 3,
              height: 38,
              flex: 1,
            }}
          >
            <AntDesign name="search1" size={24} color="black" />
            <TextInput placeholder="Search Amazon" />
          </Pressable>
          <Feather name="mic" size={24} color="black" />
        </View>
        <View
          style={{
            padding: 10,
            flexDirection: "row",
            gap: 7,
            alignItems: "center",
            backgroundColor: "#AFEEEE",
          }}
        >
          <Ionicons name="location-outline" size={24} color="black" />
          <Pressable>
            <Text style={[styles.textMedium, styles.textMedium]}>
              Deliver to Nairobi - Kenya
            </Text>
          </Pressable>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {list.map((item) => (
            <Pressable
              key={item.id}
              style={{
                margin: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  width: 50,
                  height: 50,
                  resizeMode: "contain",
                  borderRadius: 50,
                  marginBottom: 5,
                }}
                source={item.image}
              />
              <Text style={styles.text}>{item.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
        <SliderBox
          images={images}
          autoplay
          circleLoop
          dotColor={"#13274F"}
          inactiveDotColor="#90A4AE"
          ImageComponentStyle={{ width: "100%" }}
        />
        <Text
          style={{
            padding: 10,
            fontSize: 18,
            fontFamily: "Poppins_700Bold",
          }}
        >
          Trending Deals of the week
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {deals.map((item) => (
            <Pressable
              key={item.id}
              onPress={() =>
                navigation.navigate("Info", {
                  id: item.id,
                  title: item.title,
                  price: item?.price,
                  carouselImages: item.carouselImages,
                  color: item?.color,
                  size: item?.size,
                  oldPrice: item?.oldPrice,
                  item: item,
                })
              }
              style={{
                marginVertical: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 180, height: 180, resizeMode: "contain" }}
                source={{ uri: item?.image }}
              />
            </Pressable>
          ))}
        </View>
        <Text
          style={{
            height: 1,
            borderColor: "#D0D0D0",
            borderWidth: 2,
            marginTop: 15,
          }}
        />
        <Text style={{ padding: 10, fontSize: 18, fontWeight: "bold" }}>
          Today's Deals
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {offers.map((item, index) => (
            <Pressable
              onPress={() =>
                navigation.navigate("Info", {
                  id: item.id,
                  title: item.title,
                  price: item?.price,
                  carouselImages: item.carouselImages,
                  color: item?.color,
                  size: item?.size,
                  oldPrice: item?.oldPrice,
                  item: item,
                })
              }
              style={{
                marginVertical: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{ width: 150, height: 150, resizeMode: "contain" }}
                source={{ uri: item?.image }}
              />

              <View
                style={{
                  backgroundColor: "#E31837",
                  paddingVertical: 5,
                  width: 130,
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 10,
                  borderRadius: 4,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: 13,
                    fontWeight: "bold",
                  }}
                >
                  Upto {item?.offer}
                </Text>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Poppins_400Regular",
  },
  textMedium: {
    fontFamily: "Poppins_500Medium",
  },
  textBold: {
    fontFamily: "Poppins_700Bold",
  },
  textNormal: {
    fontSize: 13,
  },
  textMedium: {
    fontSize: 18,
  },
  textLarge: {
    fontSize: 24,
  },
});
