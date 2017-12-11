import React from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Container, Header, Content, List, ListItem } from 'native-base';
import { SafeAreaView, NavigationActions } from 'react-navigation';
import { TouchableItem } from '../view/TouchableItem';
import { getBookContent } from '../../data/book';
import { drawerStyles } from '../../styles/drawer';

// export function BookContent(props) {
//   return (
//     <List
//       dataArray={getBookContent()}
//       renderRow={data => {
//         return (
//           <ListItem
//             button
//             onPress={() => props.navigation.navigate(data.key)}
//           >
//             <Text>{data.name}</Text>
//           </ListItem>
//         );
//       }}
//     />
//   );
// }
export function BookContent(props) {
  const items = getBookContent();
  const { 
    navigation,
    activeTintColor,
    activeBackgroundColor,
    inactiveTintColor,
    inactiveBackgroundColor,
    activeItemKey,
    drawerPosition
  } = props;
  return (
    <View style={[styles.container]}>
      {items.map(item => {
        const focused = activeItemKey === item.key;
        const color = focused ? activeTintColor : inactiveTintColor;
        const backgroundColor = focused
          ? activeBackgroundColor
          : inactiveBackgroundColor;

        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'book', params: { 
                book: item.key, 
                chapter: "1" 
              } 
            })
          ]
        })

        return (
          <TouchableItem
            key={item.key}
            onPress={() => navigation.dispatch(resetAction) }
            delayPressIn={0}
          >
            <SafeAreaView
              style={{ backgroundColor }}
              forceInset={{
                [drawerPosition]: 'always',
                [drawerPosition === 'left' ? 'right' : 'left']: 'never',
                vertical: 'never',
              }}
            >
              <View style={[styles.item]}>
                <Text style={[styles.label, { color }]}>
                  {item.name}
                </Text>
              </View>
            </SafeAreaView>
          </TouchableItem>
        );
      })}
    </View>
  );
}

BookContent.defaultProps = {
  activeTintColor: '#2196f3',
  activeBackgroundColor: 'rgba(0, 0, 0, .04)',
  inactiveTintColor: 'rgba(0, 0, 0, .87)',
  inactiveBackgroundColor: 'transparent',
  drawerPosition: 'left',
};

export function CustomDrawerContentComponent (props) {
  return (
    <ScrollView>
       <SafeAreaView style={drawerStyles.drawerContainer} forceInset={{ top: 'always', horizontal: 'never' }}>
        <BookContent navigation={props.navigation} />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 16,
    width: 24,
    alignItems: 'center',
  },
  inactiveIcon: {
    /*
     * Icons have 0.54 opacity according to guidelines
     * 100/87 * 54 ~= 62
     */
    opacity: 0.62,
  },
  label: {
    margin: 6,
    // fontWeight: 'bold',
  },
});