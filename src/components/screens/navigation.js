import React from 'react';
import { StackNavigator } from 'react-navigation';
import { ChapterScreen } from '../screens/chapter-screen';

export const ChapterNavigator = StackNavigator({
  book: {
    screen: ChapterScreen,
    path: 'book/:bookId/:chapter',
  }
});
