import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';

const Tab = createBottomTabNavigator(); // Создание навигационного меню

function Screen1() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Новости</Text>
    </View>
  );
} // Функция создания одного из экранов меню и его содержимого

function Screen2() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Главная</Text>
    </View>
  );
} // Функция создания одного из экранов меню и его содержимого. Здесь можно полностью настроить содержимое страницы, а можно привязать отдельный файл, в котором будут все настройки страницы

function Screen3() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Screen 3</Text>
    </View>
  );
} // Функция создания одного из экранов меню и его содержимого

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Новости" component={Screen1} />
        <Tab.Screen name="Главная" component={Screen2} />
        <Tab.Screen name="Мое" component={Screen3} /> 
      </Tab.Navigator>
    </NavigationContainer>
  ); // Отображение приложения. Компонент отвечает за привязку определенной функции стртаницы для отображения в приложении. 
  // В name можно выбрать название экрана, оно будет отображаться снизу в меню 
}