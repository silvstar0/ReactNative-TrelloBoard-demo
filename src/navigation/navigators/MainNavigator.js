import { createStackNavigator } from 'react-navigation';

import DashboardScreen from '../../screens/mainStack/Dashboard';

const MainNavigator = createStackNavigator(
  {
    Dashboard: { screen: DashboardScreen },
  },
  {
    initialRouteName: 'Dashboard',
    headerMode: 'none',
  },
);

export default MainNavigator;
