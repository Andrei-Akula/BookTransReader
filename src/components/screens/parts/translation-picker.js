import React from 'react';
import { find, get, compose } from 'lodash/fp';
import { Modal, View } from 'react-native';
import { Container, Header, Title, Body, Content, Icon, Button, List, ListItem, 
  Text, Radio, Left, Right } from 'native-base';
import { commonStyles } from '../../../styles/global';

export class TranslationPicker extends React.Component {
  constructor(props) {
    super(props);

    this.listData = [
      { label: 'Традиционный (ТПВ)', value: 'TPV' },
      { label: 'Традиционный (ТПК)', value: 'TPK' },
      { label: 'Общедоступный (ОП)', value: 'OP' }
    ];

    this.state = {
      isModalVisible: false
    };
  }

  openModal = () => this.setState({ isModalVisible: true });
  closeModal = () => this.setState({ isModalVisible: false });

  selectTranslation = (tr) => {
    this.props.switchTranslation(tr)
    this.closeModal();
  };

  render() {
    const { selected } = this.props;
    const getSelectedLabel = compose(get('label'), find({ value: selected }))

    return (
      <View style={{
        flexDirection: 'row',
        alignItems: 'center'
      }}
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
              <Right />
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
            </Content>
          </Container>
        </Modal>
      </View>
    );
  }
}