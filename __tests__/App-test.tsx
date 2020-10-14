/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer, { act } from 'react-test-renderer';
import { Text } from 'react-native';
import AppButton from '../components/AppButton';

it('renders texts correctly', () => {
  const testRenderer = renderer.create(<App />);
  const testInstance = testRenderer.root;

  const buttons = testInstance.findAllByType(AppButton);

  const buttonText1 = buttons[0].findByType(Text);
  const buttonText2 = buttons[1].findByType(Text);

  expect(buttonText1.props.children).toEqual('Mudar de idioma');
  expect(buttonText2.props.children).toEqual('Mudar de tema');
});

it('renders texts on language switch', () => {
  const testRenderer = renderer.create(<App />);
  const testInstance = testRenderer.root;

  const buttons = testInstance.findAllByType(AppButton);

  act(() => {
    buttons[0].props.onPress();
  });

  const buttonText1 = buttons[0].findByType(Text);
  const buttonText2 = buttons[1].findByType(Text);

  expect(buttonText1.props.children).toEqual('Switch language');
  expect(buttonText2.props.children).toEqual('Switch theme');
});