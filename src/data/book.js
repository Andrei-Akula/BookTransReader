import { find } from 'lodash';
import Nt1Pet from './nt/1pet';

const takeNumbers = function* (count) {
  let n = 0;
  while (count-- > 0) {
    yield ++n;
  }
}

const bookContent = [
  {
    key: 'jas', name: 'Послание Иакова', shortName: 'Иак', data: Nt1Pet,
    chapterNumbers: [...takeNumbers(5)] },
  {
    key: 'ijn', name: 'Первое послание Иоанна', shortName: '1 Ин', data: Nt1Pet,
    chapterNumbers: [...takeNumbers(5)] },
  {
    key: '2jn', name: 'Второе послание Иоанна', shortName: '2 Ин', data: Nt1Pet,
    chapterNumbers: [...takeNumbers(1)] },
  {
    key: '3jn', name: 'Третье послание Иоанна', shortName: '3 Ин', data: Nt1Pet,
    chapterNumbers: [...takeNumbers(1)] },
  {
    key: '1pet', name: 'Первое послание Петра', shortName: '1 Петр', data: Nt1Pet,
    chapterNumbers: [...takeNumbers(5)] },
  {
    key: '2pet', name: 'Второе послание Петра', shortName: '2 Петр', data: Nt1Pet,
    chapterNumbers: [...takeNumbers(3)] },
  {
    key: 'jude', name: 'Послание Иуды', shortName: 'Иуд', data: Nt1Pet,
    chapterNumbers: [...takeNumbers(1)] },
  {
    key: 'rom', name: 'Послание к Римлянам', shortName: 'Рим', data: Nt1Pet,
    chapterNumbers: [...takeNumbers(16)] },
  {
    key: '1cor', name: 'Первое послание к Коринфянам', shortName: '1 Кор', data: Nt1Pet,
    chapterNumbers: [...takeNumbers(16)] },
  {
    key: '2cor', name: 'Второе послание к Коринфянам', shortName: '2 Кор', data: Nt1Pet,
    chapterNumbers: [...takeNumbers(13)] },
  {
    key: 'gal', name: 'Послание к Галатам', shortName: 'Гал', data: Nt1Pet,
    chapterNumbers: [...takeNumbers(6)] },
  {
    key: 'eph', name: 'Послание к Ефесянам', shortName: 'Еф', data: Nt1Pet,
    chapterNumbers: [...takeNumbers(6)] },
  {
    key: 'phil', name: 'Послание к Филиппийцам', shortName: 'Флп', data: Nt1Pet,
    chapterNumbers: [...takeNumbers(4)] },
  {
    key: 'col', name: 'Послание к Колоссянам', shortName: 'Кол', data: Nt1Pet,
    chapterNumbers: [...takeNumbers(4)] },
  {
    key: '1thess', name: 'Первое послание к Фессалоникийцам', shortName: '1 Фес', data: Nt1Pet,
    chapterNumbers: [...takeNumbers(5)] },
  {
    key: '2thess', name: 'Второе послание к Фессалоникийцам', shortName: '2 Фес', data: Nt1Pet,
    chapterNumbers: [...takeNumbers(3)] },
  {
    key: '1tim', name: 'Первое послание к Тимофею', shortName: '1 Тим', data: Nt1Pet,
    chapterNumbers: [...takeNumbers(6)] },
  {
    key: '2tim', name: 'Второе послание к Тимофею', shortName: '2 Тим', data: Nt1Pet,
    chapterNumbers: [...takeNumbers(4)] },
  {
    key: 'titus', name: 'Послание к Титу', shortName: 'Тит', data: Nt1Pet,
    chapterNumbers: [...takeNumbers(3)] },
  {
    key: 'philem', name: 'Послание к Филимону', shortName: 'Флм', data: Nt1Pet,
    chapterNumbers: [...takeNumbers(1)] },
  {
    key: 'heb', name: 'Послание к Евреям', shortName: 'Евр', data: Nt1Pet,
    chapterNumbers: [...takeNumbers(13)] }
];

export function getBookContent() {
  return bookContent;
}

export function getBookChapter(bookId, chapter, translation) {
  const book = find(getBookContent(), { key: bookId});
  if (book) {
    return book.data.translations[translation].chapters[chapter - 1] || {};
  }
  return {};
}

/*
mt
mk
lk
jn
acts
jas
1jn
2jn
3jn
1pet
2pet
jude
rom
1cor
2cor
gal
eph
phil
col
1thess
2thess
1tim
2tim
titus
philem
heb
rev
*/