import React from "react";
import { View, Text, FlatList, ScrollView, Image } from "react-native";
import globalStyles from "./GlobalStyle";

const Item = ({ title, origen, img }) => (
    <View style={globalStyles.Subcontainer} >
      <View style={globalStyles.ImageContainer}>
      <Image style={globalStyles.Imgs} source={img}/>
      </View>
      <View style={globalStyles.TextContaner}>
      <Text style={globalStyles.titulo} >{title}</Text>
      <Text>{origen}</Text>
      </View>
    </View>
  );
  const DATA = [
    {
        id:'1',
        title:'Afghan Hound',
        origen:'Afganistán',
        src:require('../img/p1.jpg'),
    },
    {
        id:'2',
        title:'Alpine Dachsbracke',
        origen:'Austria',
        src:require('../img/p2.jpg'),
    },
    {
        id:'3',
        title:'Pastor Alemán',
        origen:'Alemania',
        src:require('../img/p3.jpg'),
    },
    {
        id:'4',
        title:'American Bully',
        origen:'Estados Unidos',
        src:require('../img/p4.jpg'),
    },
    {
        id:'5',
        title:'American Buldog',
        origen:'Estados Unidos',
        src:require('../img/p5.jpg'),
    }
];
export default function Dogs()
{
    const renderItem = ({ item }) => (
        <Item title={item.title} origen={item.origen} img={item.src} />
      );
    
        return(
          <View style={globalStyles.contenedor}>
    <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
          </View>  
        );
};