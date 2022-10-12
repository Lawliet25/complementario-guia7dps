import React from 'react';
import { View, Text, FlatList, ScrollView, Image } from 'react-native';
import globalStyles from './GlobalStyle';

const Item = ({ title, origen, img }) => (
  <View style={globalStyles.Subcontainer}>
    <View style={globalStyles.ImageContainer}>
      <Image style={globalStyles.Imgs} source={img} />
    </View>
    <View style={globalStyles.TextContaner}>
      <Text style={globalStyles.titulo}>{title}</Text>
      <Text>{origen}</Text>
    </View>
  </View>
);
const DATA = [
  {
    id: '1',
    title: 'Gato Persa',
    origen: 'Irán',
    src: require('../img/g1.png'),
  },
  {
    id: '2',
    title: 'Gato Siamés',
    origen: 'Tailandia',
    src: require('../img/g2.jpg'),
  },
  {
    id: '3',
    title: 'Gato Balinés',
    origen: 'Estados Unidos',
    src: require('../img/g3.jpeg'),
  },
  {
    id: '4',
    title: 'Fold Escocés',
    origen: 'Escocia / Reino Unido',
    src: require('../img/g4.jpg'),
  },
  {
    id: '5',
    title: 'Bosque de Noruega',
    origen: 'Noruega',
    src: require('../img/g5.jpg'),
  },
  
];
export default function Cats() {
  const renderItem = ({ item }) => (
    <Item title={item.title} origen={item.origen} img={item.src} />
  );

  return (
    <View style={globalStyles.contenedor}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
