import React from 'react';
import { connect } from 'react-redux';
import { reduce, values } from 'lodash/fp';
import { ScrollView, View, Text } from 'react-native';
import { Button, Icon, Footer, FooterTab } from 'native-base';
import { Paragraph } from '../../components/text/text';
import { toggleTranslaion } from '../../redux/actions/translations'
import { clearVerseSelection } from '../../redux/actions/text-related'
import { commonStyles } from '../../styles/global';

// TODO: fix clearVerseSelection

const transCount = reduce((acc, tr) => tr ? acc + 1 : acc, 0);

function ChapterGrid({ transMulti, tpv, tpk, op }) {
  const translationCount = transCount(values(transMulti));
  const itemsWidthStyle = translationCount === 3 ? 
    commonStyles.chapterThreeItems :  
    (translationCount === 2 ?
      commonStyles.chapterTwoItems : commonStyles.chapterOneItem);
  return (
    <ScrollView>
      <View style={commonStyles.chapterGrid}>
        {transMulti['TPV'] && <View style={[commonStyles.chapterScrollView, 
          commonStyles.chapterScrollViewGridItem, itemsWidthStyle]}>
          {tpv}
        </View>}
        {transMulti['TPK'] && <View style={[commonStyles.chapterScrollView, 
          commonStyles.chapterScrollViewGridItem, itemsWidthStyle]}>
          {tpk}
        </View>}
        {transMulti['OP'] && <View style={[commonStyles.chapterScrollView, 
          commonStyles.chapterScrollViewGridItem, itemsWidthStyle]}>
          {op}
        </View>}
      </View>
    </ScrollView>
  );
}

export function ChapterMultiView({ style, children, transMulti, tpv, tpk, op, ...rest }) {
  return (
    <View style={[commonStyles.chapterView, style]} {...rest}>
      <ChapterGrid transMulti={transMulti} tpv={tpv} tpk={tpk} op={op} /> 
    </View>
  );
}