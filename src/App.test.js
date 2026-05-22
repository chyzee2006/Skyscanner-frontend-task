import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

describe('App', () => {
  it('renders without crashing and displays key elements', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);

    // 1. Assert that the main heading is present and displays correct text
    const heading = div.querySelector('h1');
    expect(heading).toBeTruthy();
    expect(heading.textContent).toBe('Flight Schedule');

    // 2. Assert that the Continue button is rendered by scanning all buttons
    const buttons = Array.from(div.querySelectorAll('button'));
    const continueButton = buttons.find(btn => btn.textContent === 'Continue');
    expect(continueButton).toBeTruthy();

    ReactDOM.unmountComponentAtNode(div);
  });

  it('triggers alert when Continue button is clicked', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);

    // Mock window.alert
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

    // Find our specific Continue button and click it
    const buttons = Array.from(div.querySelectorAll('button'));
    const continueButton = buttons.find(btn => btn.textContent === 'Continue');
    expect(continueButton).toBeTruthy();
    continueButton.click();

    // Verify the alert was triggered with correct text
    expect(alertSpy).toHaveBeenCalledWith('It works!');

    // Clean up
    alertSpy.mockRestore();
    ReactDOM.unmountComponentAtNode(div);
  });
});
