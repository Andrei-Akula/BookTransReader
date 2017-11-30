import React from 'react';
import { ScrollView, View } from 'react-native';
import { commonStyles } from '../../styles/global'

export function ChapterView({ style, children, ...rest }) {
  return (
    <View style={[commonStyles.chapterView, style]} {...rest}>
      <ScrollView style={commonStyles.chapterScrollView}>
        {children}
      </ScrollView>
      <View style={commonStyles.translationBarView}>
      </View>
    </View>
  );
}