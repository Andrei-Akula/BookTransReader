import React from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,  Text } from "native-base";
import { Header as HeaderText } from '../text/text'
import { BookContent } from '../drawer/content'

export class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Содержание</Title>
          </Body>
          <Right>
            <Button
              transparent
              // onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="search" />
            </Button>
            {/* <Button
              transparent
              // onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="options" />
            </Button> */}
          </Right>
        </Header>
        <Content padder>
          <HeaderText style={{ marginBottom: 10 }}>Современный перевод новозаветных Посланий</HeaderText>
          <BookContent navigation={this.props.navigation} />
        </Content>
      </Container>
    );
  }
}