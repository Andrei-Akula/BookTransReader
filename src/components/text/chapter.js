import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { isString, isArray, isEmpty, isUndefined, size } from 'lodash';
import { map, reduce, tail, parseInt  } from 'lodash/fp';
import { commonStyles } from '../../styles/global'
import { HeaderText, ParagraphText, VerseNumber, NoteText, CiteText, TextSpace } from './text';
import { Note } from '../ui/note';
import { Verse } from '../ui/verse';
import { getBookChapter } from '../../data/book';

const getChapterAsNumber = parseInt(10);


const buildTextWithNotes = reduce((acc, item) => {
  if (isUndefined(item.type) || item.type === "text") {
    return [...acc, <Text key={`verse-text-${size(acc)}`} >{item.text}</Text>];
  } else if (item.type === "note" ){
    return [...acc, <Note key={`verse-text-${size(acc)}`} note={`${item.text}) ${item.note}`} isEnd={item.end}>{item.text}</Note>];
  }
  return acc; 
}, []);


const buildVerses = (book, chapter, verses) => { 
  const result = reduce((acc, verse) => 
  (verse.type === 'verse' ?
    [
      ...acc,
      <TextSpace key={`space-verse-${verse.number}`} />,
      <Verse 
        book={book}
        chapter={chapter}
        number={verse.number} 
        key={`Verse-${verse.number}`}
      >
        <VerseNumber number={verse.number} key={`number${verse.number}`} />
        {(isString(verse.text) ? 
          <Text key={`verse-text-${verse.number}`}>{verse.text}</Text>
        : buildTextWithNotes(verse.text))}
      </Verse>,
    ]
    : acc), [], verses);

  return tail(result);
}

export function buildChapter(trans, bookId, chapter) {

  const chapterData = getBookChapter(bookId, getChapterAsNumber(chapter), trans);
  if (isEmpty(chapterData)) {
    console.warn('not found chapter', bookId, getChapterAsNumber(chapter), trans)
    return null;
  }
  let i = 0;
  return reduce((acc, item) => {
    if (item.type === "paragraph") {
      i += 1;
      return [...acc, <ParagraphText key={`${bookId}-${chapter}-${i}`}>{buildVerses(bookId, chapter, item.text)}</ParagraphText>];
    }
    return acc;
  }, [], chapterData.text);
};