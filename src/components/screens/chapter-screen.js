import React from 'react';
import { connect } from 'react-redux';
import { findIndex, size, parseInt } from 'lodash/fp';
import { View, Dimensions, Platform } from 'react-native';
//import { Header, Paragraph, VerseNumber, Verse, Note, Cite } from '../../components/text/text';
import { Icon, Button, Footer, FooterTab, Form, Picker, Item, Text,
  ListItem, CheckBox } from 'native-base';
import { ChapterHeader } from './parts/chapter-header';
import { ChapterView } from '../../components/view/chapter-view';
import { ChapterMultiView } from '../../components/view/chapter-multi-view';
import { TranslationPicker } from './parts/translation-picker';
import { TranslationSwitcher } from './parts/translation-switcher';
import { buildChapter } from '../../components/text/chapter';
import { getBookContent } from '../../data/book';
import { toggleTranslaion } from '../../redux/actions/translations';
import { commonStyles } from '../../styles/global';



const getChapterAsNumber = parseInt(10);

function getNavRoute(bookId, chapter, isNext = true) {
  const bookContent = getBookContent();
  const bookIndex = findIndex({ key: bookId }, bookContent);
  const book = bookContent[bookIndex];
  const chapterDelta = isNext ? 1 : -1;
  let nextChapter = chapter + chapterDelta;
  const isOutOfChapterBoundary = isNext ? () => nextChapter > size(book.chapterNumbers) : () => nextChapter < 1;

  if (isOutOfChapterBoundary()) {
    const nextBook = bookContent[bookIndex + chapterDelta];
    const nextBookChapter = isNext ? '1' : `${nextBook.chapterNumbers.length}`;
    if (nextBook) {
      return { book: nextBook.key, chapter: nextBookChapter }
    } else {
      return null;
    }
  }

  return { book: bookId, chapter: `${nextChapter}` };
}


class ChapterScreenUI extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: ChapterHeader
  });

  constructor(props) {
    super(props);
    const { width, height } = Dimensions.get('window');
    this.state = {
      isPortrait: width < height,
    };
    this.onLayoutChange = (event) => {
      const { width, height } = event.nativeEvent.layout;
      this.setState({ isPortrait: width < height });
    };
  }

  onTPVOnly = (params) => this.props.switchTranslation('TPV');
  onTPKOnly = (params) => this.props.switchTranslation('TPK');
  onOPOnly = (params) => this.props.switchTranslation('OP');

  navigate = (isNext) => {
    const { navigation } = this.props;
    const { book, chapter } = navigation.state.params;
    const navRoute = getNavRoute(book, getChapterAsNumber(chapter), isNext);
    if (navRoute) {
      navigation.navigate('book', navRoute);
    } else {
      navigation.navigate('home');
    }
  };

  navigatePrev = () => this.navigate(false);
  navigateNext = () => this.navigate(true);
  

  render() {
    const { navigation, trans, switchTranslation } = this.props;
    const { book, chapter = '1' } = navigation.state.params;
    return (
      <View onLayout={this.onLayoutChange} style={commonStyles.container}>
        {this.state.isPortrait ?
          <ChapterView>
            {buildChapter(trans.single, book, chapter)}
          </ChapterView>
          :
          <ChapterMultiView
            tpv={buildChapter("TPV", book, chapter)}
            tpk={buildChapter("TPK", book, chapter)}
            op={buildChapter("OP", book, chapter)}
            transMulti={trans.multi}>
          </ChapterMultiView>
        }
        <Footer>
          <FooterTab>
            <Button 
              onPress={() => this.navigatePrev()}
            >
              <Icon name='arrow-back' />
            </Button>
            <Button 
              onPress={() => this.navigateNext()}
            >
              <Icon name='arrow-forward' />
            </Button>

            {this.state.isPortrait ?
              <TranslationPicker
                selected={trans.single}
                switchTranslation={switchTranslation} 
              />
              :
              <TranslationSwitcher
                trans={trans}
                switchTranslation={switchTranslation}
              />
            }
          </FooterTab>
        </Footer>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  trans: state.trans,
});

const mapDispatchToProps = (dispatch) => ({
  switchTranslation: (tr, isMulti = false) => {
    dispatch(toggleTranslaion(tr, isMulti))
  }
});

export const ChapterScreen = connect(mapStateToProps, mapDispatchToProps)(ChapterScreenUI);



