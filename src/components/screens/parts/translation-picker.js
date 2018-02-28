import React from 'react';
import { find, get, compose } from 'lodash/fp';
import { Modal, View, StyleSheet, ScrollView } from 'react-native';
import { Container, Header, Title, Body, Content, Icon, Button, List, ListItem,
  Text, Radio, Left, Right } from 'native-base';
import { HelpText } from '../../../components/text/text';
import { commonStyles } from '../../../styles/global';

export class TranslationPicker extends React.Component {
  constructor(props) {
    super(props);

    this.listData = [
      { label: 'Традиц. византийский (ТПВ)', value: 'TPV' },
      { label: 'Традиц. критический (ТПК)', value: 'TPK' },
      { label: 'Общедоступный (ОП)', value: 'OP' }
    ];

    this.state = {
      isModalVisible: false,
      isHelpTextVisible: false
    };
  }

  openModal = () => this.setState({ isModalVisible: true });
  closeModal = () => this.setState({ isModalVisible: false });
  showHelpText = () => this.setState({ isHelpTextVisible: !this.state.isHelpTextVisible });

  selectTranslation = (tr) => {
    this.props.switchTranslation(tr)
    this.closeModal();
  };

  render() {
    const { selected } = this.props;
    const getSelectedLabel = compose(get('label'), find({ value: selected }))

    return (
      <View style={style.pickerView}
      >
        <ListItem
          button
          style={commonStyles.translationMultiItem}
          onPress={() => this.openModal()}
        >
            <Text>{getSelectedLabel(this.listData)}</Text>
        </ListItem>

        <Modal
          visible={this.state.isModalVisible}
          transparent={false}
          animationType="slide"
          onRequestClose = {() => this.closeModal()}
        >
          <Container>
            <Header>
              <Left>
                <Button
                  transparent
                  onPress={() => this.closeModal()}
                >
                  <Icon name='arrow-back' />
                </Button>
              </Left>
              <Body>
                <Title>Перевод</Title>
              </Body>
              <Right>
                <Button
                  transparent
                  onPress={() => this.showHelpText()}
                >
                  <Icon name='help-circle' />
                </Button>
              </Right>
            </Header>
            <Content>
              <List
                dataArray={this.listData}
                renderRow={(item) =>
                  <ListItem
                    button
                    onPress={() => this.selectTranslation(item.value)}
                  >
                    <Text>{item.label}</Text>
                    <Right>
                      <Radio
                        selected={selected === item.value}
                        onPress={() => this.selectTranslation(item.value)}
                      />
                    </Right>
                  </ListItem>
                }
              >
              </List>
              <ScrollView>
                {this.state.isHelpTextVisible && <View style={style.helpView} >
                  <HelpText>
                    Традиционный перевод (ТП) по возможности сохраняет формальные черты оригинала, оставляя необходимые пояснения для комментариев, а общедоступный (ОП) проясняет больше в самом тексте перевода.
                  </HelpText>
                  <HelpText>
                    Базовым является ТП, причем он делается в двух вариантах: 
                  </HelpText>
                  <HelpText>
                    1) традиционный византийский (ТПВ) – с византийского, близкого к текстуальной базе Синодального перевода и самого распространенного среди православных греков (Антониадис 1904-1912 с исправленным опечатками). Его приоритеты: сохранение культурно-исторической дистанции без искусственной архаизации, сохранение традиционной терминологии, литературность без манерности и вычурности.
                  </HelpText>
                  <HelpText>
                    2) традиционный критический (ТПК) - с самого распространенного в научных кругах критического текста (Nestle-Aland 28),
                  </HelpText>
                  <HelpText>
                    Общедоступный (ОП), по сути – незначительная ревизия традиционного с целью сделать его более понятным для читателя, не владеющего серьезными знаниями о Библии и ее мире.
                  </HelpText>
              </View>}
              </ScrollView>
            </Content>
          </Container>
        </Modal>
      </View>
    );
  }
}
// style={style.pickerView}
const style = StyleSheet.create({
  pickerView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  helpView: {
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 10
  },
});