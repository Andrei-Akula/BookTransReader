import React from 'react';
import { Form, Picker, Item } from 'native-base';

export function TranslationPicker(props) {
  return (
    <Form>
      <Picker
        iosHeader="Перевод"
        mode="dropdown"
        selectedValue={props.selected}
        onValueChange={(v) => props.switchTranslation(v)}
      >
        <Item label="Традиционный (ТПВ)" value="TPV" />
        <Item label="Традиционный (ТПК)" value="TPK" />
        <Item label="Общедоступный (ОП)" value="OP" />
      </Picker>
    </Form>
  );
}