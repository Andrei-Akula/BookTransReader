const fs = require('fs');
const fp = require('lodash/fp');

// const LOG = fp.curry((txt, val) => console.log(txt, val));

const trimStrings = fp.map(fp.trim);
const removeEmpty = fp.compose(fp.filter(s => !!fp.size(s)), trimStrings);
const trimStartStrings = fp.map(fp.trimStart);
const removeStartEmpty = fp.compose(fp.filter(s => !!fp.size(s)), trimStartStrings);
const getVerseNumber = fp.parseInt(10);
const getVerseWithoutNumber = fp.replace(/^\d+\s+/, '');
const hasNote = fp.includes('^');
const getNotes = fp.split('^');
const getParagraphs = fp.split('§');
const getVerses = fp.split('#');
const getTextWithNotes = fp.compose(removeStartEmpty, fp.split('|'));


const buildVerseText = text => ({
  "text": text
});

const buildVerseNote = ([text, note]) => ({
  "type": "note",
  "note": note,
  "text": text
});

const parseAndBuildVerseNote = fp.compose(buildVerseNote, getNotes);

const reducerBuildVerseTextsNotes = (acc, text) => {
  if (hasNote(text)) {
    return [...acc, parseAndBuildVerseNote(text)];
  } else {
    return [...acc, buildVerseText(text)];
  }
};

const parseAndBuildVerseNotes = fp.compose(fp.reduce(reducerBuildVerseTextsNotes, []), getTextWithNotes);

const paresNotes = verse => verse.includes('|') ? parseAndBuildVerseNotes(verse) : verse;

const parseVerseWithNotes = fp.compose(paresNotes, getVerseWithoutNumber)

const verse2json = verse => ({
  "type": "verse",
  "number": `${getVerseNumber(verse)}`,
  "text": parseVerseWithNotes(verse)
});

const parseVerses = fp.compose(fp.map(verse2json), removeEmpty, getVerses)

const paragraph2json = paragraph => ({
  "type": "paragraph",
  "text": parseVerses(paragraph)
});

const parseParagraphs = fp.compose(fp.map(paragraph2json), removeEmpty, getParagraphs)

const filePath = process.argv[2];
if (filePath && fs.existsSync(filePath)) {
  const fileContent = fs.readFileSync(filePath, 'utf8');

  fs.writeFileSync('output.json', JSON.stringify(parseParagraphs(fileContent), 'utf8'));

} else {
  console.log(`File ${filePath} can't be found`);
}
