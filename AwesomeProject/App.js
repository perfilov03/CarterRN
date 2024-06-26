import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from '@expo/vector-icons/Feather';
import { FontAwesome6 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator(); // Создание навигационного меню

const HomeScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const foodCatalog = [
      {
          id: '1',
          name: 'Латте',
          image: require('./images/latte.jpg'),
          category: 'classic',
      },
      {
          id: '2',
          name: 'Мокка',
          image: require('./images/mokka.jpg'),
          category: 'classic',
      },
      {
          id: '3',
          name: 'Раф кофе',
          image: require('./images/raf.jpg'),
          category: 'classic',
      },
      {
        id: '4',
        name: 'Флет Уайт',
        image: require('./images/flet.jpg'),
        category: 'classic',
    },
    {
      id: '5',
      name: 'Малиновый латте с сырной пенкой',
      image: require('./images/mallatte.png'),
      category: 'season',
  },
  {
    id: '6',
    name: 'Мятный какао',
    image: require('./images/kakaomyat.png'),
    category: 'season',
},
  ];

  const renderFoodItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => setSelectedCategory(item.category)}>
        <Image source={item.image} style={styles.image} />
        <Text>{item.name}</Text>
    </TouchableOpacity>
);

return (
  <View style={styles.container}>
      <FlatList
          data={foodCatalog}
          renderItem={renderFoodItem}
          keyExtractor={item => item.id}
          numColumns={2}
      />
      {selectedCategory && <Text>Выбранная категория напитков: {selectedCategory}</Text>}
  </View>
);
};

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Скоро тут будет профиль</Text>
  </View>
  );
} // Функция создания одного из экранов меню и его содержимого

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
  },
  card: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      borderRadius: 10,
      width: 150,
      height: 200,
      margin: 5,
      padding: 10,
  },
  image: {
      width: 120,
      height: 120,
      borderRadius: 10,
      marginBottom: 10,
  },
});


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Напитки" component={HomeScreen} options={{
          tabBarIcon: ({color, size}) => (<Feather name="coffee" size={24} color="black" />)
        }} />
        <Tab.Screen name="Профиль" component={ProfileScreen} options={{
          tabBarIcon: ({color, size}) => (<FontAwesome6 name="person" size={24} color="black" />)
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  ); // Отображение приложения. Компонент отвечает за привязку определенной функции стртаницы для отображения в приложении. 
  // В name можно выбрать название экрана, оно будет отображаться снизу в меню 
}