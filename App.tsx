import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import InvoiceScreen from './screens/InvoiceScreen';
import Invoice from './screens/Invoice';
import InvoiceView from './screens/InvoiceView';
import ScheduleScreen from './screens/ScheduleScreen';
import PostView from './screens/PostView';
import HomeMenuView from './screens/HomeMenuView';
import AppList from './screens/AppList';
import Home from './screens/Home';
import Users from './screens/Users';
import Groups from './screens/Groups';
import UserModal from './screens/UserModal';
import ProductsList from './screens/ProductsList';
import Comments from './screens/Comments';
import UserListView from './screens/UserListView';
import StoryList from './screens/StoryList';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="InvoiceScreen">
        <Drawer.Screen name="InvoiceScreen" component={InvoiceScreen} />
        <Drawer.Screen name="Invoice" component={Invoice} />
        <Drawer.Screen name="InvoiceView" component={InvoiceView} />
        <Drawer.Screen name="ScheduleScreen" component={ScheduleScreen} />
        <Drawer.Screen name="PostView" component={PostView} />
        <Drawer.Screen name="HomeMenuView" component={HomeMenuView} />
        <Drawer.Screen name="AppList" component={AppList} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Users" component={Users} />
        <Drawer.Screen name="Groups" component={Groups} />
        <Drawer.Screen name="UserModal" component={UserModal} />
        <Drawer.Screen name="ProductsList" component={ProductsList} />
        <Drawer.Screen name="Comments" component={Comments} />
        <Drawer.Screen name="UserListView" component={UserListView} />
        <Drawer.Screen name="StoryList" component={StoryList} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
