import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/configstore';
import Rockets from '../Rockets/RocketsList';

describe('Profile', () => {
  test('should match profile snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
