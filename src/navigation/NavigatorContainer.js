import React from 'react';

import AppContainer from './AppNavigator';

const NavigatorContainer = () => {
  return (
    <AppContainer
      ref={nav => {
        this.navigator = nav;
      }}
    />
  );
};

export default NavigatorContainer;
