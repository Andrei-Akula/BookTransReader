import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduce, findIndex, size } from 'lodash/fp';
import {
  Button,
  ScrollView,
  View,
} from 'react-native';
import { DrawerNavigator, StackNavigator, NavigationActions } from 'react-navigation';
import { CustomDrawerContentComponent } from './content';
import { Header, Paragraph, VerseNumber, Verse, Note, Cite } from '../../components/text/text';
import { ChapterView } from '../../components/view/chapter-view';
import { buildChapter } from '../../components/text/chapter';
import { getBookContent } from '../../data/book';
import { commonStyles } from '../../styles/global'

class HomeScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Содержание',
    headerLeft: <Button title="Содержание" onPress={() => navigation.navigate('DrawerOpen')} />,
    drawerLabel: 'Home',
  });
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ChapterView>
        <Header>Hello, Navigation!</Header>

        <Button
          onPress={() => navigate('DrawerOpen')}
          title="Содержание"
        />
        <Button
          onPress={() => navigate('1pet')}
          title="go to 1Pet"
        />
      </ChapterView>
    );
  }
}

function ChapterScreenUI(props) {
  // console.log('ChapterScreen props', props)
  return (
    <ChapterView>
      {/* <Header>{bookName}, глава {chapter}</Header> */}
      {/* <Paragraph>{props.navigation.state.params.book}!</Paragraph> */}
      {/* <Paragraph>{JSON.stringify(props.nav)}</Paragraph> */}
      <Paragraph>Перевод {props.trans.single}</Paragraph>
      {buildChapter(props.trans.single, "1pet", "1")}
      <Paragraph></Paragraph>
    </ChapterView>  
  );
}
const mapStateToProps = (state) => ({
  nav: state.nav,
  trans: state.trans
});
const ChapterScreen = connect(mapStateToProps)(ChapterScreenUI);

function getChapterScreen(bookId, bookName, chapter) {
  return ChapterScreen;
}

function getNavAction(bookId, chapter) {
  return NavigationActions.navigate({
    routeName: `${bookId}`,
    params: { book: bookId },
    // navigate can have a nested navigate action that will be run inside the child router
    action: NavigationActions.navigate({ routeName: `${bookId}-ch-${chapter}` })
  })
}

function getNextNavRoute(bookId, chapter) {
  const bookContent = getBookContent();
  const bookIndex = findIndex({ key: bookId }, bookContent);
  const book = bookContent[bookIndex];
  let nextChapter = chapter + 1;
  if (nextChapter > size(book.chapterNumbers)) {
    const nextBook = bookContent[bookIndex + 1];
    if (nextBook) {
      return { title: `${nextBook.shortName} 1`, navAction: getNavAction(nextBook.key, 1) }
    } else {
      return null;
    }
  }

  return { title: `${book.shortName} ${nextChapter}`, navAction: getNavAction(book.key, nextChapter) }
}


function getChapterRouteConfigs(bookId, bookName, shortName, chapterNumbers) {
  return reduce((acc, number) => {
    const nextNavRoute = getNextNavRoute(bookId, number);
    acc[`${bookId}-ch-${number}`] = {
      path: `book/${bookId}/chapter/${number}`,
      screen: getChapterScreen(bookId, bookName, number),
      navigationOptions: ({ navigation }) => ({
        title: `${shortName} ${number}`,
        headerRight: nextNavRoute ? <Button title={`${nextNavRoute.title} >`} onPress={() => navigation.dispatch(nextNavRoute.navAction)} /> : null,
      }),
    };
    return acc;
  }, {}, chapterNumbers);
}

function getBookScreen({ key, name, shortName, chapterNumbers}) {
  return StackNavigator({
    ...getChapterRouteConfigs(key, name, shortName, chapterNumbers)
  });
}



function getBookRouteConfigs(bookContent) {
  return reduce((acc, book) => {
    acc[book.key] = {
      path: `book/${book.key}`,
      screen: getBookScreen(book),
      navigationOptions: ({ navigation }) => ({
        // title: '',
        drawerLabel: book.name,
      }),
    };
    return acc;
  }, {}, bookContent);
}

const Drawer = DrawerNavigator({
  home: { screen: HomeScreen },
  ...getBookRouteConfigs(getBookContent()),
  }, { contentComponent: CustomDrawerContentComponent }
);

export default Drawer;