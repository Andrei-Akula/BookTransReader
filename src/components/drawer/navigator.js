import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import { CustomDrawerContentComponent } from './content';
import { HomeScreen } from '../screens/home-screen'
import { OnboardScreen } from '../screens/onboard-screen'
import { ChapterNavigator } from '../screens/navigation';


export const Drawer = DrawerNavigator({
  onboard: { screen: OnboardScreen },
  home: { screen: HomeScreen },
  books: { screen: ChapterNavigator }
}, { contentComponent: CustomDrawerContentComponent }
);
