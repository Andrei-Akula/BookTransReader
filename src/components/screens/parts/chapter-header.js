import React from 'react';
import { findIndex } from 'lodash/fp';
import { View, Platform } from 'react-native';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { getBookContent } from '../../../data/book';

function getBookItem(bookId) {
  const bookContent = getBookContent();
  const bookIndex = findIndex({ key: bookId }, bookContent);
  return bookContent[bookIndex];
}


function HeaderLeft(props) {
  return Platform.OS === 'android' ? (
    <Button
      transparent
      onPress={() => props.navigation.navigate("DrawerOpen")}>
      <Icon name="menu" />
    </Button>
  ) : (
      <Button
        transparent
        onPress={() => props.navigation.navigate("home")}>
        <Icon name="list" />
      </Button>
    );
}

export function ChapterHeader(props) {
  const { navigation, scene: { route: { params: { book, chapter } } } } = props;
  const bookItem = getBookItem(book);
  return (
    <View>
      <Header>
        <Left>
          <HeaderLeft navigation={navigation} />
        </Left>
        <Body>
          <Title>{bookItem.shortName}, {chapter}</Title>
        </Body>
        <Right>
          <Button transparent
          // onPress={() => ) }
          >
            <Icon name="search" />
          </Button>
        </Right>
      </Header>
    </View>
  );
}
