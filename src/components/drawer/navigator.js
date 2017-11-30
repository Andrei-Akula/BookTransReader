import React, { Component } from 'react';
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
          title="go to Jas"
        />
      </ChapterView>
    );
  }
}

function getChapterScreen(bookId, bookName, chapter) {
  return function ChapterScreen(props) {
    return (
      <ChapterView>
        <Header>{bookName}, глава {chapter}</Header>
        {/* <Paragraph>{props.navigation.state.params.book}!</Paragraph> */}

        <Paragraph>1 Петр, апостол Иисуса Христа – избранникам, рассеянным по провинциям, где они проживают: Понт, Галатия, Каппадокия, Асия и Вифиния. 2 Да умножатся среди вас благодать и мир от Бога Отца, Который вас познал изначально, освятил Духом на послушание и окропил кровью Иисуса Христа!</Paragraph>
        <Paragraph>3 Благословен Бог и Отец Господа нашего Иисуса Христа! По великой своей милости Он, когда воскрес Иисус Христос, и нас возродил от смерти к живой надежде, 4 чтобы нам получить наследие, непричастное тлению, скверне и гибели. Оно сберегается для вас на небесах – 5 а вас по вашей вере охраняет сила Божья, и уготованное спасение откроется в последний час. 6 Возрадуйтесь этому, даже если сейчас и пришлось вам на краткое время пережить скорбь от разных искушений. 7 И так ваша вера после испытаний окажется ценнее золота, которое однажды исчезнет – а ведь и его испытывают огнем! – и когда явится Иисус Христос, она принесет вам похвалу, славу и честь. 8 Вы любите Его, хотя не видели Его прежде, и верите, хотя и теперь Он незрим – и это внушает вам радость неизреченную и славную. </Paragraph>
        <Paragraph>9 Так вы приближаетесь к цели вашей веры – спасению ваших душ. 10 Об этом спасении старательно разузнавали пророки, которые пророчествовали о благодати, которая вас ожидала, 11 пытаясь определить, на какой именно час заранее указывал свидетельствовавший в них Христов Дух и каким будет этот час Христовых страданий и последовавшей за ними славы. 12 Им было открыто, что это служение – не для них самих, но для вас, и теперь это возвестили вам те, кто научил вас Евангелию Духом Святым, посланным с неба – а ведь даже ангелы желали бы прикоснуться к этой тайне.</Paragraph>
        <Paragraph>13 Так что соберитесь с мыслями, будьте трезвы и всю надежду возложите на благодать, которая будет вам дана, когда явится Иисус Христос. 14 Будьте послушными детьми, не поддавайтесь прежним прихотям времен вашего неведения. 15 Тот, кто вас призвал – свят, и вы будьте святы во всех своих поступках, как и написано: 16 «будьте святы, ибо Я свят». 17 Вы зовете Отцом Того, кто судит нелицеприятно каждого по его делам – так проводите же время своего житейского странствия в трепете перед Ним.</Paragraph>
        <Paragraph>18 Вы же знаете: от бренной жизни (какая вам досталась от отцов) искупило вас не серебро и золото, которые предстоит погибнуть, 19 но драгоценная кровь Христа – безупречного и беспорочного Агнца. 20 Так было назначено прежде сотворения мира, а произошло в последние времена при вашем посредстве. 21 И вы в единении с Ним верны Богу, Который воскресил Его из мертвых и наделил славой, так что веру и надежду вы возлагаете на Бога.</Paragraph>
        <Paragraph>22 Очистив ваши души послушанием истине [через Духа] и стремясь к нелицемерному братолюбию, постарайтесь от чистого сердца любить друг друга, 23 ведь вас возродило к новой жизни не тленное семя, но нетленное Слово неизменно [вовек] Живого Бога. 24 Ибо «все люди – трава, вся слава их – что цвет на траве, увяла трава и цветок облетел, 25 а слово Божье пребывает вовеки». Вот какая благая весть была вам возвещена!</Paragraph>
        <Paragraph></Paragraph>
      </ChapterView>
    );
  }
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
  if (nextChapter > size(book.chapters)) {
    const nextBook = bookContent[bookIndex + 1];
    if (nextBook) {
      return { title: `${nextBook.shortName} 1`, navAction: getNavAction(nextBook.key, 1) }
    } else {
      return null;
    }
  }

  return { title: `${book.shortName} ${nextChapter}`, navAction: getNavAction(book.key, nextChapter) }
}


function getChapterRouteConfigs(bookId, bookName, shortName, chapters) {
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
  }, {}, chapters);
}

function getBookScreen({ key, name, shortName, chapters}) {
  return StackNavigator({
    ...getChapterRouteConfigs(key, name, shortName, chapters)
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