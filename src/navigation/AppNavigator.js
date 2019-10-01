import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainNavigator from './navigators/MainNavigator';

const AppNavigator = createSwitchNavigator(
  {
    main: MainNavigator,
  },
  {
    initialRouteName: 'main',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
