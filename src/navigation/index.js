import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddMoneyScreen from '../screens/AddMoneyScreen';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../index';
import HomeStack from './HomeStack';
import MainStack from './MainStack';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
const MainNavigator = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName="Main"
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						if (route.name === 'Home') {
							iconName = focused
								? 'ios-information-circle'
								: 'ios-information-circle-outline';
						} else if (route.name === 'Main') {
							return <Text style={{ fontSize: size, color }}>₵</Text>;
							// iconName = focused ? 'ios-list-box' : 'ios-list';
						} else {
							iconName = focused ? 'ios-list' : 'ios-list';
						}

						// You can return any component that you like here!
						// if (route.name === 'Main') {
						// 	return <Text style={{ fontSize: size, color }}>₵</Text>;
						// }
						return <Ionicons name={iconName} size={size} color={color} />;
					},
				})}
				tabBarOptions={{
					activeTintColor: Colors.PRIMARY,
					inactiveTintColor: 'gray',
					showLabel: false,
				}}
			>
				<Tab.Screen
					options={{
						tabBarVisible: false,
					}}
					name="Home"
					component={HomeStack}
				/>
				<Tab.Screen name="Main" component={MainStack} />
				<Tab.Screen name="Activity" component={AddMoneyScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default MainNavigator;

const styles = StyleSheet.create({});
