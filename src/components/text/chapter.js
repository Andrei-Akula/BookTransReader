import React from 'react';
import PropTypes from 'prop-types';
import { isString, isArray, isEmpty, isUndefined, size } from 'lodash';
import { map, reduce, parseInt  } from 'lodash/fp';
import { commonStyles } from '../../styles/global'
import { Header, Paragraph, VerseNumber, Verse, Note, Cite } from './text';
import { NoteUI } from '../ui/note';
import { getBookChapter } from '../../data/book';

const getChapterAsNumber = parseInt(10);


const buildTextWithNotes = reduce((acc, item) => {
  if (isUndefined(item.type) || item.type === "text") {
    return [...acc, <Verse key={`verse-text-${size(acc)}`} >{item.text}</Verse>];
  } else if (item.type === "note" ){
    return [...acc, <NoteUI key={`verse-text-${size(acc)}`} note={item.note} isEnd={item.end}>{item.text}</NoteUI>];
  }
  return acc; 
}, []);


const buildVerses = reduce((acc, verse) => 
  (verse.type === 'verse' ?
    [
      ...acc,
      <VerseNumber number={verse.number} key={`number${verse.number}`} />,
      (isString(verse.text) ? 
        <Verse key={`verse-${verse.number}`}>{verse.text}</Verse>
      : buildTextWithNotes(verse.text))
    ]
    : acc), []);

export function buildChapter(trans, bookId, chapter) {

  const chapterData = getBookChapter(bookId, getChapterAsNumber(chapter), trans);
  if (isEmpty(chapterData)) {
    console.warn('not found chapter', bookId, getChapterAsNumber(chapter), trans)
    return null;
  }
  let i = 0;
  return reduce((acc, item) => {
    if (item.type === "paragraph") {
      return [...acc, <Paragraph key={`${bookId}-${chapter}-${++i}`}>{buildVerses(item.text)}</Paragraph>];
    }
    return acc;
  }, [], chapterData.text);
};