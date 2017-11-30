import React from 'react';
import { ScrollView } from 'react-native';
import { DrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import { drawerStyles } from '../../styles/drawer';


export function CustomDrawerContentComponent (props) {
  return (
    <ScrollView>
      <SafeAreaView style={drawerStyles.drawerContainer} forceInset={{ top: 'always', horizontal: 'never' }}>
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
  );
}