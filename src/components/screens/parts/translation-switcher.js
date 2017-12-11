import React from 'react';
import { View } from 'react-native';
import { Item, Text, ListItem, CheckBox } from 'native-base';
import { commonStyles } from '../../../styles/global';

export function TranslationSwitcher(props) {
  const { trans, switchTranslation } = props;
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    }}>
      <ListItem style={commonStyles.translationMultiItem}>
        <Text>Перевод:</Text>
      </ListItem>
      <ListItem style={commonStyles.translationMultiItem} >
        <CheckBox
          checked={trans.multi['TPV']}
          onPress={() => switchTranslation('TPV', true)}
        />
        <Text> ТПВ</Text>
      </ListItem>
      <ListItem style={commonStyles.translationMultiItem} >
        <CheckBox
          checked={trans.multi['TPK']}
          onPress={() => switchTranslation('TPK', true)}
        />
        <Text> ТПК</Text>
      </ListItem>
      <ListItem style={commonStyles.translationMultiItem} >
        <CheckBox
          checked={trans.multi['OP']}
          onPress={() => switchTranslation('OP', true)}
        />
        <Text> ОП</Text>
      </ListItem>
    </View>
  );
}