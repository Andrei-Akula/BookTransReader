import React from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import { CustomDrawerContentComponent } from './content';
import { HomeScreen } from '../screens/home-screen'
import { ChapterScreen } from '../screens/chapter-screen';


const chapterNavigator = StackNavigator({
  book: { 
    screen: ChapterScreen,
    path: 'book/:bookId/:chapter',
  }
});

const Drawer = DrawerNavigator({
  home: { screen: HomeScreen },
  books: { screen: chapterNavigator }
  }, { contentComponent: CustomDrawerContentComponent }
);

export default Drawer;