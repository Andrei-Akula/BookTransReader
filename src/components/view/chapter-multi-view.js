import React from 'react';
import { connect } from 'react-redux';
import { reduce, values } from 'lodash/fp';
import { ScrollView, View, Button, Text } from 'react-native';
import { Paragraph } from '../../components/text/text';
import { toggleTranslaion } from '../../redux/actions/translations'
import { commonStyles } from '../../styles/global';

const transCount = reduce((acc, tr) => tr ? acc + 1 : acc, 0);

function ChapterGrid({ trans, switchTranslation, tpv, tpk, op }) {
  const itemsWidthStyle = transCount(values(trans)) === 3 ? commonStyles.chapterThreeItems : commonStyles.chapterTwoItems;
  return (
    <ScrollView >
      <View style={commonStyles.chapterGrid}>
        {trans['TPV'] && <View style={[commonStyles.chapterScrollView, 
          commonStyles.chapterScrollViewGridItem, itemsWidthStyle]}>
          {tpv}
        </View>}
        {trans['TPK'] && <View style={[commonStyles.chapterScrollView, 
          commonStyles.chapterScrollViewGridItem, itemsWidthStyle]}>
          {tpk}
        </View>}
        {trans['OP'] && <View style={[commonStyles.chapterScrollView, 
          commonStyles.chapterScrollViewGridItem, itemsWidthStyle]}>
          {op}
        </View>}
      </View>
    </ScrollView>
  );
}

function ChapterMultiViewUI({ style, children, trans, switchTranslation, tpv, tpk, op, ...rest }) {
  function onTPV(params) {
    switchTranslation('TPV');
  }
  function onTPK(params) {
    switchTranslation('TPK');
  }
  function onOP(params) {
    switchTranslation('OP');
  }
  return (
    <View style={[commonStyles.chapterView, style]} {...rest}>
      <ChapterGrid trans={trans} switchTranslation={switchTranslation} tpv={tpv} tpk={tpk} op={op} />
      <View style={commonStyles.translationBarView}>
        <View style={commonStyles.translationBarContainer}>
          <Button
            onPress={onTPV}
            title="ТПВ"
            color={trans['TPV'] ? "#f00" : "#fff"}
          />
          <Button
            onPress={onTPK}
            title="ТПК"
            color={trans['TPK'] ? "#f00" : "#fff"}
          />
          <Button
            onPress={onOP}
            title="ОП"
            color={trans['OP'] ? "#f00" : "#fff"}
          />
        </View>
      </View>
    </View>
  );
}

const mapStateToProps = (state) => ({
  trans: state.trans.multi
});
const mapDispatchToProps = (dispatch) => ({
  switchTranslation: (tr) => {
    dispatch(toggleTranslaion(tr, true))
  }
});


export const ChapterMultiView = connect(mapStateToProps, mapDispatchToProps)(ChapterMultiViewUI);