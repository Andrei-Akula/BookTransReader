import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, Button, Text } from 'react-native';
import { Header, Paragraph } from '../../components/text/text';
import { toggleTranslaion } from '../../redux/actions/translations'
import { commonStyles } from '../../styles/global';


function ChapterViewUI({ style, children, trans, switchTranslation, ...rest }) {
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
      <ScrollView contentContainerStyle={commonStyles.chapterScrollView} >
        {children}
      </ScrollView>
      <View style={commonStyles.translationBarView}>
        <View style={commonStyles.translationBarContainer}>
          <Button
            onPress={onTPV}
            title="ТПВ"
            color={trans === 'TPV' ? "#f00" : "#fff"}
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            onPress={onTPK}
            title="ТПК"
            color={trans === 'TPK' ? "#f00" : "#fff"}
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            onPress={onOP}
            title="ОП"
            color={trans === 'OP' ? "#f00" : "#fff"}
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    </View>
  );
}

const mapStateToProps = (state) => ({
  trans: state.trans.single
});
const mapDispatchToProps = (dispatch) => ({
  switchTranslation: (tr) => {
    dispatch(toggleTranslaion(tr))
  }
});


export const ChapterView = connect(mapStateToProps, mapDispatchToProps)(ChapterViewUI);